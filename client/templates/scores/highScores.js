Session.set("scoreSort", -1);

Template.highScores.events({
  "click #show-low-scores": function(event, template) {
    Session.set("scoreSort", 1);
  },
  "click #show-high-scores": function(event, template) {
    Session.set("scoreSort", -1);
  }
});

Template.highScores.helpers({
  allTime: function() {  
    var scores = Scores.find({ game: Session.get("currentGame") }, {sort: {score: Session.get("scoreSort")}, limit: 10}).map(function(doc, index, cursor) {
      var score = _.extend(doc, {index: index + 1});
      return score;
    });
    return scores;
  },
  thisMonth: function() {
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    
    var scores = Scores.find({game: Session.get("currentGame"), submitted: {$gte: firstDay, $lt: lastDay }}, {sort: {score: Session.get("scoreSort")}, limit: 10}).map(function(doc, index, cursor) {
      var score = _.extend(doc, {index: index + 1});
      return score;
    });
    return scores;
  },
  thisWeek: function() {
    var date = new Date();
    var firstDay = new Date(date.setDate(date.getDate() - date.getDay()));
    var lastDay = new Date(date.setDate(date.getDate() - date.getDay()+6));
    
    var scores = Scores.find({game: Session.get("currentGame"), submitted: {$gte: firstDay, $lt: lastDay }}, {sort: {score: Session.get("scoreSort")}, limit: 10}).map(function(doc, index, cursor) {
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
    
    var scores = Scores.find({game: Session.get("currentGame"), submitted: {$gte: date }}, {sort: {score: Session.get("scoreSort")}, limit: 10}).map(function(doc, index, cursor) {
      var score = _.extend(doc, {index: index + 1});
      return score;
    });
    return scores;
  },
  myScores:  function() {
    var userId = Meteor.userId();
    var scores = Scores.find({game: Session.get("currentGame") , userId: userId}, {sort: {score: Session.get("scoreSort")}, limit: 10}).map(function(doc, index, cursor) {
      var score = _.extend(doc, {index: index + 1});
      return score;
    });
    return scores;
  },
  backglass: function() {
    return Games.findOne({ _id: Session.get("currentGame")}).backglass;
  },
  selectedScore: function() {
    var scoreId = Session.get('selectedScoreId');
    var score  = Scores.findOne({_id: scoreId})
    return score;
  },
  highScoreActive: function() {
    return Session.get("scoreSort") === -1;
  },
  lowScoreActive: function () {
    return Session.get("scoreSort") === 1;
  }
});
