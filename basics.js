console.log("hello world");

// var a = 5;
// var b = 6;
// var c = "ajay";
// console.log(a + b + 8)
// console.log(typeof a, typeof b, typeof c)

// {
//     let a = 1;
//     console.log(a);
// }
// variables :->Modern JavaScript( let ,const) Older JavaScript(var , Automatically) 
let a = 4;
const b = 5;
var c = 1;
e = a + b + c;
// data type :->

// String	A text of characters enclosed in quotes
let A = "ajay";
// Number	A number representing a mathematical value
let X = 5;
// Bigint	A number representing a large integer
// Boolean	A data type representing true or false
let B = true;
// Object	A collection of key-value pairs of data
const person = { firstName: "ajay", lastName: "pal" };
// Undefined	A primitive variable with no assigned value
let k;
// Null	A primitive value representing object absence
let z = null;
// Symbol	A unique and primitive identifier
const s = Symbol;

// Operators :-> Arithmetic Operators, Assignment Operators, Comparison Operators, Logical Operators, Bitwise Operators

// Arithmetic Operators
let num1 = 5;
let num2 = 3;
let sum = num1 + num2;
let diff = num1 - num2;
let prod = num1 * num2;
let div = num1 / num2;
let mod = num1 % num2;
let increment = ++num1;
let decrement = --num2;
let exponent = num1 ** num2;
console.log(sum, diff, prod, div, mod, increment, decrement, exponent);

// Assignment Operators(=,+=,-=,*=,/=,%=,**=)
let x = 10;
x += 5;
let y = 20;
y -= 5;
let p = 30;
p *= 2;
let w = 40;
w /= 2;
let q = 50;
q %= 3;
let r = 2;
r **= 3;
console.log(x, y, p, w, q);

// Comparison Operators(==,===,!=,!==,>,<,>=,<=)
let m = 5;
let n = '5';
console.log(m == n);    // true
console.log(m === n);   // false
console.log(m != n);    // false
console.log(m !== n);   // true
console.log(m > n);     // false
console.log(m < n);     //false
console.log(m >= n);    // true
console.log(m <= n);    // false

// Logical Operators(&&,||,!)
let A1 = true;
let B1 = false;
console.log(A1 && B1);   // false
console.log(A1 || B1);   // true
console.log(!A1);      // false
console.log(!B1);      // true      

// ternary operator
let age1 = 20;
let canVote = (age1 >= 18) ? "yes" : "no";
console.log(canVote);


// conditionals statment(if,else if,else)/ switch
let age = 18;
if (age > 18) {
    console.log("you can vote");
} else if (age == 18) {
    console.log("you are eligible for vote");
} else {
    console.log("you cannot vote");
}

// switch
let day = "Mon";
switch (day) {
  case "Mon": console.log("Work"); break;
  case "Sat": console.log("Fun"); break;
  default: console.log("Rest");
}


// loops(for,while,do while)

// for loop
for (let i = 0; i < 5; i++) {
    console.log("for loop", i);
}
let object = { name: "ajay", age: 24, city: "delhi" };
// for in loop(object)
for (let key in object) {
    const element = object[key];
    console.log(key, object[key]);
}
// for of loop(array)
for (let value of Object.values(object)) {
    console.log("for of loop", value);
}

// while loop
let j = 0;
while (j < 5) {
    console.log("while loop", j);
    j++;
}
// do while loop
let k1 = 0;
do {
    console.log("do while loop", k1);
    k1++;
} while (k1 < 5);

// foreach loop
let arr = [1, 2, 3, 4, 5];
arr.forEach(function (element) {
    console.log("foreach loop", element);
}
);

// functions
function add(a, b) {
    return a + b;
}
console.log("function", add(5, 3));



// arrow function   
const multiply = (a, b) => a * b;
console.log("arrow function", multiply(5, 3));


// arrays
let fruits = ["apple", "banana", "cherry"];
console.log("array", fruits);

// array methods
fruits.push("date");
console.log("after push", fruits);

fruits.pop();
console.log("after pop", fruits);

fruits.shift();
console.log("after shift", fruits);

fruits.unshift("apricot");
console.log("after unshift", fruits);

console.log("index of banana", fruits.indexOf("banana"));
console.log("is array", Array.isArray(fruits));
console.log("length", fruits.length);
console.log("to string", fruits.toString());
console.log("join", fruits.join(" - "));
console.log("slice", fruits.slice(1, 3));
console.log("splice", fruits.splice(1, 1, "blueberry"));
console.log("after splice", fruits);
console.log("sort", fruits.sort());
console.log("reverse", fruits.reverse());
console.log("map", fruits.map(fruit => fruit.toUpperCase()));
console.log("filter", fruits.filter(fruit => fruit.startsWith("b")));
console.log("reduce", fruits.reduce((acc, fruit) => acc + " " + fruit, ""));
console.log("find", fruits.find(fruit => fruit.startsWith("c")));
console.log("find index", fruits.findIndex(fruit => fruit.startsWith("c")));
console.log("every", fruits.every(fruit => fruit.length > 3));
console.log("some", fruits.some(fruit => fruit.length > 5));
console.log("includes", fruits.includes("banana"));
console.log("for of");
for (let fruit of fruits) {
    console.log(fruit);
}
console.log("for in");
for (let index in fruits) {
    console.log(fruits[index]);
}

// strings
let str = "Hello, World!";
console.log("string", str);

// string methods
console.log("length", str.length);
console.log("to upper case", str.toUpperCase());
console.log("to lower case", str.toLowerCase());
console.log("index of", str.indexOf("World"));
console.log("last index of", str.lastIndexOf("o"));
console.log("char at", str.charAt(7));
console.log("char code at", str.charCodeAt(7));
console.log("concat", str.concat(" How are you?"));
console.log("includes", str.includes("World"));
console.log("starts with", str.startsWith("Hello"));
console.log("ends with", str.endsWith("!"));
console.log("slice", str.slice(0, 5));
console.log("substring", str.substring(0, 5));
console.log("substr", str.substr(7, 5));
console.log("replace", str.replace("World", "JavaScript"));
console.log("split", str.split(", "));
console.log("trim", "   Hello   ".trim());
console.log("repeat", "Hello ".repeat(3));
console.log("match", str.match(/o/g));
console.log("search", str.search("World"));

// document object model(DOM)
// events
// es6 features
// json
// async javascript/programming
// error handling
// modules
// local storage/session storage
// basic of node js
