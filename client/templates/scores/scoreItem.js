Template.scoreItem.helpers({
  ownScore: function() {
    return this.userId === Meteor.userId();
  },
  avatar: function() {  
    var userId = this.userId;
    Meteor.call('getUserAvatar', this.userId, function(error, result) {
      // display the error to the user and abort
      if (error) {
        return swal({ type: "error", title: error.reason });
      } else {
        Session.set(userId + "_avatar", result);
      }
    });
    
    return Session.get(this.userId + "_avatar");
  }
});