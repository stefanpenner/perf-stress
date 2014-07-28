import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

console.profile('all');
var App = Ember.Application.extend({
  modulePrefix: 'perf', // TODO: loaded via config
  Resolver: Resolver
});

loadInitializers(App, 'perf');

export default App;
