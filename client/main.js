AnswerCounts = new Meteor.Collection('answer.counts');
ScoreCounts = new Meteor.Collection('score.counts');

Meteor.subscribe('posts', function() {
  Session.set('postCount', Posts.find().count());
  Session.set('raffle', _.shuffle(Posts.find().fetch()));
});

Deps.autorun(function () {
  var answersTotal = 0;
  Posts.find().forEach(function (post) {
    var count = AnswerCounts.findOne(post._id) || { total: 0, totalFake: 0 };
    answersTotal += count.total;
    Session.set(
      'post' + post._id + '.count',
      { total: count.total, totalFake: count.totalFake }
    );
  });
  Session.set('answersTotal', answersTotal);
});

Deps.autorun(function () {
  var scoresTotal = 0;
  ScoreCounts.find().forEach(function (score) {
    scoresTotal += score.total;
    Session.set(
      'score' + score._id + '.count',
      score.total
    );
  });
  Session.set('scoresTotal', scoresTotal);
});

Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('home', {
    path: '/',
    template: 'home'
  });

  this.route('play', {
    path: '/play',
    template: 'play',

    onBeforeAction: function() {
      if (!Session.get('postCount')) {
        this.redirect('home');
      } else {
        if (this.ready()) {
          Session.set('raffle', _.shuffle(Posts.find().fetch()));
          Session.set('answerCount', 0);
          this.render();
        } else {
          this.render('loading');
        }
      }
    },

    data: function () {
      return Posts.find();
    }
  });

  this.route('gameover', {
    path: '/gameover',
    template: 'gameover',

    onBeforeAction: function() {
      if (!Session.get('postCount')) {
        this.redirect('home');
      }
    }
  });

  this.route('winrar', {
    path: '/winrar',
    template: 'winrar',

    onBeforeAction: function() {
      if (!Session.get('postCount')) {
        this.redirect('home');
      }
    }
  });

  this.route('stats', {
    path: '/stats',
    template: 'stats',

    waitOn: function () {
      return Meteor.subscribe('stats');
    }
  });

  this.route('about', {
    path: '/about',
    template: 'about'
  });
});

Router.onBeforeAction('loading');

Template.home.rendered = function () {
  FastClick.attach(document.body);
  $('.animoot').velocity('transition.bounceUpIn', {
    stagger: window.app.defaults.animationDuration / 3,
    duration: window.app.defaults.animationDuration
  });
};

Template.home.events({
  'click #go': function () {
    if (Posts.find().count() === 0) {
      // Posts aren't ready.
      return;
    }
    $('.animoot').velocity('transition.bounceUpOut', {
      stagger: window.app.defaults.animationDuration / 3,
      duration: window.app.defaults.animationDuration,
      'complete': function () {
        Router.go('play');
      }
    });
  }
});

Template.home.helpers({
  'postsReady': function () {
    return (Posts.find().count() > 0);
  }
});

Template.layout.events({
  'click .btn-about': function () {
    $('.animoot').velocity('transition.bounceUpOut', {
      stagger: window.app.defaults.animationDuration / 3,
      duration: window.app.defaults.animationDuration,
      'complete': function () {
        if (Router.current().path === '/about') {
          Router.go('home');
        } else {
          Router.go('about');
        }
      }
    });
  }
});

if (window.location.href.indexOf('basehold=it') !== -1) {
  $('html').addClass('basehold');
}
