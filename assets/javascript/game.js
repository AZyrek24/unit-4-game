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

    $("#crystalOne").on("click", function () {
      counter += crystalValues[0];
      console.log(counter);
    })
    $("#crystalTwo").on("click", function () {
      counter += crystalValues[1];
      console.log(counter);
    })
    $("#crystalThree").on("click", function () {
      counter += crystalValues[2];
      console.log(counter);
    })
    $("#crystalFour").on("click", function () {
      counter += crystalValues[3];
      console.log(counter);
    })
    








    //Testing/Debugging
    console.log(targetNum);
    console.log(crystalValues);
    console.log(counter);
  }
  //Main Process
  //============================================================================================
  gameStart();
});