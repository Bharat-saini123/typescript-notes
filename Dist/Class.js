"use strict";
class Persons {
    firstName;
    lastName;
    email;
    constructor(a, b, c) {
        this.firstName = a;
        this.lastName = b;
        this.email = c;
    }
}
const person1 = new Persons("bharat", "saini", "sainibharat277@gmail.com");
console.log(person1.email);
