import DS from "ember-data";
import Ember from "ember";

export default DS.Model.extend({
  name: DS.attr('string'),
  packageType: DS.attr('string'),
  discountedPrice: DS.attr('number'),
  discountPercentage: DS.attr('number'),
  level: DS.belongsTo('package_level'),
  bookedExtras: DS.hasMany('booked_extra'),
  includeBoard: DS.attr('boolean'),
  includeBoots: DS.attr('boolean'),
  includeInsurance: DS.attr('boolean'),
  includeSuperInsurance: DS.attr('boolean'),
  isAdult: DS.attr('boolean'),
  height: DS.belongsTo('size-height'),
  weight: DS.belongsTo('size-weight'),
  shoeSize: DS.belongsTo('size-shoe'),
  headSize: DS.belongsTo('size-head'),
  ability: DS.belongsTo('ability'),
  terrain: DS.belongsTo('terrain'),
  booking: DS.belongsTo('booking'),
  requiredTypes: DS.hasMany('equipment_type'),
  rentedItems: DS.hasMany('rented_item'),
  rentedItemsSorting: ['equipmentType.id'],
  sortedRentedItems: Ember.computed.sort('rentedItems', 'rentedItemsSorting'),
  rentedPackage: DS.belongsTo('rented_package'),
  isRemoved: DS.attr('boolean'),
  isCompletePackage: Ember.computed.and('includeBoard', 'includeBoots')
});
