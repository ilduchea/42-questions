import Ember from 'ember';

export default Ember.Component.extend({
  showUpdateForm: false,
  actions: {
    updateQuestion(question) {
      var params = {
        question: this.get('question'),
        notes: this.get('notes'),
        author: this.get('author'),
      };
      this.set('showUpdateForm', false);
      this.sendAction('updateQuestion', question, params);
    },
    showUpdateForm() {
      this.set('showUpdateForm', true);
    }
  }
});
