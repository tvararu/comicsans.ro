Template.postShow.helpers({
  post: function() {
    return Session.get('raffle')[Session.get('answerCount')];
  }
});

Template.postShow.events({
  'click .vote': function(e) {
    e.preventDefault();

    $(e.target)
      .velocity('callout.pulse', { duration: window.app.defaults.animationDuration / 3 });

    var answeredFake = $(e.target).hasClass('fake');

    var answer = {
      postId: this._id,
      fake: answeredFake.toString()
    };

    Meteor.call('answer', answer);

    if ((this.fake && answeredFake) || (!this.fake && !answeredFake)) {
      // If the player got it right.
      $('.headline')
        .velocity('transition.whirlOut', {
          duration: window.app.defaults.animationDuration / 2,
          display: null,
          'complete': function () {
            var answerCount = Session.get('answerCount');
            Session.set('answerCount', answerCount + 1);
            if (Session.get('answerCount') === Session.get('raffle').length) {
              // ZOMG HAX this guy got everything right.
              $('.play')
                .velocity('transition.bounceRightOut', {
                  stagger: window.app.defaults.animationDuration / 3,
                  duration: window.app.defaults.animationDuration,
                  'complete': function () {
                    Router.go('winrar');
                  }
                });
            } else {
              $('.score').velocity('callout.tada');
            }
          }
        })
        .velocity('transition.whirlIn', {
          duration: window.app.defaults.animationDuration
        });
    } else {
      $('.headline')
        .velocity('transition.whirlOut', {
          display: null,
          duration: window.app.defaults.animationDuration / 2,
          'complete': function () {
            $('.play')
              .velocity('transition.bounceRightOut', {
                stagger: window.app.defaults.animationDuration / 3,
                duration: window.app.defaults.animationDuration,
                'complete': function () {
                  Router.go('gameover');
                }
              });
          }
        });
    }
  }
});

Template.postShow.rendered = function () {
  $('.animoot').velocity('transition.bounceUpIn', {
    stagger: window.app.defaults.animationDuration / 3,
    duration: window.app.defaults.animationDuration,
  });
};
