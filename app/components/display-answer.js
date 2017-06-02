import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteAnswer(answer) {
      if (confirm('Are you sure you want to delete this answer?')) {
        this.sendAction('destroyAnswer', answer);
      }
    },
    updateAnswer(answer, params) {
      this.sendAction('updateAnswer', answer, params);
    }
  }
});
