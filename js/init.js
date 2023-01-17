const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let rect = canvas.getBoundingClientRect();

// classes
class floatObject {
  constructor() {
    this.startX = 400;
    this.startY = 256;
    this.x = this.startX;
    this.y = this.startY;
    this.floatWidth = 32;
    this.floatHeight = 32;
    this.sourceFloatWidth = 32;
    this.sourceFloatHeight = 32;
    this.sourceFloatX = 64;
    this.sourceFloatY = 0;
  }

  position(){
    if (playerOne.playerDirection == 0) {
      this.x = playerOne.x;
      this.y = playerOne.y + 96;
    }

    if (playerOne.playerDirection == 1) {
      this.x = playerOne.x - 96;
      this.y = playerOne.y;
    }

    if (playerOne.playerDirection == 2) {
      this.x = playerOne.x + 96;
      this.y = playerOne.y;
    }

    if (playerOne.playerDirection == 3) {
      this.x = playerOne.x + (playerOne.playerWidth / 2);
      this.y = playerOne.y - 96;
    }
  }


  draw() {
    let image = new Image();
    image.src = "img/float_01.png";

    context.drawImage(
      image,
      this.sourceFloatX,
      this.sourceFloatY,
      this.sourceFloatWidth,
      this.sourceFloatHeight,
      this.x,
      this.y,
      this.floatWidth,
      this.floatHeight
    );
  }
}

var float = new floatObject();

class playerObject {
  constructor() {
    this.startX = 384;
    this.startY = 384;
    this.x = this.startX;
    this.y = this.startY;
    this.playerWidth = 64;
    this.playerHeight = 64;
    this.sourcePlayerWidth = 32;
    this.sourcePlayerHeight = 32;
    this.sourcePlayerX = 32;
    this.sourcePlayerY = 32;
    this.playerDirection = 1;
    this.playerWalk = 1;
    this.i = 0;
    this.c = 0;
  }

  draw() {
    let image = new Image();
    image.src = "img/player_01.png";

    context.drawImage(
      image,
      this.sourcePlayerX * this.playerWalk,
      this.sourcePlayerY * this.playerDirection,
      this.sourcePlayerWidth,
      this.sourcePlayerHeight,
      this.x,
      this.y,
      this.playerWidth,
      this.playerHeight
    );
  }

  move() {
    if (moving == true && floatOnWater == false && (mposYY < 600 * factorY) && (mposYY > 128 * factorY)) {
      if (mposXX < this.x * factorX) {
        this.playerDirection = 1;
        this.i = 1;
        this.x -= speed * timePassed;
        if (this.x * factorX <= mposXX) {
          mposXX = this.x * factorX;
          this.playerWalk = 1;
          this.i = 0;
          this.c = 0;
        }
      }

      if (mposXX > this.x * factorX && mposXX < canvas.width - (this.playerWidth * factorX)) {
        this.playerDirection = 2;
        this.i = 1;
        this.x += speed * timePassed;
        if (this.x * factorX >= mposXX) {
          mposXX = this.x * factorX;
          this.playerWalk = 1;
          this.i = 0;
          this.c = 0;
        }
      }

      if (mposXX == this.x * factorX) {
        if (mposYY < this.y * factorY) {
          this.playerDirection = 3;
          this.i = 1;
          this.y -= speed * timePassed;
          if (this.y * factorY <= mposYY) {
            mposYY = this.y * factorY;
            this.playerWalk = 1;
            this.i = 0;
            this.c = 0;
          }
        }

        if (mposYY > this.y * factorY && mposYY < canvas.height - (this.playerHeight * factorY)) {
          this.playerDirection = 0;
          this.i = 1;
          this.y += speed * timePassed;
          if (this.y * factorY >= mposYY) {
            mposYY = this.y * factorY;
            this.playerWalk = 1;
            this.i = 0;
            this.c = 0;
          }
        }
      }
      if (this.i > 0) {
        if (this.c >= 0 && this.c < 15) {
          this.playerWalk = 1;
          this.c++;
        }
        if (this.c >= 15 && this.c < 30) {
          this.playerWalk = 2;
          this.c++;
        }
        if (this.c >= 30 && this.c < 45) {
          this.playerWalk = 1;
          this.c++;
        }
        if (this.c >= 45 && this.c < 59) {
          this.playerWalk = 0;
          this.c++;
        }
        if (this.c >= 59) {
          this.playerWalk = 0;
          this.c = 0;
        }

      }
    }
  }

