import DS from "ember-data";
import Ember from "ember";

export default DS.Model.extend({
  status: DS.attr('number'),
  name: DS.attr('string'),
  mobile: DS.attr('string'),
  email: DS.attr('string'),
  notes: DS.attr('string'),
  startDate: DS.attr('date'),
  numDays: DS.attr('number'),
  isDelivered: DS.attr('boolean'),
  deliveryDate: DS.attr('date'),
  deliveryTime: DS.attr('string'),
  accommodationName: DS.attr('string'),
  accommodationAddress: DS.attr('string'),
  deliveryAddress: DS.attr('string'),
  price: DS.attr('number'),
  outstandingBalance: DS.attr('number'),
  packagesSorting: ['isAdult:desc', 'name'],
  packages: DS.hasMany('package'),
  activePackages: Ember.computed.filterBy('packages', 'isRemoved', false),
  sortedPackages: Ember.computed.sort('packages', 'packagesSorting'),
  sortedActivePackages: Ember.computed.sort('activePackages', 'packagesSorting'),
  payments: DS.hasMany('payment'),
  collectionDate: DS.attr('date'),
  collectionTime: DS.attr('string'),
  collectionLocation: DS.attr('string'),
  collectionVillage: DS.belongsTo('village'),
  collectionNotes: DS.attr('string'),
  returnNotes: DS.attr('string')
});