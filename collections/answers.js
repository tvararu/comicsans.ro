Answers = new Meteor.Collection('answers');

Answers.allow({
  insert: function() { return true; },
  update: function() { return true; },
  remove: function() { return true; }
});