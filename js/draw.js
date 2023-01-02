function drawMainMenu(context, bgMain) {

    context.drawImage(bgMain, 0, 0);

    context.font = "30px Courier";
    context.textAlign = "center";
    context.fillStyle = "#DDDDDD";
    context.fillText("Fishing Simulator 3000", 400, 50);

    context.font = "bold 20px Courier";
    context.textAlign = "left";
    context.fillStyle = "#DDDDDD";
    context.fillText("Choose an option:", 20, 200);

    context.font = "20px Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText("Time Attack", 20, 250);

    context.font = "20px Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText("Tournament (coming soon)", 20, 300);

    context.font = "20px Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText("Endless (coming soon)", 20, 350);

    context.font = "20px Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText("Options", 20, 450);

}

function drawSubMenuTA(context, bgLocation) {


    context.drawImage(bgLocation, 0, 0);

    context.font = "30px Courier";
    context.textAlign = "center";
    context.fillStyle = "#DDDDDD";
    context.fillText("Fishing Simulator 3000", 400, 50);

    context.font = "bold 20px Courier";
    context.textAlign = "left";
    context.fillStyle = "#DDDDDD";
    context.fillText("Choose a location:", 20, 200);

    context.font = "20px Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText("River", 20, 250);

    context.font = "20px Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText("Lake(coming soon)", 20, 300);

    context.font = "20px Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText("Sea (coming soon)", 20, 350);

}

  function drawFishTA(context,
    bgRiver,
    t1,
    fishFloat,
    float,
    player,
    playerOne,
    rod,
    playerOneRod,
    totCatch,
    totKg) {
    context.drawImage(bgRiver, 0, 95);

    context.drawImage(
      fishFloat,
      float.sourceFloatX,
      float.sourceFloatY,
      float.sourceFloatWidth,
      float.sourceFloatHeight,
      float.x,
      float.y,
      float.floatWidth,
      float.floatHeight
    );

    context.drawImage(player, playerOne.x, playerOne.y);

    context.drawImage(rod, playerOneRod.x, playerOneRod.y);

    context.font = "20px Courier";
    context.textAlign = "center";
    context.fillStyle = "#DDDDDD";
    context.fillText("Timer: " + (120 - t1), 400, 50);

    context.font = "20px Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText("Total catch: " + totCatch, 200, 50);

    context.font = "20px Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText("Total Kgs: " + totKg.toFixed(2), 600, 50);

    context.beginPath();
    context.strokeStyle = "#666666";
    context.lineWidth = 5;
    context.moveTo(0, 93);
    context.lineTo(800, 93);
    context.stroke();
    context.closePath();
  }

  function drawCatch (context, bgCatch, catchedFish) {
    context.drawImage(bgCatch, 0, 0);

    context.font = "20px Courier";
    context.textAlign = "left";
    context.fillStyle = "#DDDDDD";
    context.fillText("Catch!", 20, 50);

    context.font = "20px Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText("Fish: " + catchedFish.name, 20, 80);

    context.font = "20px Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText("Kgs: " + catchedFish.weight.toFixed(2), 20, 110);

    context.font = "20px Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText("Continue", 20, 240);
  }

  function drawResume(context, bgCatch, totCatch, totKg) {
    context.drawImage(bgCatch, 0, 0);

    context.font = "20px Courier";
    context.textAlign = "left";
    context.fillStyle = "#DDDDDD";
    context.fillText("Congratulations, here your results:", 20, 50);

    context.font = "20px Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText("Total catch: " + totCatch, 20, 80);

    context.font = "20px Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText("Total Kgs: " + totKg.toFixed(2), 20, 110);

    context.font = "20px Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText("Main menu", 20, 240);
  }

  function drawOptions(context, bgOptions, fishFloat, player, difficulty) {
    context.drawImage(bgOptions, 0, 0);

    context.font = "30px Courier";
    context.textAlign = "center";
    context.fillStyle = "#DDDDDD";
    context.fillText("Fishing Simulator 3000", 400, 50);

    context.font = "20px Courier";
    context.textAlign = "left";
    context.fillStyle = "#DDDDDD";
    context.fillText("Float: ", 20, 200);

    context.drawImage(fishFloat, 200, 184);

    context.font = "20px Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText("Player: ", 20, 250);

    context.drawImage(player, 200, 229);

    context.font = "20px Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText("Difficulty: ", 20, 300);

    if (difficulty == 300 ) {
      context.font = "bold 20px Courier"
    }
    else {
    context.font = "20px Courier";
    }
    context.fillStyle = "#DDDDDD";
    context.fillText("Easy", 200, 300);

    if (difficulty == 370 ) {
      context.font = "bold 20px Courier"
    }
    else {
    context.font = "20px Courier";
    }
    context.fillStyle = "#DDDDDD";
    context.fillText("Normal", 300, 300);

    if (difficulty == 500 ) {
      context.font = "bold 20px Courier"
    }
    else {
    context.font = "20px Courier";
    }
    context.fillStyle = "#DDDDDD";
    context.fillText("Hard", 400, 300);

    context.font = "20px Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText("Back to main menu", 20, 400);
  }

