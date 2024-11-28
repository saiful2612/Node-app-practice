const score={
    wins : 0,
    losses : 0,
    ties : 0
}

function reset(score, updates){
    Object.assign(score, updates)
    
}



function playGame(playerMove){

    // Comparing Computer Move with our move

    const computerMove = pickComputerMove();

    let result = '';

    if(playerMove === 'scissors'){

        if (computerMove === 'rock'){
        result = 'you lose';
        } else if(computerMove === 'paper'){
            result = 'you win';
        }
        else if(computerMove === 'scissors'){
            result = 'tie';
        }

    } else if(playerMove === 'rock'){
        
        if (computerMove === 'rock'){
        result = 'tie';
        } else if(computerMove === 'paper'){
            result = 'you lose';
        }
        else if(computerMove === 'scissors'){
            result = 'you win';
        }

    }else if( playerMove === 'paper'){

        if (computerMove === 'rock'){
        result = 'you win';
        } else if(computerMove === 'paper'){
            result = 'tie';
        }
        else if(computerMove === 'scissors'){
            result = 'you lose';
        }

    }

    if(result === 'you win'){
        score.wins += 1;
    }else if(result === 'you lose'){
        score.losses += 1;
    }else if(result === 'tie'){
        score.ties += 1;
    }

    // Display the result

    alert(`You picked ${playerMove}. Computer picked ${computerMove}. Result : ${result}
Wins : ${score.wins}  Losses : ${score.losses} Ties : ${score.ties}`);
    
}

function pickComputerMove(){
    const randomNumber = Math.random();

    let computerMove = '';

    if(randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'rock';
    } else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'paper';
    } else if(randomNumber >= 2/3 && randomNumber < 1){
        computerMove = 'scissors';
    }

    return computerMove;
}




// const arrayElement = [5, 7, 9, 11];

const arrayElement = ['Apple', 'Banana', 'Carrot', 'Dim'];

// console.log(arrayElement.length);   // get array length 
// console.log(arrayElement[0]);       // access array element 


//let sum = 0 ;  
// let newDoubledElement = [];
let newString = '';

for (let i = 0; i < arrayElement.length; i++){
    // console.log(i);                       // gives index of the element
    // console.log(arrayElement[i]);         // access the value one by one 
    const result = arrayElement[i];                 // contain each value for every rotation 
    const result1 = `<p>${arrayElement[i]}</p>`;    // contain each value for every rotation
    // sum = sum + result;                   // Sum of the value
    // newDoubledElement.push(result * 2);   // Multiple of the value
    // newString += result1;

}


// document.querySelector('.array-list').innerHTML= newString;


// console.log(sum);

// console.log(newDoubledElement);

console.log(newString)


const [a, b, c, d]  = ["x", 3, 5, 7];

// console.log(c);

console.log('Hello world 2');





