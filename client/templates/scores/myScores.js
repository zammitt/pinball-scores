Template.myScores.events({
  "click .delete-score": function (event, template) {
    var id = $(event.currentTarget).attr("data-id");
    swal({ 
      title: "Are you sure?", 
      text: "This score sucks anyway", 
      type: "warning",  
      showCancelButton: true,   
      confirmButtonColor: "#DD6B55",   
      confirmButtonText: "Yes, delete it!",   
      closeOnConfirm: false
    }, function() {
      Scores.remove({ _id: id });
      swal("Deleted!", "Your score has been deleted.", "success");
    });
  }
});

Template.myScores.helpers({
  myScores: function() {
    var userId = Meteor.userId();
    return Scores.find({ userId: userId, game: Session.get("currentGame") }, {sort: {score: -1} });
  },
  settings: function() {
    return {
      showNavigationRowsPerPage: false,
      showFilter: false,
      rowsPerPage: 100,
      useFontAwesome: true, 
      fields: [
        { key: 'score', label: 'Score', sort: 'descending'},
        { key: 'submitted', label: 'Date', fn: function(value, object) {
          return moment(value).format('MM/DD/YYYY');
        }},
        { key: '_id', label: '', fn: function(value, object) {
           return new Spacebars.SafeString('<a href="#" class="btn btn-danger btn-xs delete-score" data-id="' + value + '">Delete</a>');
        }}
      ]
    };
  }
});