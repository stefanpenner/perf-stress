import DS from "ember-data";
import Ember from "ember";

export default DS.Model.extend({
  name: DS.attr('string'),
  prefix: DS.attr('string'),
  hasPackage: DS.attr('boolean'),
  items: Ember.computed('data', function(){
    var type = this;
    return this.store.filter('equipment_item', function(item) {
      return item.get('data.type') == type.get('id');
    });
  })
});
