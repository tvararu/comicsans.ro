Meteor.publish('posts', function() {
  return Posts.find();
});

Meteor.publish('answers', function() {
  return Answers.find();
});