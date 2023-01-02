function init() {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  var rect = canvas.getBoundingClientRect();

  // float class
  class floatObject {
    constructor() {
      this.startX = 500;
      this.startY = 200;
      this.x = this.startX;
      this.y = this.startY;
      this.startFloatWidth = 16;
      this.startFloatHeight = 16;
      this.floatWidth = this.startFloatWidth;
      this.floatHeight = this.startFloatHeight;
      this.startSourceFloatHeight = 16;
      this.startSourceFloatWidth = 16;
      this.sourceFloatWidth = this.startSourceFloatWidth;
      this.sourceFloatHeight = this.startSourceFloatHeight;
      this.sourceFloatX = 0;
      this.sourceFloatY = 0;
    }
  }

  var float = new floatObject();

  // utilities
  var waves = 0;
  var i = 0;
  var force = 25;
  var mouse = 0;

  // difficulty 500 = hard, 370 = normal, 300 = easy
  var difficulty = 370; 

  // mouse position
  var mposX = 0;
  var mposY = 0;

  // score
  var totCatch = 0;
  var totKg = 0;
  var catchedFish;

  // status 0 = wait, 1 = fish, 2 = return, 3 = catch
  var status = 0;
  var frequency = 1000;

  // game 0 = time attack, 1 = catch, 2 = main menu, 3 = location menu, 4 = resume, 5 = options
  var game = 2;

  // var for fps
  var t = Date.now();
  var timePassed = 0;
  var fps = 0;
  var speed = 3;

  // timer
  var t0 = 0;
  var t1 = 0;
  var countT = 0;

  // images src
  let fishFloat = new Image();
  fishFloat.src = "img/float_01.png";
  let boat = new Image();
  boat.src = "img/boat_01.png";
  let bgMain = new Image();
  bgMain.src = "img/bg_main.png";
  let bgLocation = new Image();
  bgLocation.src = "img/bg_location.png";
  let bgRiver = new Image();
  bgRiver.src = "img/bg_river.png";
  let bgCatch = new Image();
  bgCatch.src = "img/bg_catch.png";
  let bgOptions = new Image();
  bgOptions.src = "img/bg_options.png";

  function main() {
    // control FPS
    timePassed = (Date.now() - t) / 1000;
    t = Date.now();
    fps = Math.round(1 / timePassed);

    // handle events
    document.onmousedown = function (event) {
      mposX = event.clientX - rect.left;
      mposY = event.clientY - rect.top;

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
        if (mposY < 241 && mposY > 219) {
          mouse = 1;
        }
      }

      // click on time attack
      if (game == 0) {
        mouse = 1;
      }

      // click on catch
      if (game == 1) {
        if (mposY < 241 && mposY > 219) {
          mouse = 1;
        }
      }

      // click on resume
      if (game == 4) {
        if (mposY < 241 && mposY > 220) {
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
    };

    // status event
    i += speed * timePassed * 1.1;

    // time attack
    if (game == 0) {
      if (countT == 0) {
        t0 = Date.now();
        countT = 1;
      }

      t1 = Math.round((Date.now() - t0) / 1000);

      if (t1 > 119) {
        game = 4;
        mouse = 0;
      }

      // float movement
      float.x = float.startX + (float.startFloatWidth - float.floatWidth) / 2;
      float.y =
        float.startY + (float.startFloatHeight - float.sourceFloatHeight) / 2;
      float.sourceFloatX =
        (float.startSourceFloatWidth - float.sourceFloatWidth) / 2;
      float.sourceFloatY =
        (float.startSourceFloatHeight - float.sourceFloatHeight) / 2;

      if (status == 0) {
        waves = 3 * Math.sin(i) * Math.random();
        float.sourceFloatWidth += speed * waves * timePassed;
        float.sourceFloatHeight += speed * waves * timePassed;
        float.floatWidth += speed * waves * timePassed;
        float.floatHeight += speed * waves * timePassed;

        if (float.sourceFloatWidth > float.startSourceFloatWidth) {
          float.sourceFloatWidth = float.startSourceFloatWidth;
          float.sourceFloatHeight = float.startSourceFloatHeight;
          float.floatWidth = float.startFloatWidth;
          float.floatHeight = float.startFloatHeight;
        }

        if (mouse == 1) {
          i = 0;
          mouse = 0;
        }

        if (i > frequency * Math.random()) {
          if (Math.random() < 0.2) {
            status = 1;
            i = 0;
          }
        }
      }

      // if mouse down in this status you catch the fish
      if (status == 1) {
        float.sourceFloatWidth -= speed * timePassed * force;
        float.sourceFloatHeight -= speed * timePassed * force;
        float.floatWidth -= speed * timePassed * force;
        float.floatHeight -= speed * timePassed * force;

        if (float.floatHeight <= 1) {
          float.floatHeight = 1;
          float.floatWidth = 1;
          float.sourceFloatHeight = 1;
          float.sourceFloatWidth = 1;
          
        }

        if (mouse == 1) {
          status = 3;
          mouse = 0;

          // random fish
          catchedFish = getRandomFish();

          totCatch++;
          totKg += catchedFish.weight;
        }

        if (i > (frequency / difficulty) * Math.random()) {
          if (Math.random() < 0.2) {
            status = 2;
            i = 0;
          }
        }
      }

      if (status == 2) {
        if (float.floatHeight < float.startFloatHeight) {
          float.floatHeight += speed * timePassed * force;
          float.floatWidth += speed * timePassed * force;
          float.sourceFloatHeight += speed * timePassed * force;
          float.sourceFloatWidth += speed * timePassed * force;
          force -= timePassed;
        }

        if (float.floatHeight >= float.startFloatHeight) {
          status = 0;
          force = 25;
        }
      }
    }

    // after catch
    if (status == 3) {
      float.x = float.startX;
      float.y = float.startY;
      float.sourceFloatHeight = float.startSourceFloatWidth;
      float.sourceFloatWidth = float.startSourceFloatWidth;
      float.floatHeight = float.startFloatHeight;
      float.floatWidth = float.startFloatWidth;
      float.sourceFloatX = 0;
      float.sourceFloatY = 0;
      game = 1;

      if (mouse == 1) {
        game = 0;
        status = 0;
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
        game = 2;
        mouse = 0;
        status = 0;
        countT = 0;
        totKg = 0;
        totCatch = 0;
      }
    }

    // main menu handle events
    if (game == 5) {
      if (mouse == 1) {
        game = 2;
        mouse = 0;
      }
      if (mouse == 2) {
        difficulty = 300;
      }
      if (mouse == 3) {
        difficulty = 370;
      }
      if (mouse == 4) {
        difficulty = 500;
      }
    }

    mouse = 0;

    // drawing
    context.clearRect(0, 0, canvas.width, canvas.height);

    if (game == 2) {
      drawMainMenu(context, bgMain);
    }
    if (game == 3) {
      drawSubMenuTA(context, bgLocation);
    }
    if (game == 0) {
      drawFishTA(
        context,
        bgRiver,
        t1,
        fishFloat,
        float.sourceFloatX,
        float.sourceFloatY,
        float.sourceFloatWidth,
        float.sourceFloatHeight,
        float.x,
        float.y,
        float.floatWidth,
        float.floatHeight,
        totCatch,
        totKg
      );
    }
    if (game == 1) {
      drawCatch(context, bgCatch, catchedFish);
    }
    if (game == 4) {
      drawResume(context, bgCatch, totCatch, totKg);
    }
    if (game == 5) {
      drawOptions(context, bgOptions, fishFloat, boat, difficulty);
    }

    window.requestAnimationFrame(main);
  }

  main();
}
