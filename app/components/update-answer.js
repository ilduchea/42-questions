import Ember from 'ember';

export default Ember.Component.extend({
  showUpdateForm: false,
  actions: {
    updateAnswer(answer) {
      debugger
      var params = {
        author: this.get('author'),
        answer: this.get('answer1'),
      };
      this.set('showUpdateForm', false);
      this.sendAction('updateAnswer', answer, params);
    },
    showUpdateForm() {
      this.set('showUpdateForm', true);
    }
  }
});
