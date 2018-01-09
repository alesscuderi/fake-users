# fake-users-alesscuderi
This is a simple package that manipulates the mock of an array of users.


## Installation

    npm i fake-users-alesscuderi


## Usage

To use Fake Users

```js
var fakeusers = require('fake-users-alesscuderi');

console.log(this.getAll());

prints the array

console.log(this.getUserById(3));

returns the user with the given id

console.log(this.addUser({
  name: 'John',
  surname: 'Doe'
}));

Adds an user to the array


console.log(this.deleteUser(1));

Deletes the user with the given id

console.log(this.editUser(2, {
  name: 'John',
  surname: 'Doe'
}));

replaces the information of the user at the given position with new ones

console.log(this.resetUsers());

reset any modification made to the array.
```
