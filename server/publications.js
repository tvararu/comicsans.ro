Meteor.publish('posts', function() {
  return Posts.find();
});

Meteor.publish('answers', function() {
  publishCount(this, 'answersCount', Answers.find());
  return Answers.find({}, { sort: { submitted: -1 }, limit: 10 });
});

Meteor.publish('scores', function() {
  publishCount(this, 'scoresCount', Scores.find());
  publishCount(this, 'scoresCount0to10', Scores.find({ value: { $lte: 10 } }));
  publishCount(this, 'scoresCount11to15', Scores.find({ value: { $gte: 11, $lte: 15 } }));
  publishCount(this, 'scoresCount16to20', Scores.find({ value: { $gte: 16, $lte: 20 } }));
  publishCount(this, 'scoresCount21to25', Scores.find({ value: { $gte: 21, $lte: 25 } }));
  publishCount(this, 'scoresCount26to29', Scores.find({ value: { $gte: 26, $lte: 29 } }));
  publishCount(this, 'scoresCount30', Scores.find({ value: { $gte: 30 } }));
  return Scores.find({}, { sort: { submitted: -1 }, limit: 10 });
});
