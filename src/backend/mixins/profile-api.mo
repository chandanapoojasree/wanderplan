import Common "../types/common";
import ProfileTypes "../types/profile";
import ProfileLib "../lib/profile";
import Map "mo:core/Map";
import Time "mo:core/Time";

mixin (
  profiles : Map.Map<Common.UserId, ProfileTypes.UserProfile>
) {
  public shared ({ caller }) func getOrCreateProfile() : async ProfileTypes.UserProfile {
    let now = Time.now();
    ProfileLib.getOrCreateProfile(profiles, caller, now);
  };

  public query ({ caller }) func getMyProfile() : async ?ProfileTypes.UserProfile {
    ProfileLib.getProfile(profiles, caller);
  };

  public shared ({ caller }) func updateDisplayName(displayName : Text) : async Bool {
    ProfileLib.updateDisplayName(profiles, caller, displayName);
  };
};
