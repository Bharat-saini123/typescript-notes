// type FunctionDataType=(num1:number,num2:number)=>number

// const myFunction:FunctionDataType=(a,b)=>{
// return a+b
// }

// const myFunction = <T, B>(a: T, b: B): unknown => {
//     if (typeof a === "number" && typeof b === "number") return a + b


// }

// const myFunction = <T, B, C>(a: T, b: B, c: C): unknown => {
//     if (typeof a === "number" && typeof b === "number") return a + b
//     return c


// }

// console.log(myFunction<string, number, boolean>("4", 19, false));



// type newFunctionDataType=(a:string,b:number,c?:boolean)=>void

// const newFunction:newFunctionDataType=(a,b,c=true)=>{
// return console.log(a,b,c);

// }

// console.log(newFunction("bharat",12,false))

// type spreadOperatorDataType = (...num: number[]) => void;

// const spreadOperator: spreadOperatorDataType = (...num) => {
//     num.forEach((Ele: number): void => {
//         console.log(Ele)
//     })

// }

// console.log(spreadOperator(2, 4, 5, 6, 7, 8, 9))

