import DS from "ember-data";

export default DS.Model.extend({
  package: DS.belongsTo('package'),
  extra: DS.belongsTo('equipment_extra'),
  discountedPrice: DS.attr('number')
});