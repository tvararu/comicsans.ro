Template.postShow.helpers({
  post: function() {
    return Session.get('raffle')[Session.get('answerCount')];
  }
});

Template.postShow.events({
  'click .vote': function(e) {
    e.preventDefault();

    var answeredFake = $(e.target).hasClass('fake').toString();

    console.log($(e.target));

    $('.score').velocity('callout.tada');
    $('.headline')
      .velocity('transition.whirlOut')
      .velocity('transition.whirlIn');

    var answerCount = Session.get('answerCount');
    Session.set('answerCount', answerCount + 1);

    // var answer = {
    //   postId: this._id,
    //   fake: answeredFake
    // };
    //
    // Meteor.call('answer', answer);
    //
    // if ((this.fake && answeredFake) || (!this.fake && !answeredFake)) {
    //   // if the player got it right
    //   var answerCount = Session.get('answerCount');
    //   Session.set('answerCount', answerCount + 1);
    // } else {
    //   Router.go('gameover');
    // }
  }
});

Template.postShow.rendered = function () {
  $('.animoot').velocity('transition.slideUpIn', { stagger: 250 });
};
