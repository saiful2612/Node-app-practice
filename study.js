
// OBJECT declaration
// key: property pairs format

const { clear } = require("console");

const player={
    fname: "Lionel",
    lname: "Messi",
    age: 37,
    country: "Argentina"
}


// Access OBJECT property

// console.log(player.fname);        // Method-1 

// console.log(player["lname"]);     // Method-2


// Looping in OBJECT

for(let x in player){
    // console.log(x);             // Here, 'x' gives us OBJECT key 
    // console.log(player[x]);        // Here, we get OBJECT properties
}


const age = [12, 15, 23, 7];

for(let x in age){
    // console.log(x);             // Here, 'x' gives us OBJECT key 
}
    
console.log(age.forEach)


