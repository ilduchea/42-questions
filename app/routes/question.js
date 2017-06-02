import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      question: this.store.findRecord('question', params.question_id)
    });
  },
  actions: {
    updateQuestion(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('index');
    },
    deleteQuestion(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        var answer_deletions = question.get('answers').map(function(answer) {
          return answer.destroyRecord();
        });
        Ember.RSVP.all(answer_deletions).then(function() {
          return question.destroyRecord();
        });
        this.transitionTo('index');
      }
    },
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      transition.refresh();
    },
    updateAnswer(answer, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          answer.set(key,params[key]);
        }
      });
      answer.save();
      transition.refresh();
    },
    destroyAnswer(answer) {
      answer.destroyRecord();
      transition.refresh();
    }
  }
});
