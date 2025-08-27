console.log("Welcome to Day 5!");

// Global Execution Context
// Funtion Execution Context 
// Eval Execution Context 

/* 
1 => Global Execution 
2 => Memory Phase => val1 -> undefined , val2 => undefined 
3 => Execution Phase  => val1 -> 10 , val2 -> 20
*/

const month = 2
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("Not a Month");
        
        break;
}

if (month < 12) {
    console.log("It is a valid month");
    
} else {
    console.log("Not a Month ");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 70 ? console.log("less than 70") : console.log("more than 70")