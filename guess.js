let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget=()=>{
  return Math.floor(Math.random() * 10)
}

const getAbsoluteDistance = (num1, num2) => {
  return Math.abs(num1 - num2)
}


const compareGuesses = (userGuess, computerGuess, secretTargetNum) => {
  let userDiff = getAbsoluteDistance(secretTargetNum, userGuess)
  let compDiff = getAbsoluteDistance(secretTargetNum,computerGuess)

  if(userDiff === compDiff){
    return true
  } else if (userDiff > compDiff){
    return true
  } else {
    return false
  }
}

const updateScore = (winner) =>{
  if (winner === 'human'){
    humanScore++
  } else {
    computerScore++
  }
}

const advanceRound=()=>{
  return currentRoundNumber++
}


