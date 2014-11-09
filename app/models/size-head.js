import DS from "ember-data";

export default DS.Model.extend({
  cms: DS.attr('number'),
  inches: DS.attr('number')
});