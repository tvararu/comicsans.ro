Template.posts.helpers({
  posts: function() {
    return _.shuffle(Posts.find().fetch());
  }
});

Template.post.events({
  'click .vote': function(e) {
    e.preventDefault();
    Answers.insert({
      postId: this._id,
      fake: $(e.target).hasClass('fake')
    });
  }
});