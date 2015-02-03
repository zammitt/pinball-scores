Template.scoreList.helpers({
  scores: function() {
    var scores = Scores.find({}, {sort: {score: -1}, limit: 10}).map(function(doc, index, cursor) {
      var score = _.extend(doc, {index: index + 1});
      return score;
    });
    return scores;
  }
});

Template.scoreList.events({
  "click .add-score": function (event, template) {
    
    var scoreInput =  document.getElementById("score-input");
    var score = scoreInput.value;
	scoreInput.value = '';
	
    if(!isNaN(score)) { 
      Meteor.call('scoreInsert', Number(score), function(error, result) {
        // display the error to the user and abort
        if (error) {
		  scoreInput.value = score;
          return swal({ type: "error", title: error.reason });
        } else { 
          swal({type: "success", title: "Score added sucessfully!" });
        }
      });
    }
  }
});