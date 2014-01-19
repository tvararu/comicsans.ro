Template.answers.helpers({
  answers: function() {
    return Answers.find();
  }
});

Template.answers.events({
  'click .delete-everything': function(e) {
    e.preventDefault();
    
    Meteor.call('removeAllAnswers');
  }
});