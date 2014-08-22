Meteor.publish('posts', function() {
  return Posts.find();
});

Meteor.publish('answers', function() {
  publishCount(this, 'answersCount', Answers.find());
  return Answers.find({}, { sort: { submitted: -1 }, limit: 10 });
});
