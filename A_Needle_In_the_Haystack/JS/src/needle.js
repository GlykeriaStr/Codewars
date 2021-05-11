function findNeedle(array) {
  const index = array.indexOf("needle");
  return `Found needle at position ${index}`;
}

module.exports = findNeedle;
