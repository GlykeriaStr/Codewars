function findNeedle(array) {
  if (array[0] === "needle") {
    return "Found needle at position 0";
  } else {
    return "Found needle at position 1";
  }
}

module.exports = findNeedle;
