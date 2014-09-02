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

  var doughnutData2 = [{
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
  var doughnutScores2 = new Chart(
    document.getElementById('doughnut-chart-scores-no-bottom').getContext('2d')
  ).Doughnut(doughnutData2, {
    responsive: true
  });
  Deps.autorun(function () {
    var s0to10  = Counts.get('scoresCount0to10')  || 1;
    var s11to15 = Counts.get('scoresCount11to15') || 1;
    var s16to20 = Counts.get('scoresCount16to20') || 1;
    var s21to25 = Counts.get('scoresCount21to25') || 1;
    var s26to29 = Counts.get('scoresCount26to29') || 1;
    var s30     = Counts.get('scoresCount30')     || 1;

    doughnutScores.segments[0].value = s0to10;
    doughnutScores.segments[1].value = s11to15;
    doughnutScores.segments[2].value = s16to20;
    doughnutScores.segments[3].value = s21to25;
    doughnutScores.segments[4].value = s26to29;
    doughnutScores.segments[5].value = s30;
    doughnutScores.update();

    doughnutScores2.segments[0].value = s11to15;
    doughnutScores2.segments[1].value = s16to20;
    doughnutScores2.segments[2].value = s21to25;
    doughnutScores2.segments[3].value = s26to29;
    doughnutScores2.segments[4].value = s30;
    doughnutScores2.update();
  });

  $('.fixedsticky').fixedsticky();
};

Template.stats.helpers({
  'posts': function () {
    return Posts.find();
  }
});

Template.postWithAnswers.helpers({
  'answersCount': function () {
    return Counts.get('answers' + this._id);
  },
  'answersTrueCount': function () {
    return Counts.get('answersTrue' + this._id);
  },
  'answersTruePercentage': function () {
    var total = Counts.get('answers' + this._id);
    return Math.floor(100 * ( Counts.get('answersTrue' + this._id) / total ));
  },
  'answersFalseCount': function () {
    return Counts.get('answers' + this._id) - Counts.get('answersTrue' + this._id);
  },
  'answersFalsePercentage': function () {
    var total = Counts.get('answers' + this._id);
    return Math.ceil(100 * (
        (Counts.get('answers' + this._id) - Counts.get('answersTrue' + this._id)) / total
      )
    );
  },
  'postClass': function () {
    return this.fake ? 'panel-danger' : 'panel-success';
  }
});
