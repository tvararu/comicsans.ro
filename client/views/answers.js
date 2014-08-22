Template.answers.helpers({
  answers: function() {
    return Answers.find();
  },
  count: function () {
    return Answers.find().count();
  }
});
