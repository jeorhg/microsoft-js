//template literals

let str1 = "JavaScript";
let str2 = "fun";

console.log(`I am writting code in ${str1}`);
console.log(`Formatting in ${str1} is ${str2}!`)

let bool1 = true;
console.log(`1 + 1 is ${1 + 1}`);
console.log(`The opposite of true is ${!bool1}`)

//template literals


//arrays//

const people = ["Paty", "Norma", "Deli"];
const one = new Number(1);
const str = "Hello World";
const b = true;
const person = {
    firstName: "Hector",
    lastName: "Cortes",
};

function sayHello(person) {
    console.log("Hello " + person.firstName)
}

console.log("-- type of --");
console.log(typeof people);
console.log(typeof one);
console.log(typeof str);
console.log(typeof b);
console.log(typeof person);
console.log(typeof sayHello);

console.log("-- instanceof --");
console.log(people instanceof Array);
console.log(one instanceof Number);
console.log(str instanceof String);
console.log(b instanceof Boolean);
console.log(person instanceof Object);
console.log(sayHello instanceof Function);

//Arrays//


// basic math //

let num1 = 100;

console.log("********* basic Math *********");
console.log(num1 + 25);
console.log(num1 - 100);
console.log(num1 * 100);
console.log(num1 / 1500);

console.log("********* aditional Math operations *********");
console.log(num1 % 1500); //remainder
console.log(++num1); //increment
console.log(--num1); //decrement

console.log("********* using the Math object *********");
console.log(Math.PI); //PI
console.log(Math.sqrt(num1)); //Square root