function main() {
  canvas.height = innerHeight * 0.9;
  canvas.width = canvas.height * 0.75;

  factorX = canvas.width / 576;
  factorY = canvas.height / 768;

  // control FPS
  timePassed = (Date.now() - t) / 1000;
  t = Date.now();
  fps = Math.round(1 / timePassed);

  // handle mouse click
  document.onmousedown = function (event) {
    rect = canvas.getBoundingClientRect();

    mposX = event.clientX - rect.left;
    mposY = event.clientY - rect.top;

    mouse = mouseEvent(mposX, mposY, game, mouse);
    moving = true;
    cast = false;
  };

  // time attack
  if (game == 0) {
    if (countT == 0) {
      t0 = Date.now();
      countT = 1;
      moving = 0;
      float.x = float.startX;
      float.y = float.startY;
      playerOne.x = playerOne.startX;
      playerOne.y = playerOne.startY;
      cast = false;
      playerOne.playerWalk = 1;
    }

    t1 = Math.round((Date.now() - t0) / 1000);

    if (t1 > 119) {
      game = 4;
      mouse = 0;
    }

    // counter 
    i++;

    // float movement
    if (floatOnWater == true) {
      if (stat == 0) {
        float.sourceFloatX = floatMovement(
          float.sourceFloatX,
          resetFloatPosition
        );
        resetFloatPosition = 1;

        if (mouse == 1) {
          i = 0;
          mouse = 0;
        }

        if (i > Math.random() * (frequency - fps) + fps) {
          if (Math.random() < 0.2) {
            stat = 1;
            i = 0;
          }
        }
      }

      // if mouse down in this stat you catch the fish
      if (stat == 1) {
        float.sourceFloatX = floatCatch(float.sourceFloatX);
        resetFloatPosition = 0;

        if (mouse == 1) {
          stat = 0;
          mouse = 0;
          showCatch = 1;
          d0 = Date.now();

          // random fish
          catchedFish = getRandomFish();

          listFish.push(catchedFish);

          totCatch++;
          totKg += catchedFish.weight;
        }

        if (i > Math.random() * ((frequency / difficulty) - (fps / 2)) + (fps / 2))  {
          if (Math.random() < 0.2) {
            stat = 0;
            i = 0;
          }
        }
      }

      if (mouse == 3) {
        game = 4;
        mouse = 0;
      }

      if (mouse == 2 && showInventory == 0) {
        showInventory = 1;
        mouse = 0;
      }
      if (mouse == 2 && showInventory == 1) {
        showInventory = 0;
        mouse = 0;
      }
    }

    // after catch
    if (showCatch == 1) {
      d1 = Date.now() - d0;
      if (d1 > 3000) {
        showCatch = 0;
      }
    }
  }

  // main menu handle events
  if (game == 2) {
    if (mouse == 1) {
      game = 3;
      mouse = 0;
    }
    if (mouse == 2) {
      game = 5;
      mouse = 0;
    }
  }

  // location menu handle events
  if (game == 3) {
    if (mouse == 1) {
      game = 0;
      mouse = 0;
    }
  }

  // resume
  if (game == 4) {
    if (mouse == 1) {
      mouse = 0;
      stat = 0;
      countT = 0;
      totKg = 0;
      totCatch = 0;
      listFish.length = 0;
      game = 2;
      cast = false;
      floatOnWater = false;
      moving = true;
      playerOne.i = 0;
      playerOne.c = 0;
    }
  }

  // main menu handle events
  if (game == 5) {
    if (mouse == 1) {
      game = 2;
      mouse = 0;
    }
    if (mouse == 2) {
      difficulty = 200;
    }
    if (mouse == 3) {
      difficulty = 400;
    }
    if (mouse == 4) {
      difficulty = 600;
    }
  }

  mouse = 0;
}