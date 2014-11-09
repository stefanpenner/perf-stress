import DS from "ember-data";

export default DS.Model.extend({
  name: DS.attr('string'),
  isInEuros: DS.attr('boolean'),
  isCreditCard: DS.attr('boolean')
});