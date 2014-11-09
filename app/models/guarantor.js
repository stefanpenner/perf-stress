import DS from "ember-data";

export default DS.Model.extend({
  payerName: DS.attr('string'),
  booking: DS.belongsTo('booking'),
  packages: DS.attr('string'), // Seems easier to fake it than to have a relationship
  signature: DS.attr('string')
});