function mouseEvent(mposX, mposY, game, mouse) {
  // click on main menu
  if (game == 2) {
    if (mposY < 270 * factorY && mposY > 230 * factorY) {
      mouse = 1;
    }
    if (mposY < 470 * factorY && mposY > 430 * factorY) {
      mouse = 2;
    }
  }

  // click on location menu
  if (game == 3) {
    if (mposY < 270 * factorY && mposY > 230 * factorY) {
      mouse = 1;
    }
  }

  // click on time attack
  if (game == 0) {
    if (mposY < 600 * factorY && mposY > 95 * factorY) {
      mouse = 1;
    }
    if (mposY <= 95 * factorY && mposY > 0 && mposX < 100 * factorX) {
      mouse = 2;
    }
    if (mposY <= 95 * factorY && mposY > 0 && mposX > 500 * factorX) {
      mouse = 3;
    }
  }

  // click on catch
  if (game == 1) {
    if (mposY < 260 * factorY && mposY > 220 * factorY) {
      mouse = 1;
    }
  }

  // click on resume
  if (game == 4) {
    if (mposY < 260 * factorY && mposY > 220 * factorY) {
      mouse = 1;
    }
  }

  // click on options
  if (game == 5) {
    if (mposY < 420 * factorY && mposY > 380 * factorY) {
      mouse = 1;
    }
    if (mposY < 320 * factorY&& mposY > 280 * factorY && mposX < 250 * factorX && mposX > 200 * factorX) {
      mouse = 2;
    }
    if (mposY < 320 * factorY && mposY > 280 * factorY && mposX < 350 * factorX && mposX > 300 * factorX) {
      mouse = 3;
    }
    if (mposY < 320 * factorY && mposY > 280 * factorY && mposX < 450 * factorX && mposX > 400 * factorX) {
      mouse = 4;
    }
  }
  return mouse;
}
