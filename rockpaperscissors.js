/**
 rock beats scissors
 scissors beats paper
 paper beats rock

 player chooses.
 computer chooses.
 decide winner.
 show results.

 get players choice
 generate randomly computer's choice
 compare choices
 decide winner
 display result
 repeat
 *  */

 function getComputerChoice(){

   const choices = Math.floor(Math.random()*3);

   if (choices===0)return "rock";
   if(choices===1)return "paper";
  return "scissors";
 }

 //console.log(getComputerChoice());

 function getHumanChoice(){
    let input= prompt("Pick a move!(rock,paper or scissors)");
    return input;
 }
 //console.log(getHumanChoice());
  function playRound(humanChoice,computerChoice){

      if(humanChoice === computerChoice){
        return "tie";
      }
      if (
        (humanChoice==='rock' && computerChoice==='scissors') ||
        (humanChoice==='paper' && computerChoice==='rock') ||
        (humanChoice==='scissors' && computerChoice=='paper')
      ){
       return "player";
      }
    return "computer";
  }

 //console.log(playRound(humanSelect,computerSelect));

 function playGame(){
  let humanScore=0;
  let computerScore=0;

  for (let round = 1; round <=5; round++) {
    const humanChoice=getHumanChoice();
    const computerChoice=getComputerChoice();

    const result = playRound(humanChoice,computerChoice);

    if (result==="player") humanScore++;
    else if (result==="computer") computerScore++;
    console.log(`Round ${round}`);
    console.log(`You: ${humanChoice} | computer: ${computerChoice}`);
    console.log(`Score: You - ${humanScore},computer - ${computerScore}`);
    console.log("--------------------");
    
  }
  if (humanScore>computerScore){
    console.log("Tounament result: You win!");
  }else if (computerScore>humanScore){
    console.log("Tounament result: Computer Win!");
  }else{
    console.log("Tournament result: It's a Tie!");
    
  }

 }

 playGame()



 

