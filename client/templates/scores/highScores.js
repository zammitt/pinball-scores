Template.highScores.helpers({
  allTime: function() {
    var scores = Scores.find({}, {sort: {score: -1}, limit: 10}).map(function(doc, index, cursor) {
      var score = _.extend(doc, {index: index + 1});
      return score;
    });
    return scores;
  },
  thisMonth: function() {
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    
    var scores = Scores.find({submitted: {$gte: firstDay, $lt: lastDay }}, {sort: {score: -1}, limit: 10}).map(function(doc, index, cursor) {
      var score = _.extend(doc, {index: index + 1});
      return score;
    });
    return scores;
  },
  thisWeek: function() {
    var date = new Date();
    var firstDay = new Date(date.setDate(date.getDate() - date.getDay()));
    var lastDay = new Date(date.setDate(date.getDate() - date.getDay()+6));
    
    var scores = Scores.find({submitted: {$gte: firstDay, $lt: lastDay }}, {sort: {score: -1}, limit: 10}).map(function(doc, index, cursor) {
      var score = _.extend(doc, {index: index + 1});
      return score;
    });
    return scores;
  },
  today: function() {
    var date = new Date();
    date.setSeconds(0);
    date.setMinutes(0);
    date.setHours(0);
    
    var scores = Scores.find({submitted: {$gte: date }}, {sort: {score: -1}, limit: 10}).map(function(doc, index, cursor) {
      var score = _.extend(doc, {index: index + 1});
      return score;
    });
    return scores;
  },
  myScores:  function() {
    var userId = Meteor.userId();
    var scores = Scores.find({userId: userId}, {sort: {score: -1}, limit: 10}).map(function(doc, index, cursor) {
      var score = _.extend(doc, {index: index + 1});
      return score;
    });
    return scores;
  }
});
