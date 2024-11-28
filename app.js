// const School = require('./emitter');

// console.log(School);

// const school = new School();

// school.on('bellring',({period, text})=>{
//     //console.log(`We need to run because ${period} ${text}`);
// })

// school.startPeriod();


const fs = require('fs');

fs.writeFileSync('myFile.txt', 'Hello Programers. How are  you?');

// Sync way

// const data = fs.readFileSync('myFile.txt');
// console.log(data.toString());

// Async way

fs.readFile('myFile.txt', (err, data)=>{
    console.log(data.toString());
})

console.log('This is Riyaz');