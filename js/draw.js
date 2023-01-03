function drawMainMenu(context, bgMain) {

    context.clearRect(0, 0, canvas.width, canvas.height);

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

    context.clearRect(0, 0, canvas.width, canvas.height);

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
    totKg,
    catchedFish,
    showCatch,
    showInventory,
    listFish) {

    context.clearRect(0, 0, canvas.width, canvas.height);

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
    
    context.drawImage(rod, playerOneRod.x, playerOneRod.y);
    
    context.drawImage(
      player, 
      playerOne.sourcePlayerX,
      playerOne.sourcePlayerY,
      playerOne.sourcePlayerWidth,
      playerOne.sourcePlayerHeight,
      playerOne.x,
      playerOne.y,
      playerOne.playerWidth,
      playerOne.playerHeight,
      );

    context.font = "20px Courier";
    context.textAlign = "center";
    context.fillStyle = "#DDDDDD";
    context.fillText("Timer", 400, 35);

    context.font = "20px Courier";
    context.textAlign = "center";
    context.fillStyle = "#DDDDDD";
    context.fillText((120 - t1), 400, 65);

    context.font = "20px Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText("Total catch", 200, 35);

    context.font = "20px Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText(totCatch, 200, 65);

    context.font = "20px Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText("Total Weight", 600, 35);

    context.font = "20px Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText(totKg.toFixed(2), 600, 65);

    context.font = "10px Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText("Fish History", 50, 50);

    context.font = "10px Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText("Main Menu", 750, 50);

    context.beginPath();
    context.strokeStyle = "#666666";
    context.lineWidth = 5;
    context.moveTo(0, 93);
    context.lineTo(800, 93);
    context.stroke();
    context.closePath();

  if (showInventory == 1) {
    context.fillStyle = "rgba(0, 0, 0, 0.7)";
    context.fillRect(0, 95, 150, 505);

    for (var a = 0; a < listFish.length; a++){
    context.font = "10px Courier";
    context.textAlign = "left";
    context.fillStyle = "#DDDDDD";
    context.fillText(listFish[a].name, 20, (150 +(a*15)));

    context.fillText(listFish[a].weight.toFixed(2) + " Kg", 70, (150 +(a*15)));
    }

  }

  if (showCatch == 1) {

    context.fillStyle = "rgba(0, 0, 0, 0.7)";
    context.fillRect(400, 400, 400, 100);

    context.font = "Bold 20px Courier";
    context.textAlign = "left";
    context.fillStyle = "#DDDDDD";
    context.fillText("Catch!", 420, 430);

    context.font = "20px Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText("Fish: " + catchedFish.name, 420, 470);

    context.font = "20px Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText("Kgs: " + catchedFish.weight.toFixed(2), 600, 470);
  }
}

  function drawResume(context, bgCatch, totCatch, totKg) {

    context.clearRect(0, 0, canvas.width, canvas.height);

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

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.drawImage(bgOptions, 0, 0);

    context.font = "30px Courier";
    context.textAlign = "center";
    context.fillStyle = "#DDDDDD";
    context.fillText("Fishing Simulator 3000", 400, 50);

    context.font = "20px Courier";
    context.textAlign = "left";
    context.fillStyle = "#DDDDDD";
    context.fillText("Float: ", 20, 200);

    context.drawImage(fishFloat, 0, 0, 32, 32, 200, 184, 32, 32);

    context.font = "20px Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText("Player: ", 20, 250);

    context.drawImage(player, 0, 0, 32, 32, 200, 229, 32, 32);

    context.font = "20px Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText("Difficulty: ", 20, 300);

    if (difficulty == 100 ) {
      context.font = "bold 20px Courier"
    }
    else {
    context.font = "20px Courier";
    }
    context.fillStyle = "#DDDDDD";
    context.fillText("Easy", 200, 300);

    if (difficulty == 200 ) {
      context.font = "bold 20px Courier"
    }
    else {
    context.font = "20px Courier";
    }
    context.fillStyle = "#DDDDDD";
    context.fillText("Normal", 300, 300);

    if (difficulty == 300 ) {
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

