/*global chance*/

function generateUsers(from, to) {
  var result = {
    users: []
  };

  for (var i = from; i < to; i++) {
    var firstName = chance.first();
    var lastName  = chance.last();
    var age       = chance.age();
    var sentence  = chance.sentence({words: 10});
    var birthday  = chance.date({string:true});
    var isInDebt  = chance.bool();

    result.users.push({
      id:          i,
      first:       firstName,
      last:        lastName,
      age:         age,
      born:        birthday,
      isInDebt:    isInDebt,
      description: sentence
    });
  }

  return result;
}

export { generateUsers };
