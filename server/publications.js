Meteor.publish('scores', function() {
  return Scores.find();
});

Meteor.publish('users', function() {
  return Meteor.users.find({});
});

Meteor.publish('games', function() {
  return Games.find();
});