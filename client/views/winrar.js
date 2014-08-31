Template.winrar.rendered = function () {
  $('.animoot').velocity('transition.bounceUpIn', {
    stagger: window.app.defaults.animationDuration / 3,
    duration: window.app.defaults.animationDuration
  });
};

Template.winrar.events({
  'click .try-again': function () {
    $('.animoot')
      .velocity('transition.bounceLeftOut', {
        stagger: window.app.defaults.animationDuration / 3,
        duration: window.app.defaults.animationDuration,
        'complete': function () {
          Router.go('play');
        }
      });
  }
});
