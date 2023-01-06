function drawMainMenu() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.drawImage(bgMain, 0, 0);

  context.font = "2em Courier";
  context.textAlign = "center";
  context.fillStyle = "#DDDDDD";
  context.fillText("Fishing Simulator 3000", 300, 50);

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

  context.font = "2em Courier";
  context.textAlign = "center";
  context.fillStyle = "#DDDDDD";
  context.fillText("Fishing Simulator 3000", 300, 50);

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

  context.drawImage(bgRiver, 0, 95);

  float.draw();

  context.drawImage(rod, playerOneRod.x, playerOneRod.y);

  playerOne.draw();

  context.font = "1em Courier";
  context.textAlign = "center";
  context.fillStyle = "#DDDDDD";
  context.fillText("Timer", 300, 35);

  context.font = "1em Courier";
  context.textAlign = "center";
  context.fillStyle = "#DDDDDD";
  context.fillText(120 - t1, 300, 65);

  context.font = "1em Courier";
  context.fillStyle = "#DDDDDD";
  context.fillText("Total catch", 200, 35);

  context.font = "1em Courier";
  context.fillStyle = "#DDDDDD";
  context.fillText(totCatch, 200, 65);

  context.font = "1em Courier";
  context.fillStyle = "#DDDDDD";
  context.fillText("Total Weight", 400, 35);

  context.font = "1em Courier";
  context.fillStyle = "#DDDDDD";
  context.fillText(totKg.toFixed(2), 400, 65);

  context.font = "0.75em Courier";
  context.fillStyle = "#DDDDDD";
  context.fillText("Fish History", 50, 50);

  context.font = "0.75em Courier";
  context.fillStyle = "#DDDDDD";
  context.fillText("Main Menu", 550, 50);

  context.beginPath();
  context.strokeStyle = "#666666";
  context.lineWidth = 5;
  context.moveTo(0, 93);
  context.lineTo(600, 93);
  context.stroke();
  context.closePath();

  if (showInventory == 1) {
    context.fillStyle = "rgba(0, 0, 0, 0.7)";
    context.fillRect(0, 95, 150, 705);

    for (var a = 0; a < listFish.length; a++) {
      context.font = "0.75em Courier";
      context.textAlign = "left";
      context.fillStyle = "#DDDDDD";
      context.fillText(listFish[a].name, 20, (120 + a * 15));

      context.fillText(
        listFish[a].weight.toFixed(2) + " Kgs",
        70,
        (120 + a * 15)
      );
    }
  }

  if (showCatch == 1) {
    context.fillStyle = "rgba(0, 0, 0, 0.7)";
    context.fillRect(300, 600, 300, 100);

    context.font = "Bold 1em Courier";
    context.textAlign = "left";
    context.fillStyle = "#DDDDDD";
    context.fillText("Catch!", 320, 630);

    context.font = "0.75em Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText("Fish: " + catchedFish.name, 320, 670);

    context.font = "0.75em Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText(
      "Weight: " + catchedFish.weight.toFixed(2) + " Kgs",
      420,
      670
    );
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

  context.font = "1em Courier";
  context.fillStyle = "#DDDDDD";
  context.fillText("Main menu", 20, 240);
}

function drawOptions() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.drawImage(bgOptions, 0, 0);

  context.font = "2em Courier";
  context.textAlign = "center";
  context.fillStyle = "#DDDDDD";
  context.fillText("Fishing Simulator 3000", 300, 50);

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
  context.fillText("Normal", 300, 300);

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
