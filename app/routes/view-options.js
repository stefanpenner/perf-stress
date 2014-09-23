import Ember from 'ember';
import { generateUsers } from '../utils/generator';

export default Ember.Route.extend({
  init: function() {
    this._super();

    var users = generateUsers(0, 1000);

    this.store.pushPayload('user', users);
  },
  model: function() {
    Ember.run.schedule('afterRender', function() {
      console.profileEnd('render');
    });

    var users = this.users = this.store.all('user');

    console.profile('render');

    return users;
  }
});
