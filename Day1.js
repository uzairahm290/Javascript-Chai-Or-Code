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