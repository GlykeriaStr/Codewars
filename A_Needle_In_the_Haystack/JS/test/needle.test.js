const findNeedle = require("../src/needle.js");

test('returns "found needle at position 0" when passed ["needle"]', () => {
  expect(findNeedle(["needle"])).toEqual("Found needle at position 0");
});
