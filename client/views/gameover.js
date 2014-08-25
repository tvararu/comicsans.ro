Template.gameover.helpers({
  postUrl: function () {
    return Session.get('raffle')[Session.get('answerCount')].url;
  },
  postHostname: function () {
    var parser = document.createElement('a');
    parser.href = Session.get('raffle')[Session.get('answerCount')].url.replace('www.', '');
    return parser.hostname;
  }
});

Template.gameover.rendered = function () {
  $('.animoot').velocity('transition.bounceUpIn', { stagger: 250 });
};

Template.gameover.events({
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
