// drawing
function draw() {
  context.scale (factorX, factorY);
  if (game == 2) {
    drawMainMenu();
  }
  if (game == 3) {
    drawSubMenuTA();
  }
  if (game == 0) {
    drawFishTA();
  }
  if (game == 4) {
    drawResume();
  }
  if (game == 5) {
    float.x = 200;
    float.y = 168;
    playerOne.x = 200;
    playerOne.y = 218;
    drawOptions();
  }
}

function drawMainMenu() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.drawImage(bgMain, 0, 0);

  context.font = "Bold 2em Courier";
  context.textAlign = "center";
  context.fillStyle = "#DDDDDD";
  context.fillText("Pixy Fishing", 300, 50);

  context.font = "bold 1em Courier";
  context.textAlign = "left";
  context.fillStyle = "#DDDDDD";
  context.fillText("Choose an option:", 20, 200);

  context.font = "1em Courier";
  context.fillStyle = "#DDDDDD";
  context.fillText("Time Attack", 20, 250);

  context.font = "1em Courier";
  context.fillStyle = "#DDDDDD";
  context.fillText("Tournament (coming soon)", 20, 300);

  context.font = "1em Courier";
  context.fillStyle = "#DDDDDD";
  context.fillText("Endless (coming soon)", 20, 350);

  context.font = "1em Courier";
  context.fillStyle = "#DDDDDD";
  context.fillText("Options", 20, 450);
}

function drawSubMenuTA() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.drawImage(bgLocation, 0, 0);

  context.font = " Bold 2em Courier";
  context.textAlign = "center";
  context.fillStyle = "#DDDDDD";
  context.fillText("Pixy Fishing", 300, 50);

  context.font = "bold 1em Courier";
  context.textAlign = "left";
  context.fillStyle = "#DDDDDD";
  context.fillText("Choose a location:", 20, 200);

  context.font = "1em Courier";
  context.fillStyle = "#DDDDDD";
  context.fillText("River", 20, 250);

  context.font = "1em Courier";
  context.fillStyle = "#DDDDDD";
  context.fillText("Lake(coming soon)", 20, 300);

  context.font = "1em Courier";
  context.fillStyle = "#DDDDDD";
  context.fillText("Sea (coming soon)", 20, 350);
}

function drawFishTA() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  drawMap();

  if (floatOnWater == true) {
    float.draw();
  }

  playerOne.draw();

  playerOneRod.draw();

  context.font = "1em Courier";
  context.textAlign = "center";
  context.fillStyle = "#DDDDDD";
  context.fillText("Timer", 288, 50);

  context.font = "1em Courier";
  context.textAlign = "center";
  context.fillStyle = "#DDDDDD";
  context.fillText(120 - t1, 288, 90);

  context.font = "1em Courier";
  context.fillStyle = "#DDDDDD";
  context.fillText("Total catch", 188, 50);

  context.font = "1em Courier";
  context.fillStyle = "#DDDDDD";
  context.fillText(totCatch, 188, 90);

  context.font = "1em Courier";
  context.fillStyle = "#DDDDDD";
  context.fillText("Total Weight", 388, 50);

  context.font = "1em Courier";
  context.fillStyle = "#DDDDDD";
  context.fillText(totKg.toFixed(2), 388, 90);

  context.font = "0.75em Courier";
  context.fillStyle = "#DDDDDD";
  context.fillText("Fish History", 50, 50);

  context.font = "0.75em Courier";
  context.fillStyle = "#DDDDDD";
  context.fillText("Main Menu", 526, 50);

  context.beginPath();
  context.strokeStyle = "#666666";
  context.lineWidth = 5;
  context.moveTo(0, 126);
  context.lineTo(600, 126);
  context.stroke();
  context.closePath();

  if (showInventory == 1) {
    context.fillStyle = "rgba(0, 0, 0, 0.7)";
    context.fillRect(0, 128, 150, 705);

    for (var a = 0; a < listFish.length; a++) {
      context.font = "0.75em Courier";
      context.textAlign = "left";
      context.fillStyle = "#DDDDDD";
      context.fillText(listFish[a].name, 20, (150 + a * 15));

      context.fillText(
        listFish[a].weight.toFixed(2) + " Kgs",
        70,
        (150 + a * 15)
      );
    }
  }

  if (showCatch == 1) {
    context.fillStyle = "rgba(0, 0, 0, 0.7)";
    context.fillRect(300, 500, 300, 100);

    context.font = "Bold 1em Courier";
    context.textAlign = "left";
    context.fillStyle = "#DDDDDD";
    context.fillText("Catch!", 320, 530);

    context.font = "0.75em Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText("Fish: " + catchedFish.name, 320, 570);

    context.font = "0.75em Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText("Weight: " + catchedFish.weight.toFixed(2) + " Kgs", 420,570);
  }

  if (floatOnWater == true) {

    context.fillStyle = "rgba(255, 0, 0, 0.7)";
    context.fillRect(448, 640, 128, 64);

    context.font = "Bold 1.5em Courier";
    context.textAlign = "center";
    context.fillStyle = "#DDDDDD";
    context.fillText("Walk", 512, 680);

  }
  if (floatOnWater == false) {

    context.fillStyle = "rgba(255, 0, 0, 0.7)";
    context.fillRect(448, 640, 128, 64);

    context.font = "Bold 1.5em Courier";
    context.textAlign = "center";
    if (cast == false) {
    context.fillStyle = "rgba(64, 64, 64, 0.7)";
    }
    if (cast == true) {
      context.fillStyle = "#DDDDDD";
      }
    context.fillText("Cast", 512, 680);

  }

  if (stat == 4) {
    context.fillStyle = "rgba(0, 0, 0, 0.7)";
    context.fillRect(128, 448, 320, 128);

    context.font = "Bold 1em Courier";
    context.textAlign = "center";
    context.fillStyle = "#DDDDDD";
    context.fillText("Round Over", 288, 500);

    context.font = "0.75em Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText("Go to the resume", 288, 530);
  }
}

