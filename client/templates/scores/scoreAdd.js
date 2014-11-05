
Template.scoreAdd.events({
  "click .add-score": function (event, template) {
    
    var scoreInput =  document.getElementById("score-input");
    var score = scoreInput.value;
	
    if(!isNaN(score)) { 
      Meteor.call('scoreInsert', Number(score), function(error, result) {
        // display the error to the user and abort
        if (error) {
          return swal({ type: "error", title: error.reason });
        } else { 
          swal({type: "success", title: "Score added sucessfully!" });
		  scoreInput.value = '';
        }
      });
    }
  }
});