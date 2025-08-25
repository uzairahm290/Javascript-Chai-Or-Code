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

//
