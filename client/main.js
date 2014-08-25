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
    template: 'home',

    onAfterAction: function () {
      GAnalytics.pageview();
    }
  });

  this.route('play', {
    path: '/play',
    template: 'play',

    onBeforeAction: function() {
      if (this.ready()) {
        Session.set('raffle', _.shuffle(Posts.find().fetch()));
        Session.set('answerCount', 0);
        this.render();
      } else {
        this.render('loading');
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

  this.route('answers', {
    path: '/answers',
    template: 'answers',
    waitOn: function () {
      return Meteor.subscribe('answers');
    }
  });
});

Router.onBeforeAction('loading');

Template.home.rendered = function () {
  FastClick.attach(document.body);
  $('.animoot').velocity('transition.slideUpIn', { stagger: 250 });
};

Template.home.events({
  'click #go': function () {
    $('.animoot').velocity('transition.bounceUpOut', {
      stagger: 250,
      'complete': function () {
        Router.go('play');
      }
    });
  }
});

if (window.location.href.indexOf('basehold=it') !== -1) {
  $('html').addClass('basehold');
}
