var d = 0;
var i = 0;

function floatMovement(sourceFloatX, resetFloatPosition) {
    if (resetFloatPosition == 0) {
        i = 0;
    }
  if (i < 30) {
    sourceFloatX = 64;
  }
  if (i >= 30 && i < 60) {
    sourceFloatX = 32;
  }
  if (i >= 60 && i < 90) {
    sourceFloatX = 0;
  }
  if (i >= 90 && i < 120) {
    sourceFloatX = 32;
  }
  if (i == 120) {
    i = 0;
  }
  i++;
  return sourceFloatX;
}

function floatCatch(sourceFloatX) {
  if (d < 15) {
    sourceFloatX = 96;
  }
  if (d >= 15 && d < 30) {
    sourceFloatX = 128;
  }
  if (d == 30) {
    d = 0;
  }
  d++
  return sourceFloatX;
}
