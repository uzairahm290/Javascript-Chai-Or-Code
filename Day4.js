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


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

// for (let index = 1; index <= 10; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         continue
//     }
//    console.log(`Value of i is ${index}`);
    
// }

const arr = ["Hello" , "World"]

for (const num of arr) {
    console.log(num);
}

// Maps => there are not iterative we cannot use for-in on Map

const map =  new Map()
map.set('PK' , 'Pakistan' )
map.set('IN' , 'India' )
map.set('EN' , 'England' )

console.log(map);

for (const [key , value] of map) {
    console.log(key, ":-" , value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);  
    
// } => this will not work

// when we for-in loop with arrays it prints key values while in for-of it will print values

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )