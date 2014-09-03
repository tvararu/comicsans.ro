Template.stats.rendered = function() {
  var doughnutData = [{
    value: 1,
    color: '#34495e',
    highlight: '#2c3e50'
  }, {
    value: 1,
    color: '#e74c3c',
    highlight: '#c0392b'
  }, {
    value: 1,
    color: '#f39c12',
    highlight: '#d35400'
  }, {
    value: 1,
    color: '#f1c40f',
    highlight: '#f39c12'
  }, {
    value: 1,
    color: '#2ecc71',
    highlight: '#27ae60'
  }, {
    value: 1,
    color: '#1abc9c',
    highlight: '#16a085'
  }, {
    value: 1,
    color: '#3498db',
    highlight: '#2980b9'
  }, {
    value: 1,
    color: '#9b59b6',
    highlight: '#8e44ad'
  }];
  var doughnutScores = new Chart(
    document.getElementById('doughnut-chart-scores').getContext('2d')
  ).Doughnut(doughnutData, {
    responsive: true
  });

  var doughnutData2 = [{
    value: 1,
    color: '#f1c40f',
    highlight: '#f39c12'
  }, {
    value: 1,
    color: '#2ecc71',
    highlight: '#27ae60'
  }, {
    value: 1,
    color: '#1abc9c',
    highlight: '#16a085'
  }, {
    value: 1,
    color: '#3498db',
    highlight: '#2980b9'
  }, {
    value: 1,
    color: '#9b59b6',
    highlight: '#8e44ad'
  }];
  var doughnutScores2 = new Chart(
    document.getElementById('doughnut-chart-scores-no-bottom').getContext('2d')
  ).Doughnut(doughnutData2, {
    responsive: true
  });

  var partitions = _.range(8).map(function () { return 0; });
  var bounds = [
    [0, 0],
    [1, 5],
    [6, 10],
    [11, 15],
    [16, 20],
    [21, 25],
    [26, 29],
    [30, 30]
  ];
  Deps.autorun(function() {
    _.each(bounds, function (bound, index) {
      for (var i = bound[0]; i <= bound[1]; i++) {
        var count = Session.get('score' + i + '.count');
        partitions[index] += count;
      }
      // If there's not at least 1 element in the partition, add one.
      // If not, chartjs explodes. :D Good job, guy, great library 10/10.
      partitions[index] = partitions[index] || 1;
    });

    var doughnuts = [
      { ref: doughnutScores, lo: 0, hi: 7 },
      { ref: doughnutScores2, lo: 3, hi: 7 }
    ];
    _.each(doughnuts, function (chart) {
      for (var i = chart.lo, j = 0; i <= chart.hi; i++, j++) {
        chart.ref.segments[j].value = partitions[i];
        chart.ref.segments[j].label = bounds[i][0] + ' - ' + bounds[i][1];
      }
      chart.ref.update();
    });
  });
  // 
  // if (window.innerWidth >= 992) {
  //   var sticky = $('.sticky');
  //   var footer = $('.disclaimer');
  //   var page = $('.stats');
  //
  //   sticky.each(function (index, el) {
  //     var $el = $(el);
  //     $el.css('width', $el.parent().width());
  //
  //     page.on('scroll', function () {
  //       if ($el.parent().offset().top <= 0) {
  //         if (!$el.hasClass('fixed')) {
  //           $el.addClass('fixed');
  //         }
  //         var diff = footer.offset().top - $el.height();
  //         var top = (diff > 0) ? 0 : diff;
  //         $el.css('top', top);
  //       } else {
  //         $el.removeClass('fixed');
  //       }
  //     });
  //   });
  // }
};

Template.stats.helpers({
  'fakePosts': function() {
    return Posts.find({ fake: true });
  },
  'realPosts': function() {
    return Posts.find({ fake: false });
  },
  'answersTotal': function () {
    return Session.get('answersTotal');
  },
  'scoresTotal': function () {
    return Session.get('scoresTotal');
  }
});

Template.postWithAnswers.helpers({
  'answersCount': function() {
    return Session.get('post' + this._id + '.count').total;
  },
  'answersTrueCount': function() {
    return Session.get('post' + this._id + '.count').totalFake;
  },
  'answersTruePercentage': function() {
    var count = Session.get('post' + this._id + '.count');
    return Math.floor(100 * (count.totalFake / count.total));
  },
  'answersFalseCount': function() {
    var count = Session.get('post' + this._id + '.count');
    return count.total - count.totalFake;
  },
  'answersFalsePercentage': function() {
    var count = Session.get('post' + this._id + '.count');
    return Math.ceil(100 * (
      (count.total - count.totalFake) / count.total
    ));
  },
  'postClass': function() {
    return this.fake ? 'panel-danger' : 'panel-success';
  }
});
