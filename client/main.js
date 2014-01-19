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
      this.subscribe('posts');
      this.subscribe('answers');
    }
  });
});