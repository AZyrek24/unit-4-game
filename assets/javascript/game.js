//Global Variables, Arrays
//============================================================================================
var wins = 0;
var losses = 0;
var counter = 0;
var targetNum = 0;
var increment = 0;
var crystalValues = [];

//Functions
//============================================================================================
$(document).ready(function() {

  function gameStart() {
    //Creates random target number between 19-120
    targetNum = (Math.floor(Math.random() * 101) + 19);

    for (var i = 0; i < 4; i++) {
      crystalValues.push(Math.floor(Math.random() * 12) + 1);
      
    }

    
    
    
    
    
    //Testing/Debugging
    console.log(targetNum);
    console.log(crystalValues);
  }
  //Main Process
  //============================================================================================
  gameStart();
});