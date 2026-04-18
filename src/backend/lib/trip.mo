import Common "../types/common";
import Types "../types/trip";
import List "mo:core/List";
import Array "mo:core/Array";

module {
  // Build day-wise itinerary by parsing dates.
  // Dates are expected as "YYYY-MM-DD". We generate one ItineraryDay per day.
  // To avoid complex date math, we generate a sequential list based on startDate/endDate text comparison.
  // We produce days numbered 1..N with dates filled from a simple offset approach.
  private func buildItinerary(startDate : Text, endDate : Text) : [Types.ItineraryDay] {
    // Simple implementation: parse YYYY-MM-DD and compute day count via epoch days
    let startDays = dateToDays(startDate);
    let endDays = dateToDays(endDate);
    if (endDays < startDays) { return [] };
    let count = endDays - startDays + 1;
    Array.tabulate<Types.ItineraryDay>(count, func(i) {
      {
        dayNumber = i + 1;
        date = daysToDate(startDays + i);
        activities = [];
      }
    });
  };

  // Convert YYYY-MM-DD to days since epoch (rough calculation)
  private func dateToDays(date : Text) : Nat {
    let parts = date.split(#char '-');
    var year : Nat = 0;
    var month : Nat = 1;
    var day : Nat = 1;
    var idx = 0;
    for (part in parts) {
      switch (idx) {
        case 0 { year := switch (part.toNat()) { case (?n) n; case null 2024 } };
        case 1 { month := switch (part.toNat()) { case (?n) n; case null 1 } };
        case 2 { day := switch (part.toNat()) { case (?n) n; case null 1 } };
        case _ {};
      };
      idx += 1;
    };
    // Approximate days: year*365 + leapDays + monthDays + day
    let leapYears = year / 4;
    let monthDays = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    let mOffset = if (month > 0 and month <= 12) { monthDays[month - 1] } else { 0 };
    year * 365 + leapYears + mOffset + day;
  };

  // Convert days since epoch back to YYYY-MM-DD
  private func daysToDate(days : Nat) : Text {
    // Rough reverse calculation
    let year = days / 365;
    let rem = days - (year * 365);
    let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var month = 1;
    var dayRem = rem;
    label monthLoop for (md in monthDays.values()) {
      if (dayRem > md) {
        dayRem -= md;
        month += 1;
      } else {
        break monthLoop;
      };
    };
    let day = if (dayRem == 0) { 1 } else { dayRem };
    let yearStr = year.toText();
    let monthStr = if (month < 10) { "0" # month.toText() } else { month.toText() };
    let dayStr = if (day < 10) { "0" # day.toText() } else { day.toText() };
    yearStr # "-" # monthStr # "-" # dayStr;
  };

  public func createTrip(
    trips : List.List<Types.Trip>,
    nextId : [var Nat],
    caller : Common.UserId,
    input : Types.CreateTripInput,
    now : Common.Timestamp
  ) : Types.Trip {
    let itinerary = buildItinerary(input.startDate, input.endDate);
    let trip : Types.Trip = {
      id = nextId[0];
      userId = caller;
      destinationId = input.destinationId;
      name = input.name;
      startDate = input.startDate;
      endDate = input.endDate;
      budget = input.budget;
      interests = input.interests;
      status = #planned;
      createdAt = now;
      itinerary = itinerary;
    };
    trips.add(trip);
    nextId[0] += 1;
    trip;
  };

  public func getTrip(
    trips : List.List<Types.Trip>,
    tripId : Common.TripId,
    caller : Common.UserId
  ) : ?Types.Trip {
    switch (trips.find(func(t) { t.id == tripId })) {
      case (?t) {
        if (t.userId == caller) { ?t } else { null };
      };
      case null { null };
    };
  };

  public func listUserTrips(
    trips : List.List<Types.Trip>,
    caller : Common.UserId
  ) : [Types.Trip] {
    trips.filter(func(t) { t.userId == caller }).toArray();
  };

  public func deleteTrip(
    trips : List.List<Types.Trip>,
    tripId : Common.TripId,
    caller : Common.UserId
  ) : Bool {
    let idx = trips.findIndex(func(t) { t.id == tripId and t.userId == caller });
    switch (idx) {
      case (?i) {
        // Remove by rebuilding without that index
        let arr = trips.toArray();
        trips.clear();
        for ((j, t) in arr.enumerate()) {
          if (j != i) { trips.add(t) };
        };
        true;
      };
      case null { false };
    };
  };

  public func addActivity(
    trips : List.List<Types.Trip>,
    nextActivityId : [var Nat],
    caller : Common.UserId,
    input : Types.AddActivityInput
  ) : Bool {
    let idx = trips.findIndex(func(t) { t.id == input.tripId and t.userId == caller });
    switch (idx) {
      case (?i) {
        let trip = trips.at(i);
        let newActivity : Types.Activity = {
          id = nextActivityId[0];
          time = input.time;
          title = input.title;
          description = input.description;
          durationMinutes = input.durationMinutes;
        };
        // Find the day or create it
        let existingDay = trip.itinerary.find(func(d) { d.dayNumber == input.dayNumber });
        let newItinerary = switch (existingDay) {
          case (?_day) {
            trip.itinerary.map(func(d : Types.ItineraryDay) : Types.ItineraryDay {
              if (d.dayNumber == input.dayNumber) {
                { d with activities = d.activities.concat([newActivity]) }
              } else { d }
            })
          };
          case null {
            let newDay : Types.ItineraryDay = {
              dayNumber = input.dayNumber;
              date = input.date;
              activities = [newActivity];
            };
            trip.itinerary.concat([newDay])
          };
        };
        trips.put(i, { trip with itinerary = newItinerary });
        nextActivityId[0] += 1;
        true;
      };
      case null { false };
    };
  };

  public func updateActivity(
    trips : List.List<Types.Trip>,
    caller : Common.UserId,
    input : Types.UpdateActivityInput
  ) : Bool {
    let idx = trips.findIndex(func(t) { t.id == input.tripId and t.userId == caller });
    switch (idx) {
      case (?i) {
        let trip = trips.at(i);
        var found = false;
        let newItinerary = trip.itinerary.map(func(d : Types.ItineraryDay) : Types.ItineraryDay {
          if (d.dayNumber == input.dayNumber) {
            let newActivities = d.activities.map(func(a : Types.Activity) : Types.Activity {
              if (a.id == input.activityId) {
                found := true;
                { a with
                  time = input.time;
                  title = input.title;
                  description = input.description;
                  durationMinutes = input.durationMinutes;
                }
              } else { a }
            });
            { d with activities = newActivities }
          } else { d }
        });
        if (found) {
          trips.put(i, { trip with itinerary = newItinerary });
          true
        } else { false }
      };
      case null { false };
    };
  };

  public func removeActivity(
    trips : List.List<Types.Trip>,
    tripId : Common.TripId,
    dayNumber : Nat,
    activityId : Common.ActivityId,
    caller : Common.UserId
  ) : Bool {
    let idx = trips.findIndex(func(t) { t.id == tripId and t.userId == caller });
    switch (idx) {
      case (?i) {
        let trip = trips.at(i);
        var removed = false;
        let newItinerary = trip.itinerary.map(func(d : Types.ItineraryDay) : Types.ItineraryDay {
          if (d.dayNumber == dayNumber) {
            let newActivities = d.activities.filter(func(a : Types.Activity) : Bool {
              if (a.id == activityId) { removed := true; false } else { true }
            });
            { d with activities = newActivities }
          } else { d }
        });
        if (removed) {
          trips.put(i, { trip with itinerary = newItinerary });
          true
        } else { false }
      };
      case null { false };
    };
  };

  public func updateTripStatus(
    trips : List.List<Types.Trip>,
    tripId : Common.TripId,
    status : Types.TripStatus,
    caller : Common.UserId
  ) : Bool {
    let idx = trips.findIndex(func(t) { t.id == tripId and t.userId == caller });
    switch (idx) {
      case (?i) {
        let trip = trips.at(i);
        trips.put(i, { trip with status = status });
        true;
      };
      case null { false };
    };
  };
};
