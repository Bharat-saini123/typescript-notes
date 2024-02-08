interface Persons {
    firstName: string,
    lastName: string,
    readonly age: number
}

type userDetailFunctionType = (city: string) => string

interface EmployeeData extends Persons {
    email: string,
    emp_id: string,
    userDetailFunction: userDetailFunctionType
}

const user: EmployeeData = {
    firstName: "bharat",
    lastName: 'saini',
    age: 23,
    email: 'sainibharat277@gmail.com',
    emp_id: "123",
    userDetailFunction: (city) => {
        return `my name is ${user.firstName} my city is ${city}`
    }

}

user.firstName = "lokesh";


console.log(user.userDetailFunction("narnaul"));

