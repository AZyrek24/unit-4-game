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

    //Resets Counters, Variables, and Displays
    counter = 0;
    $("#numCurrent").text(counter);
    crystalValues = [];

    for (var i = 0; i < 4; i++) {
      crystalValues.push(Math.floor(Math.random() * 12) + 1);
    }

  }


  //Main Process
  //============================================================================================
  gameStart();

  //Click functions that add values of each crystal to the total score
  $("#crystalOne").on("click", function () {
    counter += crystalValues[0];
    $("#numCurrent").text(counter);
    console.log(counter);
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

  //Checks to see if user wins or loses
  function scoreCheck() {
    if (counter === targetNum) {
      alert("Win!");
      wins++;
      $("#win").text(wins);
      gameStart();
    }
    else if (counter > targetNum) {
      alert("Loss....Try Again");
      losses++;
      $("#loss").text(losses);
      gameStart();
    }
  }
});
