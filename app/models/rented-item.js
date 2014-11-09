import DS from "ember-data";

export default DS.Model.extend({
  package: DS.belongsTo('package'),
  equipmentItem: DS.belongsTo('equipment_item'),
  equipmentType: DS.belongsTo('equipment_type'),
  status: DS.belongsTo('damage_status'),
  dateOut: DS.attr('date'),
  dateBack: DS.attr('date'),
  notes: DS.attr('string')
});