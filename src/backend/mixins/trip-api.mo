import Common "../types/common";
import TripTypes "../types/trip";
import TripLib "../lib/trip";
import List "mo:core/List";
import Time "mo:core/Time";

mixin (
  trips : List.List<TripTypes.Trip>,
  nextTripId : [var Nat],
  nextActivityId : [var Nat]
) {
  public shared ({ caller }) func createTrip(input : TripTypes.CreateTripInput) : async TripTypes.Trip {
    let now = Time.now();
    TripLib.createTrip(trips, nextTripId, caller, input, now);
  };

  public query ({ caller }) func getTrip(tripId : Common.TripId) : async ?TripTypes.Trip {
    TripLib.getTrip(trips, tripId, caller);
  };

  public query ({ caller }) func listMyTrips() : async [TripTypes.Trip] {
    TripLib.listUserTrips(trips, caller);
  };

  public shared ({ caller }) func deleteTrip(tripId : Common.TripId) : async Bool {
    TripLib.deleteTrip(trips, tripId, caller);
  };

  public shared ({ caller }) func addActivity(input : TripTypes.AddActivityInput) : async Bool {
    TripLib.addActivity(trips, nextActivityId, caller, input);
  };

  public shared ({ caller }) func updateActivity(input : TripTypes.UpdateActivityInput) : async Bool {
    TripLib.updateActivity(trips, caller, input);
  };

  public shared ({ caller }) func removeActivity(tripId : Common.TripId, dayNumber : Nat, activityId : Common.ActivityId) : async Bool {
    TripLib.removeActivity(trips, tripId, dayNumber, activityId, caller);
  };

  public shared ({ caller }) func updateTripStatus(tripId : Common.TripId, status : TripTypes.TripStatus) : async Bool {
    TripLib.updateTripStatus(trips, tripId, status, caller);
  };
};
