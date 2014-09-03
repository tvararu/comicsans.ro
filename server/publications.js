Meteor.publish('posts', function() {
  return Posts.find();
});

Meteor.publish('stats', function() {
  var sub = this;
  var answerCountsCollection = 'answer.counts';

  var totalCounts = Answers.aggregate([
    { $group: { _id: '$postId', total: { $sum: 1 } } }
  ]);

  var fakeCounts = Answers.aggregate([
    { $match: { fake: 'true' } },
    { $group: { _id: '$postId', totalFake: { $sum: 1 } } }
  ]);

  // Add each of the results to the subscription.
  var count;
  for (var i = 0; i < totalCounts.length; i++) {
    count = _.extend(totalCounts[i], fakeCounts[i]);
    // Generate a random disposable id for aggregated documents.
    sub.added(
      answerCountsCollection,
      count._id,
      {
        total: count.total,
        totalFake: count.totalFake
      }
    );
  }

  var scoreCountsCollection = 'score.counts';

  var scoreCounts = Scores.aggregate([
    { $group: { _id: "$value", total: { $sum: 1 } } },
    { $sort: { _id: 1 } }
  ]);

  var scoreTotals = _.range(31).map(function () { return 0; });

  _.each(scoreCounts, function (count) {
    scoreTotals[count._id] = count.total;
  });

  _.each(scoreTotals, function (total, index) {
    sub.added(
      scoreCountsCollection,
      index,
      {
        total: total
      }
    );
  });
});
