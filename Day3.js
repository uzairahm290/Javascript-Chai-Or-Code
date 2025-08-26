console.log("Welcome to day 3");

function myname(number1 , number2){ //  => these are parmeters 
    let sum = number1 + number2
    console.log(`Sum of Numbers is ${sum}` );
    return sum
}

myname(1, 1) // these arguments 

function loginUser(user){
    if(user === undefined ){  // !user => same meaning 
        console.log("Please enter username")
        return
    }
    return `${user} just logged in`
}
loginUser() // => it will return undefinded 

function calculate(...num1){ // rest operator => if variables are introduced before it then those values goes in var 
    return num1
}

console.log(calculate(200, 300, 400)); // it returns an array

var c = 300 

if(true){
    let a = 10 
    const b = 20 
    var c = 30 
}

// console.log(a);  // it will return error
// console.log(b);  // it will also return error 
// console.log(c);  // it will print the answer => 30 thah the main issue in var

// * Global Scope in Browser is different form the node environment

// In nested funtions child can access parent variables

// ##########  interesting  ##############
console.log(addOne(5));

function addOne(n){
    return n + 1
}
 // the above will run even if funct is called before definition 

// console.log(addTwo(5));

const addTwo = function(n){
    return n + 1
}
// the above will not run if it is called before definition

// =>  (this) refers to the current context

// Global Object in browser is Windows object

function chai() {
   //  console.log(this); it return node objects
   let username = "Uzair"
   console.log(this.username); // it will return undefined so it works only with objects
   
}

const chai1 = () => {
   // => console.log(this) // here it retunrs empty parenthesis  
}

const addTwo1 = (num1 , num2) => (num1+num2)  // now there is no need to use return and curly braces

addTwo1(5,6)