"use strict";
// partial <type>
// type user1={
//     name:string,
//     email:string,
// }
// type user2={
//     name?:string,
//     email?:string,
// }
// or  both are same
// type user2=Partial<user1>
// required <Type>
// type user1={
//     name?:string,
//     email:string,
//     password:string,
//     age?:number
// }
// type user2=Required<user1>
// or
// const user2:Required<user1>={
//     name:"bharat",
//     email:'saini@gmail.com',
//     password:"123",
//     age:23
// }
// Readonly <Type>
// type user={
//    readonly id:number,
//    name?:string,
//    email:string,
//    password:string,
// }
// const UserData:user={
//     id:1,
//     name:"bharat",
//     email:'sainibharat277@gmail.com',
//     password:'123'
// };
// // UserData.id=123
// UserData.name="lokesh";
// console.log(UserData);
// type user = {
//     readonly id: number,
//     name?: string,
//     email: string,
//     password: string,
// }
// const UserData:Readonly<user>={
//     id:1,
//     name:"bharat",
//     email:'sainibharat277@gmail.com',
//     password:'123'
// };
// type user2 = Readonly<user>;
// const UserData: user2 = {
//     id: 1,
//     name: "bharat",
//     email: 'sainibharat277@gmail.com',
//     password: '123'
// }
//  Record   <Keys,types>
// type user = {
//     name: string,
//     email: string,
//     gender: string,
// }
// // or
// type user2=Record<"firstName"|"lastName"|"gender",string>;
// pick <Type>
// type user = {
//     firstName: string,
//     lastName: string,
//     age: number,
//     readonly id: number,
//     city: string,
//     state: string
// }
// type user2=Pick<user,"age"|"lastName"|"firstName">
// Omit   <Type>
// type user = {
//     firstName: string,
//     lastName: string,
//     age: number,
//     readonly id: number,
//     city: string,
//     state: string
// }
// type user2=Omit<user,"city"|"state">
//  Exclude <Type,ExcludeUnion>
// type userData=Exclude<string|number|object,number>
// or
// type myData=string|number|object
// type userData=Exclude<myData,number>
// Extract <Type Union>
// type myData=string|number|object|null
// type userData=Extract<myData,number>
// NonNullable  <Type>
// type myData=string|number|object|null|undefined
// type userData=NonNullable<myData>
// parameter <Type>
// const myFunction=(a:number,b:string):string=>{
//     return a+b
// }
// type parameterType=Parameters<typeof myFunction>
// return <Type>
// const myFunction = (a: number, b: number) => {
//     return a + b
// }
// type returnType=ReturnType<typeof myFunction>
