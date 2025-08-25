const { use } = require("react")

console.log("Welcome to Day 2 !")

let marvelHeros = ["thor" , "spiderman"]
let dcHeros = ["superman", "flash"]
const AllHeros = marvelHeros.concat(dcHeros) // retrun a singel array 
//console.log(AllHeros)
marvelHeros.push(dcHeros) // add array as an element in other array 
//console.log(marvelHeros)

const AllHeros1 = [...marvelHeros , ...dcHeros] // works same as concat
// console.log(AllHeros1) 

 // .flat(inifinty)  => if we have array in array in array like nested arrays so this function make its one 

console.log(Array.isArray("Uzair")) // => True or false
console.log(Array.from("Uzair")) // => converts any data type to array
console.log(Array.isArray({name : "uzair"})) // It returns empty array => Interesting
let score1 = 100 
let score2 = 200
console.log(Array.of(score1 ,score2))

// Singleton  object.create
// objecty literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Uzair Ahmad",
    location: "Lahore",
    [mySym]: "myKey1", // it is used like this if you want to access sybmol otherwise it behaves as string => JsUser[mySym]
    isLoggedIn: "False",
    "Full Name": "Uzair Ahmad Makki" // it is only accessed by JsUser["Full Name"]
}

console.log(JsUser.name);
console.log(JsUser["location"]);
// Object.freeze(JsUser) => now below changes cannot be reflected 

JsUser.greeting = function(){
    console.log(`Hello, ${this.name}`);
}

console.log(JsUser.greeting())


// const user = new Object() => singleton
const user = {}
user.name = "Uzair"
user.rollNo = 594

const user1 = {1: "a" , 2: "b"}

const obj1 = {user , user1}
const obj2 = Object.assign({}, user , obj1) // we can also use spread operator (...)
console.log(obj2)

// Object.keys() extract keys as array
// Object.values() extract values as array
// Object.entries() each entry as array

const {name : newname} = user // now name can only be used instead of user.name
// now the above can be accesed by newname
