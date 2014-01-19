Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('home', {
    path: '/',
    template: 'home',
    
    before: function() {
      this.subscribe('posts');
      this.subscribe('answers');
    }
  });
  
  this.route('sup', {
    path: '/sup',
    template: 'sup'
  });
});