
// type Person = {
//     firstName: string,
//     lastName: string,
//     age: number
// }

// const persons: Person = {
//     firstName: "bharat",
//     lastName: 'saini',
//     age: 24
// }

// const myFunction = <T>(value: T): T => {
//     return value

// }

// const data = myFunction<Person>(persons)
// console.log(data);




// const addition = <P, Q, R>(a: P, b: Q, c: R): unknown => {

//     if (typeof a === "number" && typeof b === "number" && typeof c === "number") return a + b + c

// }

// const ThreeVariable = addition<number, number, number>(3, 4, 6);
// console.log(ThreeVariable);


// type Vaishu = {
//     firstName: string,
//     lastName: string,
//     age: number,
//     gender: string,
// }
// type Bharat = {
//     email: string,
//     id: number,
//     firstName: string,
//     lastName: string,
//     age: number,
//     gender: string,
// }

// const bharat1: Bharat = {
//     email: 'sainibharat277@gmail.com',
//     id: 123,
//     firstName: "bharat",
//     lastName: "saini",
//     age: 22,
//     gender: "male"

// }

// const vaishu1: Vaishu = {
//     firstName: "bharat",
//     lastName: 'saini',
//     age: 24,
//     gender: "male"
// }



// const myFunction = <T, S extends T>(val1: T, val2: S): { val1: T, val2: S } => {
//     return { val1, val2 }
// }

// const data = myFunction<Vaishu, Bharat>(vaishu1, bharat1);
// console.log(data);





// type myObject = {
//     // firstName:string,
//     // lastName:string,
//     [key: string]: string
// };

// const Obj: myObject = {
//     firstName: 'bharat',
//     lastName: 'saini',

// }


// const getName = (): string => {
//     return Obj.firstName
// };
// const data = getName();


// const getEmail = () => {
//     return Obj.lastName
// }

// const data1 = getEmail();
// // console.log(data1);

// const getAllData = (key: "firstName" | "lastName") => {
//     return Obj[key]
// }

// const data3 = getAllData("firstName");
// console.log(data3);
