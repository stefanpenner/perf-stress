import Ember from 'ember';
import { generateUsers } from '../utils/generator';

export default Ember.Route.extend({
  init: function() {
    this._super();

    var users = generateUsers(0, 1000);

    console.profile('storePush');
    this.store.pushPayload('user', users);
    console.profileEnd('storePush');
  },
  model: function() {
    Ember.run.schedule('afterRender', function() {
      console.profileEnd('render');
      console.profileEnd('all');
    });

    console.profile('store#all');
    var users = this.users = this.store.all('user');
    console.profileEnd('store#all');

    console.profile('render');

    return users;
  },

  actions: {
    churn: function() {
      console.profile('dirty');
      this.users.forEach(function(user) {
        Ember.propertyDidChange(user, 'data');
      });
      console.profileEnd('dirty');
      console.profile('churn');
      Ember.run.schedule('afterRender', function() {
        console.profileEnd('churn');
      });
    }
  }
});
