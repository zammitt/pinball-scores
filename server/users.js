Meteor.methods({
  getUserAvatar: function(userId) {
    var user= Meteor.users.findOne(userId);
    
    if(user.profile.name == "Marcus Gilbert") {
      return "/sunny-d-and-rum-yum-yum.jpg";
    }
    
    if (user && user.services && user.services.google)
    {
      return user.services.google.picture;
    }
    else
    {
        return "images/withOutPhoto.png";
    }
  }
});