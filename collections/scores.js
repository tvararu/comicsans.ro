Scores = new Meteor.Collection('scores');

Meteor.methods({
  submitScore: function(value) {
    if (!value) {
      throw new Meteor.Error(422, 'No value submitted.');
    }

    var maxScore = Posts.find().count();

    if (value > maxScore) {
      throw new Meteor.Error(422, 'The score is too damn high.');
    }

    var score = {
      value: value,
      submitted: new Date().getTime()
    };

    // Create the score, save the id
    score._id = Scores.insert(score);

    return score._id;
  }
});
