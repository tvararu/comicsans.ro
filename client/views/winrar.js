Template.winrar.rendered = function () {
  $('.animoot').velocity('transition.bounceUpIn', { stagger: 250 });
};

Template.winrar.events({
  'click .try-again': function () {
    $('.animoot')
      .velocity('transition.bounceLeftOut', {
        stagger: 100,
        'complete': function () {
          Router.go('play');
        }
      });
  }
});
