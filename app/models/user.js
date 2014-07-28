import DS from 'ember-data';

export default DS.Model.extend({
  first: DS.attr('string'),
  last: DS.attr('string'),
  age: DS.attr('number'),
  description: DS.attr('string'),
  born: DS.attr('date')
});


