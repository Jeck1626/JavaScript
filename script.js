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

console.log(array);
console.log(array[0]);

const people = [];
people[0] = 'Dennis';
people[1] = 'Daniel';
people[2] = 'Moises';
people[3] = 'Brandon';
people[5] = 'Gerardo';

//object
const customers = {
    firstName: 'Diana',
    ageCustomer: 25,
    car: {
        model: 'Skyline',
        brand: "Nissan"
    },
    saludo: function (){
        alert('hola');
    }
}

console.log(customers.car.model);
console.log(customers['firstName']);

let name1 = 'Jason';
console.log(customers[name1]);

customers.country = 'Honduras'; //add propierties to the object
console.log (customers);

console.log(`hi mi name is ${customers.firstName}`) //To add text strings with variables using 'back ticks'

//functions
function printHello(){
    console.log("hola");
}
customers.saludo();

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

/*switch cases structure
=============================*/
switch(customers.country){
    case 'Honduras':
        console.log('To be from Honduras');
}

/*ternario
=============================*/
const ticket = 'vip';
const accessCode = ticket === 'vip' ? 'VIP-123-456' : 'REGULAR-456-789'; //if (=) variable = condition then (?) '..../code' else (:) '...../code' 
console.log (accessCode);