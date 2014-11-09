import DS from "ember-data";

export default DS.Model.extend({
  requiredType: DS.belongsTo('equipment_type'),
  chosenEquipment: DS.belongsTo('equipment_item'),
  equipment: [],
  itemNumber: DS.attr('number')
});