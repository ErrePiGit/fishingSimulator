var q = 0;
var d = 0;

floatMovement = function (sourceFloatX, resetFloatPosition) {
  if (resetFloatPosition == 0) {
    q = 0;
  }
  if (q < 30) {
    sourceFloatX = 64;
  }
  if (q >= 30 && q < 60) {
    sourceFloatX = 32;
  }
  if (q >= 60 && q < 90) {
    sourceFloatX = 0;
  }
  if (q >= 90 && q < 120) {
    sourceFloatX = 32;
  }
  if (q >= 120) {
    q = 0;
  }
  q++;

  return sourceFloatX;
};

floatCatch = function (sourceFloatX) {
  if (d < 15) {
    sourceFloatX = 96;
  }
  if (d >= 15 && d < 30) {
    sourceFloatX = 128;
  }
  if (d == 30) {
    d = 0;
  }
  d++;

  return sourceFloatX;
};
