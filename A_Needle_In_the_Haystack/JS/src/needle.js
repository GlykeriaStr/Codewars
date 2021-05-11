function findNeedle(array) {
  if (array[0] === "needle") {
    return "Found needle at position 0";
  } else if (array[1] === "needle") {
    return "Found needle at position 1";
  } else {
    return "Found needle at position 2";
  }
}

module.exports = findNeedle;
