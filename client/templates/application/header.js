Template.header.helpers({
  gameLogo: function() {
    if(Session.get("currentGame") === undefined) {
      Session.set("currentGame", Games.findOne({})._id);
    }
    return Games.findOne({ _id: Session.get("currentGame")}).logo;
  }
})