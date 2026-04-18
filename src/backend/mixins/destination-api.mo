import Common "../types/common";
import DestTypes "../types/destination";
import DestLib "../lib/destination";
import List "mo:core/List";

mixin (
  destinations : List.List<DestTypes.Destination>,
  nextDestinationId : Nat
) {
  public query func listDestinations() : async [DestTypes.Destination] {
    DestLib.listDestinations(destinations);
  };

  public query func getDestination(id : Common.DestinationId) : async ?DestTypes.Destination {
    DestLib.getDestination(destinations, id);
  };

  public query func filterDestinations(filter : DestTypes.DestinationFilter) : async [DestTypes.Destination] {
    DestLib.filterDestinations(destinations, filter);
  };
};
