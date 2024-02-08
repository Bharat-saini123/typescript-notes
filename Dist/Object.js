"use strict";
const user = {
    firstName: "bharat",
    lastName: 'saini',
    age: 23,
    email: 'sainibharat277@gmail.com',
    emp_id: "123",
    userDetailFunction: (city) => {
        return `my name is ${user.firstName} my city is ${city}`;
    }
};
user.firstName = "lokesh";
console.log(user.userDetailFunction("narnaul"));