function drawResume() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.drawImage(bgCatch, 0, 0);

  context.font = "1em Courier";
  context.textAlign = "left";
  context.fillStyle = "#DDDDDD";
  context.fillText("Congratulations, here your results:", 20, 50);

  context.font = "1em Courier";
  context.fillStyle = "#DDDDDD";
  context.fillText("Total catch: " + totCatch, 20, 80);

  context.font = "1em Courier";
  context.fillStyle = "#DDDDDD";
  context.fillText("Total Kgs: " + totKg.toFixed(2), 20, 110);

  if (listFish.length > 0) {
    context.font = "1em Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText("Fish History: ", 20, 170);

    for (var a = 0; a < listFish.length; a++) {
      context.font = "1em Courier";
      context.textAlign = "left";
      context.fillStyle = "#DDDDDD";
      context.fillText(listFish[a].name, 20, 200 + a * 30);

      context.fillText(
        listFish[a].weight.toFixed(2) + " Kgs",
        90,
        200 + a * 30
      );
    }
  }

  context.font = "1em Courier";
  context.fillStyle = "#DDDDDD";
  context.fillText("Main menu", 20, 720);
}

function drawOptions() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.drawImage(bgOptions, 0, 0);

  context.font = "Bold 2em Courier";
  context.textAlign = "center";
  context.fillStyle = "#DDDDDD";
  context.fillText("Pixy Fishing", 300, 50);

  context.font = "1em Courier";
  context.textAlign = "left";
  context.fillStyle = "#DDDDDD";
  context.fillText("Float: ", 20, 200);

  float.draw();

  context.font = "1em Courier";
  context.fillStyle = "#DDDDDD";
  context.fillText("Player: ", 20, 250);

  playerOne.draw();

  context.font = "1em Courier";
  context.fillStyle = "#DDDDDD";
  context.fillText("Difficulty: ", 20, 300);

  if (difficulty == 200) {
    context.font = "bold 1em Courier";
  } else {
    context.font = "1em Courier";
  }
  context.fillStyle = "#DDDDDD";
  context.fillText("Easy", 200, 300);

  if (difficulty == 400) {
    context.font = "bold 1em Courier";
  } else {
    context.font = "1em Courier";
  }
  context.fillStyle = "#DDDDDD";
  context.fillText("Normal", 290, 300);

  if (difficulty == 600) {
    context.font = "bold 1em Courier";
  } else {
    context.font = "1em Courier";
  }
  context.fillStyle = "#DDDDDD";
  context.fillText("Hard", 400, 300);

  context.font = "1em Courier";
  context.fillStyle = "#DDDDDD";
  context.fillText("Back to main menu", 20, 400);
}

function drawMap(){
  for (let eachCol = 0; eachCol < mapRiver.gridCols; eachCol++){
    for (let eachRow = 0; eachRow < mapRiver.gridRows; eachRow++) {
      const tile = mapRiver.getTile(eachCol, eachRow);

        context.drawImage(
          tileMapRiver,
          tile * mapRiver.tileSize,
          0,
          mapRiver.tileSize - 2,
          mapRiver.tileSize - 2,
          eachCol * mapRiver.tileSize, 
          eachRow * mapRiver.tileSize + 128,
          mapRiver.tileSize, 
          mapRiver.tileSize
        );
        if (tile > 3) {
          let collisionObjects = new collisionObject(mapRiver.tileSize*eachCol, mapRiver.tileSize*eachRow + 128);
          collisionObjects.isCollision(collisionObjects, playerOne);

        }
    }
  }
}