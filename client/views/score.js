Template.score.helpers({
  answerCount: function() {
    return Session.get('answerCount');
  },

  postCount: function() {
    return Session.get('postCount');
  }
});
