import Common "types/common";
import DestTypes "types/destination";
import DestLib "lib/destination";
import ProfileTypes "types/profile";
import TripTypes "types/trip";
import DestinationApi "mixins/destination-api";
import TripApi "mixins/trip-api";
import ProfileApi "mixins/profile-api";
import List "mo:core/List";
import Map "mo:core/Map";

actor {
  let destinations = List.empty<DestTypes.Destination>();
  var nextDestinationId : Nat = 1;

  let trips = List.empty<TripTypes.Trip>();
  let nextTripId : [var Nat] = [var 1];
  let nextActivityId : [var Nat] = [var 1];

  let profiles = Map.empty<Common.UserId, ProfileTypes.UserProfile>();

  // Seed destinations on first run (only if empty)
  if (destinations.size() == 0) {
    nextDestinationId := DestLib.seedDestinations(destinations, nextDestinationId);
  };

  include DestinationApi(destinations, nextDestinationId);
  include TripApi(trips, nextTripId, nextActivityId);
  include ProfileApi(profiles);
};
