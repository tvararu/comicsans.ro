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
  $('.animoot').velocity('transition.slideUpIn', { stagger: 250 });
};

Template.home.events({
  'click #go': function () {
    $.Velocity($('.animoot'), 'transition.slideUpOut', { stagger: 100 })
      .then(function () {
        Router.go('play');
      });
  }
});

if (window.location.href.indexOf('basehold=it') !== -1) {
  $('html').addClass('basehold');
}
