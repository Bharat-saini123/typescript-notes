

class Persons {
    firstName: string;
    lastName: string;
    email: string;

    constructor(a: string, b: string, c: string) {

        this.firstName = a;
        this.lastName = b;
        this.email = c;

    }


}

const person1 = new Persons("bharat", "saini", "sainibharat277@gmail.com");

console.log(person1.email);