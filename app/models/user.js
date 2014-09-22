import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  first:       attr('string'),
  last:        attr('string'),
  age:         attr('number'),
  born:        attr('date'),
  isInDebt:    attr('boolean'),
  description: attr('string')
});
