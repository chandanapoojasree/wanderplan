import Common "../types/common";
import Types "../types/profile";
import Map "mo:core/Map";

module {
  public func getOrCreateProfile(
    profiles : Map.Map<Common.UserId, Types.UserProfile>,
    caller : Common.UserId,
    now : Common.Timestamp
  ) : Types.UserProfile {
    switch (profiles.get(caller)) {
      case (?p) { p };
      case null {
        let newProfile : Types.UserProfile = {
          userId = caller;
          displayName = caller.toText();
          createdAt = now;
        };
        profiles.add(caller, newProfile);
        newProfile;
      };
    };
  };

  public func getProfile(
    profiles : Map.Map<Common.UserId, Types.UserProfile>,
    userId : Common.UserId
  ) : ?Types.UserProfile {
    profiles.get(userId);
  };

  public func updateDisplayName(
    profiles : Map.Map<Common.UserId, Types.UserProfile>,
    caller : Common.UserId,
    displayName : Text
  ) : Bool {
    switch (profiles.get(caller)) {
      case (?p) {
        profiles.add(caller, { p with displayName = displayName });
        true;
      };
      case null { false };
    };
  };
};
