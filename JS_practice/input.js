// const product =[
//     {
//         name : 'Potato',
//         price : 10
//     },
//     {
//         name : 'Tomato',
//         price : 15
//     },
//     {
//         name : 'Robato',
//         price : 10
//     }
// ];

// let html = '';

// product.forEach( (e) =>
//     console.log(e)
//     html += `
//         <div>
//             Name : ${e.name}
//             Price : ${e.price}
//         </div>
//     `
// )

// document.querySelector('.showValue').innerHTML =html;


const arrName = [];

function input_field(){

    const arrList = [1, 2, 3, 4, 5, 6, 7,8, 9,10];

    let newArray =[];
    for(let i=0; i<arrList.length; i++){
        //console.log(arrList[i]);
        let newElement= arrList[i] * 2 ;
        //console.log(newElement)
        newArray.push(newElement);
    }

    console.log(newArray)

    
    // num => num * 2
    

}










