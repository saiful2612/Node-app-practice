
//const value = document.querySelector('.box').innerHTML;
//console.log(value);


const arr_name = [{
        name : 'Riyaz',
        age : 34
    },
    {
        name : 'Shafique',
        age : 30
    },
    {
        name : 'Dalim',
        age : 34
    },
    {
        name : 'Anar',
        age : 30
    },
    {
        name : 'Petlu',
        age : 34
    },
    {
        name : 'Chikon',
        age : 30
    }
]

//const arr_name = [1, 2, 3, 4, 5];

let sum = '';
arr_name.forEach( (element) =>{
    sum += `
    <div class="style_name">
        <p>Name : ${element.name}</p>
        <p> Age : ${element.age}</p>
    </div>
    `
    
})
//console.log(sum);

//document.querySelector('.box').innerHTML = sum;

document.querySelector('.js-click').addEventListener('click', ()=>{
    console.log('Clicked');
})

