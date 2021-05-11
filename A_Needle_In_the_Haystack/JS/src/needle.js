function findNeedle(array) {
  if (!array.includes("needle")) {
    throw "No needle in this hay!";
  }
  const index = array.indexOf("needle");
  return `Found needle at position ${index}`;
}

module.exports = findNeedle;
