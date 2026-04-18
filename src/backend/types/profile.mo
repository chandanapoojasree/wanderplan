import Common "common";

module {
  public type UserProfile = {
    userId : Common.UserId;
    displayName : Text;
    createdAt : Common.Timestamp;
  };
};
