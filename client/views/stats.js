Template.stats.helpers({
  answers: function() {
    return Answers.find({}, { sort: { submitted: -1 } });
  },
  answersCount: function () {
    return Counts.get('answersCount');
  },
  scores: function() {
    return Scores.find({}, { sort: { submitted: -1 } });
  },
  scoresCount: function () {
    return Counts.get('scoresCount');
  }
});

Template.answer.helpers({
  'submitted': function () {
    return (new Date(this.submitted)).toString().slice(16, 25);
  },
  'isCorrectIcon': function () {
    return (this.fake === 'true') ? 'fa-times text-danger' : 'fa-check text-success';
  },
  'isCorrectRow': function () {
    return (this.fake === Posts.findOne(this.postId).fake.toString()) ? 'success' : '';
  },
  articleSnippet: function () {
    return Posts.findOne(this.postId).title.slice(0, 35) + "...";
  },
  articleUrl: function () {
    return Posts.findOne(this.postId).url;
  }
});

Template.highscore.helpers({
  'value': function () {
    return this.value + '/' + Posts.find().count();
  },
  'maxScoreRow': function () {
    return (this.value === Posts.find().count()) ? 'success' : '';
  },
  'submitted': function () {
    return (new Date(this.submitted)).toString().slice(4, 25);
  }
});
