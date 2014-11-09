import DS from "ember-data";

export default DS.Model.extend({
  insurancePrice: DS.attr('number'),
  package: DS.attr('array'),
  board: DS.attr('array'),
  boots: DS.attr('array'),
});