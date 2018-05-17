$(document).ready(function () {

//Global Variables, Arrays
//============================================================================================
  var wins = 0;
  var losses = 0;
  var counter = 0;
  var targetNum = 0;
  var crystalValues = [];
  
  //Functions
  //============================================================================================
  function gameStart() {
    //Creates random target number between 19-120, Creates random crystal values between 1-12
    targetNum = (Math.floor(Math.random() * 101) + 19);
    $("#numTarget").text(targetNum);
    
    for (var i = 0; i < 4; i++) {
      crystalValues.push(Math.floor(Math.random() * 12) + 1);
    }
    
    //Click functions that add values of each crystal to the total score
    $("#crystalOne").on("click", function () {
      counter += crystalValues[0];
      $("#numCurrent").text(counter);
      scoreCheck();
    })
    $("#crystalTwo").on("click", function () {
      counter += crystalValues[1];
      $("#numCurrent").text(counter);
      scoreCheck();
    })
    $("#crystalThree").on("click", function () {
      counter += crystalValues[2];
      $("#numCurrent").text(counter);
      scoreCheck();
    })
    $("#crystalFour").on("click", function () {
      counter += crystalValues[3];
      $("#numCurrent").text(counter);
      scoreCheck();
    })

    function scoreCheck() {
      if (counter === targetNum) {
        alert("Win!");
        wins++;
      }
      else if (counter > targetNum) {
        alert("Loss....Try Again");
        loss++;
      }
    }
    
    
    //Check to see if player wins or loses
    










    //Testing/Debugging
    console.log(targetNum);
    console.log(crystalValues);
    console.log(counter);
  }
  //Main Process
  //============================================================================================
  gameStart();
});