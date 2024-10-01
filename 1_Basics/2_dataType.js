"use strict"; // It will treat all the JS code as a newer version.

//alert("pop up message") // used for browser

// code readability should be high
//ecma script - give standards of javascript

let age = 20;
let state = null; //null
let mail; // undefined

/*
Primitive:-
number -> 2^53
bigint
string -> "abc"
boolean -> true/false
null -> standalone value
undefined
symbol ->  It is primarily used to create unique identifiers for object properties, ensuring that no two symbols are the same.
|->Unique and Immutable--Symbols are not auto-converted to strings


object
*/

console.log(typeof "abc")
console.log(typeof null) // it will print object
console.log(typeof undefined) //it will print undefined only

//------------------ Summary -------------------

/*
Primitive -/ reference type-
call by value
7 Types: String, Number, Boolean, null, undefined, symbol, BigInt

*/

const scoreVal = 10.3 // it is also number

const id = Symbol('123');
const id2 = Symbol('123');
console.log(id == id2); // false

/*
Reference (Non Primitive)

Array, Objects, Functions

*/

//Array
const arr = ["ab","cd","ef"]
//object
let myObj ={
    name : "abc",
    age: 18,
}

//function

const myFunction = function(){
    console.log("Hello");
}

//function Datatype -> Object or also known as Object Function