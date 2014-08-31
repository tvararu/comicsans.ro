Template.about.rendered = function () {
  $('.animoot').velocity('transition.bounceUpIn', {
    stagger: window.app.defaults.animationDuration / 3,
    duration: window.app.defaults.animationDuration
  });
};

Template.about.events({
  'click .github-link': function (e) {
    e.preventDefault();
    $('.bonus').removeClass('hidden');
  }
});
