import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    questionFormHide() {
      this.set('addNewQuestion', false);
    },
    saveQuestion () {
      var params = {
        author: this.get('author'),
        question: this.get('question'),
        notes: this.get('notes'),
        created: moment().format('MMMM Do YYYY, h:mm:ss a')
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
