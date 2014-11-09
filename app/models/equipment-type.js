import DS from "ember-data";

export default DS.Model.extend({
  name: DS.attr('string'),
  prefix: DS.attr('string'),
  hasPackage: DS.attr('boolean'),
  items: DS.hasMany('equipment_item')
});