  getPreviousXY() {

    this.prevX = this.x,
    this.prevY = this.y;

  }
}

var playerOne = new playerObject();

class playerRod {
  constructor() {
    this.x = playerOne.x;
    this.y = playerOne.y;
    this.rodWidth = 64;
    this.rodHeight = 64;
    this.sourceRodWidth = 32;
    this.sourceRodHeight = 32;
    this.sourceRodX = playerOne.sourcePlayerX;
    this.sourceRodY = playerOne.sourcePlayerY;
  }

  move(){
    this.x = playerOne.x;
    this.y = playerOne.y;
    this.sourceRodX = playerOne.sourcePlayerX;
    this.sourceRodY = playerOne.sourcePlayerY;
  }

  draw() {
    let image = new Image();
    image.src = "img/rod_01.png";

    context.drawImage(
      image,
      this.sourceRodX,
      this.sourceRodY * playerOne.playerDirection,
      this.sourceRodWidth,
      this.sourceRodHeight,
      this.x,
      this.y,
      this.rodWidth,
      this.rodHeight
    );
  }
}

var playerOneRod = new playerRod();

// tile maps
var mapRiver = {
  gridCols: 9,
  gridRows: 12,
  tileSize: 64,
  tiles: [
    0, 1, 1, 3, 2, 0, 2, 1, 0, 
    5, 5, 5, 5, 5, 5, 5, 5, 5, 
    4, 4, 4, 4, 4, 4, 4, 4, 4, 
    6, 6, 6,16,13, 6, 6, 6, 6,
    1, 0, 3, 8, 7, 2, 0, 2, 3, 
    2, 0, 2, 8, 7, 3, 0, 0, 1, 
    3, 2, 1, 8, 7, 0, 2, 3, 0, 
    3, 0, 0, 8, 7, 1, 0, 0, 3, 
    0, 1, 2, 8, 7, 1, 2, 0, 3, 
    0, 0, 3, 8, 7, 0, 0, 1, 0, 
    1, 2, 0, 8, 7, 2, 3, 0, 0,
  ],
  getTile(col, row) {
    return this.tiles[row * mapRiver.gridCols + col];
  },
};

class collisionObject {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 64;
    this.h = 64;
  }

  isCollision(rect1, rect2) {
    if (
      rect1.x < rect2.x + rect2.playerWidth &&
      rect1.x + rect1.w > rect2.x &&
      rect1.y < rect2.y + rect2.playerHeight &&
      rect1.h + rect1.y > rect2.y
    ) {
      // Operation for the collision
      moving = false;
      playerOne.x = playerOne.prevX;
      playerOne.y = playerOne.prevY;
      cast = true;
      playerOne.playerWalk = 1;
      playerOne.i = 0;
      playerOne.c = 0;
    }
  }
}

// utilities and counters
var i = 0;
var resetFloatPosition = 0;
var showCatch = 0;
var showInventory = 0;
var factorX = 1;
var factorY = 1;
var moving = true;
var floatOnWater = false;
var cast = false;

// difficulty 600 = hard, 400 = normal, 200 = easy
var difficulty = 400;

// mouse position and stat
var mposX = 0;
var mposY = 0;
var mposXX = 0;
var mposYY = 0;
var mouse = 0;


// score
var totCatch = 0;
var totKg = 0;
var catchedFish;
var listFish = [];

// stat 0 = wait, 1 = fish, 2 = return, 3 = catch, 4 = round over
var stat = 0;
var frequency = 2000;

// game 0 = time attack, 1 = catch, 2 = main menu, 3 = location menu, 4 = resume, 5 = options
var game = 2;

// var for fps
var t = Date.now();
var timePassed = 0;
var fps = 0;
var speed = 64;

// timer
var t0 = 0;
var t1 = 0;
var countT = 0;
var d0 = 0;
var d1 = 0;

// images src
let bgMain = new Image();
bgMain.src = "img/bg_main.png";
let bgLocation = new Image();
bgLocation.src = "img/bg_location.png";
let bgCatch = new Image();
bgCatch.src = "img/bg_catch.png";
let bgOptions = new Image();
bgOptions.src = "img/bg_options.png";
let tileMapRiver = new Image();
tileMapRiver.src = "img/tile_map_river.png";

window.onload = function () {
  updateAll();
};

function updateAll() {
  main();
  playerOne.getPreviousXY();
  playerOne.move();
  playerOneRod.move();
  float.position();
  draw();
  console.log(stat, mouse);

  window.requestAnimationFrame(updateAll);
}
