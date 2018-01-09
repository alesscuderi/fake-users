var users = [
  {
    id: 1,
    name: 'Tano',
    surname: 'Malavita'
  },

  {
    id: 2,
    name: 'Pippo',
    surname: 'Spacciatore'
  },

  {
    id: 3,
    name: 'Iano',
    surname: 'Baddilenti'
  },

  {
    id: 4,
    name: 'Melo',
    surname: 'Alliccaricchi'
  }
];
var clone = function(obj) {
  return JSON.parse(JSON.stringify(obj))//questo serve a "ingannare" javascript clonando l'oggetto users.
  //questo perché JavaScript, quando creiamo una variabile uguale ad un'altra, tratta la seconda come una sorta di alias.
}
var resetUsers = clone(users);

//exports rende una funzione esportabile e utilizzabile da utenti terzi.
exports.getAll = function(){
  return users;
}

//funzione che cerca un id dato per imput e ritorna tutto l'elemento dell'array
exports.getUserById = function(id) {
  for (var i = 0; i < users.length; i++) {
    if (id === users[i].id){
      return users[i];
    }
  }
    return null;
}

exports.addUser = function(newUser) {
  var lastUserId = users[users.length-1].id;
  users.push({
    id: lastUserId+1,
    name: newUser.name,
    surname: newUser.surname
  });
}

exports.deleteUser = function(id) {
  for (var i = 0; i < users.length; i++) {
    if (id == users[i].id){
      return users.splice(i,1); //così ne elimina solo uno, non tutti quelli A PARTIRE da i
    }
    return null;
  }
}

exports.editUser = function(id, newUser) {
  for (var i in users) {
    var user = users[i];
    if (id === user.id) {
      user.name = newUser.name;
      user.surname = newUser.surname;
    }
  }
  return null;
}

exports.resetUsers = function() {
  users = clone(resetUsers)
  return users;
}

var newestUser = {
  name: 'Pippo',
  surname: 'Pappo'
}

var newUser = {
  name: 'Pino',
  surname: 'Mitraglia'
}

console.log(this.getAll());
console.log(this.getUserById(3));
console.log(this.addUser(newestUser));
console.log(this.getAll());
console.log(this.deleteUser(1));
console.log(this.getAll());
console.log(this.editUser(2, newUser));
console.log(this.getAll());
console.log(this.resetUsers());
console.log(this.getAll());
