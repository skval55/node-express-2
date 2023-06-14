const timeWord = require("./timeWord");

describe("#timeword", () => {
  test("it is a function", () => {
    expect(typeof timeWord).toBe("function");
  });
  test("works with midnight", () => {
    expect(timeWord("00:00")).toEqual("midnight");
  });
  test("works with noon", () => {
    expect(timeWord("12:00")).toEqual("noon");
  });
  test("works with am time", () => {
    expect(timeWord("05:34")).toEqual("five thirty four am");
  });
  test("works with pm time", () => {
    expect(timeWord("16:18")).toEqual("four eighteen pm");
  });
});
