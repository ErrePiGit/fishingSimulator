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
    this.sourcePlayerX = 38;
    this.sourcePlayerY = 100;
  }

  draw() {
    let image = new Image();
    image.src = "img/player_01.png";

    context.drawImage(
      image,
      this.sourcePlayerX,
      this.sourcePlayerY,
      this.sourcePlayerWidth,
      this.sourcePlayerHeight,
      this.x,
      this.y,
      this.playerWidth,
      this.playerHeight
    );
  }
}

var playerOne = new playerObject();

class playerRod {
  constructor() {
    this.x = playerOne.x + 32;
    this.y = playerOne.y - 20;
  }
}

var playerOneRod = new playerRod();

// tile maps
var mapRiver = {
  gridCols: 9,
  gridRows: 12,
  tileSize: 64,
  tiles: [
    0,1,1,3,2,0,2,1,0,
    5,5,5,5,5,5,5,5,5,
    4,4,4,4,4,4,4,4,4,
    6,6,6,16,13,6,6,6,6,
    1,0,3,8,7,2,0,2,3,
    2,0,2,8,7,3,0,0,1,
    3,2,1,8,7,0,2,3,0,
    3,0,0,8,7,1,0,0,3,
    0,1,2,8,7,1,2,0,3,
    0,0,3,8,7,0,0,1,0,
    1,2,0,8,7,2,3,0,0,
],
  getTile(col, row) {
    return this.tiles[row * mapRiver.gridCols + col];
  },
}

// utilities and counters
var i = 0;
var resetFloatPosition = 0;
var showCatch = 0;
var showInventory = 0;
var factorX = 1;
var factorY = 1;

// difficulty 600 = hard, 400 = normal, 200 = easy
var difficulty = 400;

// mouse position and stat
var mposX = 0;
var mposY = 0;
var mouse = 0;

// score
var totCatch = 0;
var totKg = 0;
var catchedFish;
var listFish = [];

// stat 0 = wait, 1 = fish, 2 = return, 3 = catch
var stat = 0;
var frequency = 2000;

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
var d0 = 0;
var d1 = 0;

// images src
let rod = new Image();
rod.src = "img/rod_01.png";
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
let tileMapRiver = new Image();
tileMapRiver.src = "img/tile_map_river.png";

window.onload = function () {
  updateAll();
};

function updateAll() {
  main();
  draw();

  window.requestAnimationFrame(updateAll);
}