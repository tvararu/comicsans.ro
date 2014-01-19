Template.posts.helpers({
  posts: function() {
    return _.shuffle(Posts.find().fetch());
  }
});

Template.post.events({
  'click .vote': function(e) {
    e.preventDefault();
    
    var answeredFake = $(e.target).hasClass('fake');
    
    Answers.insert({
      postId: this._id,
      fake: answeredFake
    });
    
    if ((this.fake && answeredFake) || (!this.fake && !answeredFake)) {
      // if the player got it right
      var answerCount = Session.get('answerCount');
      Session.set('answerCount', answerCount + 1);
    } else {
      Session.set('answerCount', 0);
    }
  }
});