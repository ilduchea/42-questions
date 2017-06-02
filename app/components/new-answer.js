import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveAnswer(model) {
      var question = model.question;
      var params = {
        author: this.get('author'),
        answer: this.get('answer'),
        created: moment().format('MMMM Do YYYY, h:mm:ss a'),
        question: question
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
