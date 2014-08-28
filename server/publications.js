Meteor.publish('posts', function() {
  return Posts.find();
});

Meteor.publish('answers', function() {
  return Answers.find({}, { sort: { submitted: -1 }, limit: 10 });
});
