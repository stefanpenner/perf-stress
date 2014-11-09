import DS from "ember-data";

export default DS.Model.extend({
  name: DS.attr('string'),
  equipmentType: DS.belongsTo('equipment_type'),
  pricePerDay: DS.attr('number')
});