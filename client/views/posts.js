Template.posts.helpers({
  posts: function() {
    return _.shuffle(Posts.find().fetch());
  }
});

Template.post.events({
  'click .vote.real': function(e) {
    e.preventDefault();
    if (this.fake === false) {
      console.log('Right!');
    } else {
      console.log('Wrong!');
    }
  },
  
  'click .vote.fake': function(e) {
    e.preventDefault();
    if (this.fake === true) {
      console.log('Right!');
    } else {
      console.log('Wrong!');
    }
  }
});