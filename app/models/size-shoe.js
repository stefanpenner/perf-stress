import Ember from "ember";
import DS from "ember-data";

export default DS.Model.extend({
  size: DS.attr('string'),
  label: Ember.computed.alias('size'),
  mondo: DS.attr('number')
});
