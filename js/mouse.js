function mouseEvent(mposX, mposY, game, mouse) {

// click on main menu
if (game == 2) {
    if (mposY < 270 && mposY > 230) {
      mouse = 1;
    }
    if (mposY < 470 && mposY > 430) {
      mouse = 2;
    }
  }

  // click on location menu
  if (game == 3) {
    if (mposY < 270 && mposY > 230) {
      mouse = 1;
    }
  }

  // click on time attack
  if (game == 0) {
    mouse = 1;
  }

  // click on catch
  if (game == 1) {
    if (mposY < 260 && mposY > 220) {
      mouse = 1;
    }
  }

  // click on resume
  if (game == 4) {
    if (mposY < 260 && mposY > 220) {
      mouse = 1;
    }
  }

  // click on options
  if (game == 5) {
    if (mposY < 420 && mposY > 380) {
      mouse = 1;
    }
    if (mposY < 320 && mposY > 280 && mposX < 250 && mposX > 200) {
      mouse = 2;
    }
    if (mposY < 320 && mposY > 280 && mposX < 350 && mposX > 300) {
      mouse = 3;
    }
    if (mposY < 320 && mposY > 280 && mposX < 450 && mposX > 400) {
      mouse = 4;
    }
  }
  return mouse;
}