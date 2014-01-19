Answers = new Meteor.Collection('answers');

Answers.allow({
  insert: function() { return true; },
  update: function() { return true; },
  remove: function() { return true; }
});

Meteor.methods({
  removeAllAnswers: function() {
    return Answers.remove({});
  },
  
  answer: function(answerAttributes) {
    if (!answerAttributes.postId) {
      throw new Meteor.Error(422, 'Answer does not have an attached postId.');
    }
    
    var post = Posts.findOne(answerAttributes.postId);
    
    if (!post) {
      throw new Meteor.Error(422, 'Answer postId does not match an existant post.');
    }
    
    if (answerAttributes.fake === undefined) {
      throw new Meteor.Error(422, 'Answer does not have an attached \'fake\' attribute.');
    }
    
    var answer = _.extend(_.pick(answerAttributes, 'postId', 'fake'), {
      submitted: new Date().getTime()
    });
    
    // create the answer, save the id
    answer._id = Answers.insert(answer);
    
    return answer._id;
  }
});