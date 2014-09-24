function generateUsers(from, to) {
  var result = {
    users: []
  };

  for (var i = from; i < to; i++) {
    result.users.push( {
      id:          i,
      first:       Math.random().toString(36).substring(7),
      last:        Math.random().toString(36).substring(7),
      age:         Math.random() * 100,
      born:        Math.random() * 1000,
      isInDebt:    Math.round(Math.random(0, 1)),
      description: Math.random().toString(36).substring(7),
    });
  }

  return result;
}

export { generateUsers };
