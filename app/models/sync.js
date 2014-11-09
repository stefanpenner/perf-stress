import DS from "ember-data";

export default DS.Model.extend({
  lastUpdated: DS.attr('date'),
  lastReset: DS.attr('date'),
  euroExchangeRate: DS.attr('number')
});