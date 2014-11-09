import DS from "ember-data";

export default DS.Model.extend({
  booking: DS.belongsTo('booking'),
  package: DS.belongsTo('package'),
  amountFull: DS.attr('number'),
  amountDiscounted: DS.attr('number'),
  appliedDiscount: DS.attr('number'),
  date: DS.attr('date'),
  reason: DS.attr('string')
});