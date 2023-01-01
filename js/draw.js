function drawMainMenu(context, bgMain) {

    context.drawImage(bgMain, 0, 0);

    context.font = "30px Courier";
    context.textAlign = "center";
    context.fillStyle = "#DDDDDD";
    context.fillText("Fishing Simulator 3000", 400, 50);

    context.font = "bold 20px Courier";
    context.textAlign = "left";
    context.fillStyle = "#DDDDDD";
    context.fillText("Choose an option:", 10, 200);

    context.font = "20px Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText("1. Time Attack", 10, 240);

    context.font = "20px Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText("2. Tournament (coming soon)", 10, 280);

    context.font = "20px Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText("3. Endless (coming soon)", 10, 320);

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
    context.fillText("Choose a location:", 10, 200);

    context.font = "20px Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText("1. River", 10, 240);

    context.font = "20px Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText("2. Lake(coming soon)", 10, 280);

    context.font = "20px Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText("3. Sea (coming soon)", 10, 320);

}

  function drawFishTA(context, bgRiver, t1, fishFloat, sourceFloatX, sourceFloatY, sourceFloatWidth, sourceFloatHeight, x, y, floatWidth, floatHeight, totCatch, totKg) {
    context.drawImage(bgRiver, 0, 95);

    context.drawImage(
      fishFloat,
      sourceFloatX,
      sourceFloatY,
      sourceFloatWidth,
      sourceFloatHeight,
      x,
      y,
      floatWidth,
      floatHeight
    );

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
    context.fillText("Catch!", 10, 50);

    context.font = "20px Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText("Fish: " + catchedFish.name, 10, 80);

    context.font = "20px Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText("Kgs: " + catchedFish.weight.toFixed(2), 10, 110);

    context.font = "20px Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText("Continue", 10, 240);
  }

  function drawResume(context, bgCatch, totCatch, totKg) {
    context.drawImage(bgCatch, 0, 0);

    context.font = "20px Courier";
    context.textAlign = "left";
    context.fillStyle = "#DDDDDD";
    context.fillText("Congratulations, here your results:", 10, 50);

    context.font = "20px Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText("Total catch: " + totCatch, 10, 80);

    context.font = "20px Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText("Total Kgs: " + totKg.toFixed(2), 10, 110);

    context.font = "20px Courier";
    context.fillStyle = "#DDDDDD";
    context.fillText("Main menu", 10, 240);
  }

