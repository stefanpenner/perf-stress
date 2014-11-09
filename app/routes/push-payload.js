import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({
  model: function() {
    var store = this.store;
    return new Ember.RSVP.Promise(function(resolve) {
      var lastProfile = {previous: Date.now()};
      var profiles = [];
        
      function trickleData(data, done) {
        var keys = Ember.keys(data);
        if (keys.length === 0) {
          done();
        } else {
          var key = keys[0];
          var item = data[key];
          delete data[key];
          var now = Date.now();
          var profile = {
            name: key,
            numItems: item.length,
            previous: now
          };
          lastProfile.timeTaken = now - lastProfile.previous;
          lastProfile = profile;
          profiles.push(profile);
          var obj = {};
          obj[key] = item;
          store.pushPayload(obj);
          Ember.run.next(function() {
            trickleData(data, done);
          });
        }
      }

      function pushData(syncData) {
        
        trickleData(syncData, function() {
          profiles.forEach(function(profile) {
            if (!profile.timeTaken) {
              profile.timeTaken = Date.now() - profile.previous;
            }
            console.log('Added', profile.numItems, profile.name, 'in', profile.timeTaken, 'ms (', (profile.timeTaken/profile.numItems).toFixed(3), 'ms) avg');
          });
          resolve(profiles);
          store.find('sync', 1).then(resolve);
        });
      }
      ajax({
        url: '/data/ski-equipment-data.json'
      }).then(function(data) {
        pushData(data);
      });
    });
  }
});
