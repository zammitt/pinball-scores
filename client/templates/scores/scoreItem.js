Template.scoreItem.helpers({
  ownScore: function() {
    return this.userId === Meteor.userId();
  }
});