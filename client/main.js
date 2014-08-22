Meteor.subscribe('posts', function() {
  Session.set('postCount', Posts.find().count());
  Session.set('raffle', _.shuffle(Posts.find().fetch()));
});

Meteor.subscribe('answers');

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
      Session.set('raffle', _.shuffle(Posts.find().fetch()));
      Session.set('answerCount', 0);
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
});
