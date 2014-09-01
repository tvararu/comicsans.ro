Template.stats.rendered = function() {
  var doughnutData = [{
    value: 1,
    color: "#e74c3c",
    highlight: "#c0392b",
    label: "0-10"
  }, {
    value: 1,
    color: "#f39c12",
    highlight: "#d35400",
    label: "11-15"
  }, {
    value: 1,
    color: "#f1c40f",
    highlight: "#f39c12",
    label: "16-20"
  }, {
    value: 1,
    color: "#1abc9c",
    highlight: "#16a085",
    label: "21-25"
  }, {
    value: 1,
    color: "#3498db",
    highlight: "#2980b9",
    label: "26-29"
  }, {
    value: 1,
    color: "#9b59b6",
    highlight: "#8e44ad",
    label: "30"
  }];
  var doughnutScores = new Chart(
    document.getElementById('doughnut-chart-scores').getContext('2d')
  ).Doughnut(doughnutData, {
    responsive: true
  });
  Meteor.setTimeout(function () {
    Deps.autorun(function () {
      var s0to10 = Counts.get('scoresCount0to10');
      var s11to15 = Counts.get('scoresCount11to15');
      var s16to20 = Counts.get('scoresCount16to20');
      var s21to25 = Counts.get('scoresCount21to25');
      var s26to29 = Counts.get('scoresCount26to29');
      var s30 = Counts.get('scoresCount30');
      doughnutScores.segments[0].value = s0to10;
      doughnutScores.segments[1].value = s11to15;
      doughnutScores.segments[2].value = s16to20;
      doughnutScores.segments[3].value = s21to25;
      doughnutScores.segments[4].value = s26to29;
      doughnutScores.segments[5].value = s30;
      doughnutScores.update();
    });
  }, 1);
};

Template.stats.helpers({
  answers: function() {
    return Answers.find({}, {
      sort: {
        submitted: -1
      }
    });
  },
  answersCount: function() {
    return Counts.get('answersCount');
  },
  scores: function() {
    return Scores.find({}, {
      sort: {
        submitted: -1
      }
    });
  },
  scoresCount: function() {
    return Counts.get('scoresCount');
  }
});

Template.answer.helpers({
  'submitted': function() {
    return (new Date(this.submitted)).toString().slice(16, 25);
  },
  'isCorrectIcon': function() {
    return (this.fake === 'true') ? 'fa-times text-danger' : 'fa-check text-success';
  },
  'isCorrectRow': function() {
    return (this.fake === Posts.findOne(this.postId).fake.toString()) ? 'success' : '';
  },
  articleSnippet: function() {
    return Posts.findOne(this.postId).title.slice(0, 35) + "...";
  },
  articleUrl: function() {
    return Posts.findOne(this.postId).url;
  }
});

Template.highscore.helpers({
  'value': function() {
    return this.value + '/' + Posts.find().count();
  },
  'maxScoreRow': function() {
    return (this.value === Posts.find().count()) ? 'success' : '';
  },
  'submitted': function() {
    return (new Date(this.submitted)).toString().slice(4, 25);
  }
});
