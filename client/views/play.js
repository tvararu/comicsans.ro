Template.play.helpers({
  answerCount: function() {
    return Session.get('answerCount');
  },
  
  postCount: function() {
    return Posts.find().count();
  }
});