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
    
    before: function() {
      Session.set('answerCount', 0);
      this.subscribe('posts');
      this.subscribe('answers');
    }
  });
});