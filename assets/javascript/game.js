//Global Variables, Objects, Arrays
//============================================================================================
var wins = 0;
var loss = 0;
var counter = 0;
var targetNum = 0;
var increment = 0;
var crystalValue = 0;

//Functions
//============================================================================================
$(document).ready(function() {

  function gameStart() {
    targetNum = (Math.floor(Math.random() * 12) + 1);
    console.log(targetNum);

  }
  
  
  //Main Process
  //============================================================================================
  gameStart();
});