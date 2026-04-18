import Common "common";

module {
  public type TripStatus = {
    #planned;
    #ongoing;
    #completed;
  };

  public type Activity = {
    id : Common.ActivityId;
    time : Text;
    title : Text;
    description : Text;
    durationMinutes : Nat;
  };

  public type ItineraryDay = {
    dayNumber : Nat;
    date : Text;
    activities : [Activity];
  };

  public type Trip = {
    id : Common.TripId;
    userId : Common.UserId;
    destinationId : Common.DestinationId;
    name : Text;
    startDate : Text;
    endDate : Text;
    budget : Nat;
    interests : [Text];
    status : TripStatus;
    createdAt : Common.Timestamp;
    itinerary : [ItineraryDay];
  };

  public type CreateTripInput = {
    destinationId : Common.DestinationId;
    name : Text;
    startDate : Text;
    endDate : Text;
    budget : Nat;
    interests : [Text];
  };

  public type AddActivityInput = {
    tripId : Common.TripId;
    dayNumber : Nat;
    date : Text;
    time : Text;
    title : Text;
    description : Text;
    durationMinutes : Nat;
  };

  public type UpdateActivityInput = {
    tripId : Common.TripId;
    dayNumber : Nat;
    activityId : Common.ActivityId;
    time : Text;
    title : Text;
    description : Text;
    durationMinutes : Nat;
  };
};
