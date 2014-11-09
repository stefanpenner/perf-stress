import DS from "ember-data";
import Ember from "ember";

var ArrayTransform = DS.Transform.extend({
  deserialize: function(serialized) {

    if (Ember.isArray(serialized)) {
      return serialized;
    } else if (Ember.isString(serialized)) {
      return serialized.split(',');
    } else {
      return [];
    }
  },

  serialize: function(deserialized) {
    return deserialized.join(',');
  }
});

export default ArrayTransform;