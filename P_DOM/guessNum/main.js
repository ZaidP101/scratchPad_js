
let Answer = parseInt(Math.random()*100 +1)


const submit = document.querySelector('#subt')
const userInput = document.querySelector('.guessField')
const remaining = document.querySelector('.remaining')
const previousGuesses = document.querySelector('.guess')
const lowORhi = document.querySelector('.lowORhigh')
const startOver = document.querySelector('.resultsStat')

const p = document.createElement('p')




let previousNum = [];
let numGuess = 1

let play = true



if(play){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const submitted = parseInt((userInput).value);
        console.log(submitted)
        validateGuess(submitted)
    })}


function validateGuess(guess){
    if(isNaN(guess)){
        displayMessage("enter a valid number")
    }else if(guess >100 || guess<1){
        displayMessage("Enter number between 1-100")
    }
    previousNum.push(guess)
    if(numGuess === 11){
        display(guess)
        displayMessage(`The random number was ${Answer}`)
        end();
    }else{
        display(guess)
        checkGuess(guess)
    }
}

function checkGuess(guess){
    if(guess === Answer){
        displayMessage("your damm right")
        end();
    }else if(guess > Answer){
        displayMessage(`Your guess is too high, think a smaller number`)
    }else if(guess < Answer){
        displayMessage(`Your guess is too low, think a bigger number`)
    }
}

function display(guess){
    userInput.value = ''
    previousGuesses.innerHTML += `${guess} | `
    numGuess++
    remaining.innerHTML = `${11-numGuess}`

}

function displayMessage(message){
    lowORhi.innerHTML = `<h2>${message}</h2>`;
}

function end(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button')
    p.innerHTML = `<h2 id='newGame'>Start a new Game</h2>`;
    startOver.appendChild(p);
    play = false;
    newStart();
}

function newStart(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(){
        Answer = parseInt(Math.random()*100 +1)
        previousNum = [];
        numGuess = 1;
        previousGuesses.innerHTML = '';
        remaining.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        play = true;
    })
}