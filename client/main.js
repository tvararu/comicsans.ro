Meteor.subscribe('posts', function() {
  Session.set('postCount', Posts.find().count());
  Session.set('raffle', _.shuffle(Posts.find().fetch()));
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
      Meteor.subscribe('postsWithAnswers');
      Meteor.subscribe('scores');
      return Meteor.subscribe('answers');
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
    return (Posts.find().count() > 0) ? '' : 'disabled';
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
