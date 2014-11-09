import DS from "ember-data";

export default DS.Model.extend({
  qrId: DS.attr('number'),
  model: DS.attr('string'),
  year: DS.attr('string'),
  size: DS.attr('string'),
  soleLength: DS.attr('number'),
  type: DS.belongsTo('equipment_type'),
  typeId: DS.attr('number'), // Duplicate of type - used so we don't have to query a relationship when putting the items into buckets by type for a much faster startup.
  package: DS.belongsTo('package_level'),
  currentRentals: DS.hasMany('rented_item')
});