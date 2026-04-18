import Common "common";

module {
  public type Destination = {
    id : Common.DestinationId;
    name : Text;
    country : Text;
    description : Text;
    imageUrl : Text;
    activities : [Text];
    estimatedDailyBudget : Nat;
    rating : Float;
    tags : [Text];
  };

  public type DestinationFilter = {
    minBudget : ?Nat;
    maxBudget : ?Nat;
    minRating : ?Float;
    tags : [Text];
  };
};
