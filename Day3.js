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
 
