"use strict" // treat all JS code as newer version

console.log("Hello, World!")
console.log("Testing for the Last Time")
console.log("Welcome to Day 1 :) ")

const myAccountId = 12345 // Constant cannot be Changed
let myEmail = "Hello@gmail.com" // Mostly let are used 
var accPass = "World!" // It is not used now because of issue in block and functional scope
console.log(accPass)
console.table([myAccountId, myEmail, accPass, accPass])

// => alert("Hello") // It only works in browser not there 

/*
 - >  https://tc39.es/  
 - >  https://developer.mozilla.org/en-US/docs/Web/JavaScript
These are document resources
*/ 

/* 
  "Data Types"
  number
  bigint
  string
  boolean
  null => standalone value => Type -> Object
  undefined => value assign nhi hoi ha => Type -> undefined
  symbol => unique
*/

console.log(typeof(accPass))

let score = "69abc"
let inNumber = Number(score)
console.log(typeof inNumber)
console.log(inNumber) // It returns  NaN -> Not a Number :) if score = null -> 0

// "69" => 69
// "69a" => NaN
// true , False => 1 , 0 

let value = 6
let negValue = -value
console.log(negValue)

console.log("1" + 2)
console.log(3 + "2")
console.log("1" + 2 + 5)
// Primitive Data Conversion 
// +true , +"" => 1 

// Two Different Data types cannot be comapred

// console.log(null > 0) => false
// console.log(null == 0) => false
// console.log(null >= 0) => true

// console.log("2" === 2) => Strict Check 

const fruits = ["MAngo" , "Banana"]
let obj = {
    name : "Uzair",
    age : 20,
}

// Stack => Primitive -> copy , Heap => Non-Primitive -> Reference

console.log(`My Account id is ${myAccountId} `); // backticks are used to print variables with strings

/* String Fucntions
=> Indexof
=> CharAt
=> Trim -> Remove Extra Spaces
=> Slice
=> Replace("-" , "%20")
=> Includes
=> Split -> converts strings into arrays 
*/

// let str = "Hello World";

// // ----- Properties -----
// console.log("length:", str.length); // returns number of characters (11)

// // ----- Character Access -----
// console.log("charAt(1):", str.charAt(1));        // 'e' → character at index 1
// console.log("charCodeAt(1):", str.charCodeAt(1)); // 101 → Unicode (UTF-16) value
// console.log("codePointAt(1):", str.codePointAt(1)); // 101 → full Unicode code point
// console.log("at(-1):", str.at(-1));              // 'd' → supports negative indexes

// // ----- Search Methods -----
// console.log("indexOf('o'):", str.indexOf("o"));      // 4 → first index of 'o'
// console.log("lastIndexOf('o'):", str.lastIndexOf("o")); // 7 → last index of 'o'
// console.log("includes('World'):", str.includes("World")); // true → substring exists
// console.log("startsWith('Hello'):", str.startsWith("Hello")); // true
// console.log("endsWith('World'):", str.endsWith("World"));     // true
// console.log("search(/World/):", str.search(/World/)); // 6 → regex match index
// console.log("match(/o/g):", str.match(/o/g)); // [ 'o', 'o' ] → regex matches

// // ----- Substring Extraction -----
// console.log("slice(0,5):", str.slice(0, 5));       // 'Hello' → allows negatives
// console.log("substring(0,5):", str.substring(0, 5)); // 'Hello' → no negatives allowed
// console.log("substr(0,5):", str.substr(0, 5));     // 'Hello' → (deprecated)

// // ----- Modification -----
// console.log("toUpperCase():", str.toUpperCase());  // 'HELLO WORLD'
// console.log("toLowerCase():", str.toLowerCase());  // 'hello world'
// console.log("toLocaleUpperCase():", "i".toLocaleUpperCase("tr")); // 'İ' (Turkish locale)
// console.log("toLocaleLowerCase():", "İ".toLocaleLowerCase("tr")); // 'i' (Turkish locale)
// console.log("trim():", "   hello   ".trim());       // 'hello' → removes spaces both ends
// console.log("trimStart():", "   hello".trimStart()); // 'hello'
// console.log("trimEnd():", "hello   ".trimEnd());     // 'hello'
// console.log("padStart(3,'0'):", "5".padStart(3, "0")); // '005' → add padding at start
// console.log("padEnd(3,'0'):", "5".padEnd(3, "0"));     // '500' → add padding at end
// console.log("repeat(3):", "Hi".repeat(3));           // 'HiHiHi'
// console.log("replace('World','JS'):", str.replace("World", "JS")); // 'Hello JS'
// console.log("replaceAll('o','0'):", str.replaceAll("o", "0"));     // 'Hell0 W0rld'

// // ----- Splitting -----
// console.log("split(','):", "a,b,c".split(",")); // [ 'a', 'b', 'c' ]

// // ----- Conversion -----
// let sObj = new String("Hello"); // String object (not primitive)
// console.log("toString():", sObj.toString());     // 'Hello' → converts to primitive
// console.log("valueOf():", sObj.valueOf());       // 'Hello' → primitive value
// console.log("toLocaleString():", sObj.toLocaleString()); // 'Hello'

// // ----- Static Methods -----
// console.log("String.fromCharCode(72,101,108,108,111):", String.fromCharCode(72,101,108,108,111)); // 'Hello'
// console.log("String.fromCodePoint(128522):", String.fromCodePoint(128522)); // '😊'
// console.log("String.raw`Hello\\nWorld`:", String.raw`Hello\nWorld`); // 'Hello\nWorld' (no new line, raw output)

