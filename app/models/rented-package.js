import DS from "ember-data";

export default DS.Model.extend({
  package: DS.belongsTo('package'),
  dinSetting: DS.attr('string'),
  skierCode: DS.attr('string'),
  soleLength: DS.attr('string'),
  notes: DS.attr('string'),
  dateOut: DS.attr('date'),
  isSigned: DS.attr('boolean'),
  signature: DS.attr('string')
});