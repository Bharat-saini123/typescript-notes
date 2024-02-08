"use strict";
// type Person = {
//     firstName: string,
//     lastName: string,
//     age: number
// }
const Obj = {
    firstName: 'bharat',
    lastName: 'saini',
};
const getName = () => {
    return Obj.firstName;
};
const data = getName();
const getEmail = () => {
    return Obj.lastName;
};
const data1 = getEmail();
// console.log(data1);
const getAllData = (key) => {
    return Obj[key];
};
const data3 = getAllData("firstName");
console.log(data3);
