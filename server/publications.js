Meteor.publish('scores', function() {
  return Scores.find();
});

Meteor.publish('users', function() {
  return Meteor.users.find({});
});