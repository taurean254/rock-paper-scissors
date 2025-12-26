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
   return "Scissor";
 }

 console.log(getComputerChoice());

