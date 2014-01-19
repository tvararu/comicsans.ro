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
      // if he got it right
      console.log('Correct!');
    } else {
      console.log('Wrong!');
    }
  }
});