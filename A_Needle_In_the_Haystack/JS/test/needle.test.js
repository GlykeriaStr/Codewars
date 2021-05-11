const findNeedle = require("../src/needle.js");

test('returns "found needle at position 0" when passed ["needle"]', () => {
  expect(findNeedle(["needle"])).toEqual("Found needle at position 0");
});

test('returns position 1 when passed ["hay","needle"]', () => {
  expect(findNeedle(["hay", "needle"])).toEqual("Found needle at position 1");
});

test('returns position 2 when passed ["hay", "hay", needle"]', () => {
  expect(findNeedle(["hay", "hay", "needle"])).toEqual(
    "Found needle at position 2"
  );
});

test('returns position 1 when passed ["hay","needle", "hay"]', () => {
  expect(findNeedle(["hay", "needle", "hay"])).toEqual(
    "Found needle at position 1"
  );
});
