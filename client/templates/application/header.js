Template.header.events({
  "click .game-switcher": function(event, template) {
    Session.set("currentGame", $(event.currentTarget).attr("data-game-id"));
    $(".game-switcher").removeClass("active");
    $(event.currentTarget).addClass("active");
  }
});

Template.header.helpers({
  gameLogo: function() {
    if(Session.get("currentGame") === undefined) {
      Session.set("currentGame", Games.findOne({})._id);
    }
    return Games.findOne({ _id: Session.get("currentGame")}).logo;
  },
  games: function() {
    return Games.find();
  }
})