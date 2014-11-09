import DS from "ember-data";
import Ember from "ember";

export default DS.Model.extend({
  requiredType: DS.belongsTo('equipment_type'),
  chosenEquipment: DS.belongsTo('equipment_item'),
  equipment: [],
  itemNumber: DS.attr('number'),
  prefix: Ember.computed.alias('requiredType.prefix')
});