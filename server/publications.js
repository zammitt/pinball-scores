Meteor.publish('scores', function() {
  return Scores.find();
});