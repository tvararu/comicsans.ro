Template.stats.helpers({
  answers: function() {
    return Answers.find({}, { sort: { submitted: -1 } });
  },
  count: function () {
    return Counts.get('answersCount');
  }
});
