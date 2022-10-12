"use strict";
// const button = document.querySelector('button')!
// button.addEventListener('click', () =>{
//     console.log('clicked')
// })
// ARROW FUNCTIONS
// const add = (a:number, b:number=4) => a + b
// const printOutput:(a:number | string) => void = output =>(console.log(output)) 
// printOutput(add(5))
//ARRAYS AND OBJECT
// const hobbies = ['sports', 'cooking' ]
// const activeHobbies = ['Hiking', 'Hiking']
// console.log(activeHobbies.push(...hobbies))
// const person = {
//     Firstname: 'max',
//     age: 30
// }
// const copiedPerson = {...person}
// console.log(copiedPerson)
// const add= (...numbers:number[]) =>{
//    return numbers.reduce((curResult, curValue) =>{
//         return curResult + curValue
//     }, 0)
// }
// const addNumbers = add(5,10,2,3.7)
// console.log(addNumbers)
// const [hobby1, hobby2, ...remainingHobbies] = hobbies
// console.log(hobbies, hobby1, hobby2)
// const {Firstname, age} = person 
// CONSTRUCTORS
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //  name: string;
        //  id : string
        this.employees = [];
        this.name = name;
        this.id = id;
    }
    //METHOD
    describe() {
        console.log(`${this.id} ${this.name}`);
    }
    addEmployees(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department('d1', 'accounting');
accounting.addEmployees('max');
accounting.addEmployees('manu');
accounting.printEmployeeInfo();
accounting.describe();
// const accountingCopy = {employees:"max", name:"Science", describe:accounting.describe  }
// accountingCopy.describe()
