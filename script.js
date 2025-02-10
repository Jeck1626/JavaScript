console.log('Hola desde consola');

//variables
var age = 27; //global 
console.log (age);

let name = 'Jason '; //local
console.log (name);

const isv = 15; //const
console.log (isv);

let email, gender, lastName;
console.log (gender); 

lastName = 'Maradiaga';
completeName = name + lastName; 
console.log (completeName);

//arrays 
const array = ['text', 123, 151];

//object
const customers = {
    firstName: 'Diana',
    ageCustomer: 25,
    car: {
        model: 'Skyline',
        brand: "Nissan"
    }
}

console.log(customers.car.model);

//functions
function printHello(){
    console.log("hola");
}

printHello();

//null
//When you want to initialize but not assign a value to it
const variable = null;

//undefined
//Indicates that a value is undefined (used by Js)
const variable2 = undefined;

/*Arithmetic operators
=============================*/
//module
const variableModule = 17 % 3;
console.log(variableModule);