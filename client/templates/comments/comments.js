Template.scoreComment.helpers({
  avatar: function() {  
    var userId = this.owner;

    Meteor.call('getUserAvatar', userId, function(error, result) {
      // display the error to the user and abort
      if (error) {
        return swal({ type: "error", title: error.reason });
      } else {
        Session.set(userId + "_avatar", result);
      }
    });
    
    return Session.get(userId + "_avatar");
  },
  user: function() {
    return Meteor.users.findOne({_id: this.owner});
  }
});