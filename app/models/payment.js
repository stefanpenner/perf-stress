import DS from "ember-data";

export default DS.Model.extend({
  source: DS.belongsTo('payment_source'),
  booking: DS.belongsTo('booking'),
  dateReceived: DS.attr('date'),
  amount: DS.attr('number'),
  payerName: DS.attr('string'),
  comment: DS.attr('string'),
  notes: DS.attr('string'),
  signature: DS.attr('string')
});