var d = 0;
var i = 0;

function floatMovement(sourceFloatX, c) {
    if (c == 0) {
        i = 0;
    }
  if (i < 30) {
    sourceFloatX = 64;
  }
  if (i >= 30 && c < 60) {
    sourceFloatX = 32;
  }
  if (i >= 60 && c < 90) {
    sourceFloatX = 0;
  }
  if (i >= 90 && c < 120) {
    sourceFloatX = 32;
  }
  if (i == 120) {
    i = 0;
  }
  i++;
  return sourceFloatX;
}

function floatCatch(sourceFloatX) {
  d++;
  if (d < 15) {
    sourceFloatX = 96;
  }
  if (d >= 15 && d < 30) {
    sourceFloatX = 128;
  }
  if (d == 30) {
    d = 0;
  }
  return sourceFloatX;
}
