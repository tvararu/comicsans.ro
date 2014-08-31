Answers = new Meteor.Collection('answers');

Meteor.methods({
  answer: function(answerAttributes) {
    if (!answerAttributes.postId) {
      throw new Meteor.Error(422, 'Answer does not have an attached postId.');
    }

    var post = Posts.findOne(answerAttributes.postId);

    if (!post) {
      throw new Meteor.Error(422, 'Answer postId does not match an existent post.');
    }

    if (answerAttributes.fake === undefined) {
      throw new Meteor.Error(422, 'Answer does not have an attached \'fake\' attribute.');
    }

    var answer = _.extend(_.pick(answerAttributes, 'postId', 'fake'), {
      submitted: new Date().getTime()
    });

    // Create the answer, save the id
    answer._id = Answers.insert(answer);

    return answer._id;
  }
});
