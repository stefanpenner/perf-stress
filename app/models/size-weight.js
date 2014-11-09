import DS from "ember-data";

export default DS.Model.extend({
  kgs: DS.attr('number'),
  lbs: DS.attr('number')
});