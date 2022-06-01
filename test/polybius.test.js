const { polybius } = require("../src/polybius");
const expect = require("chai").expect;

describe ("polybius", () => {
  it("should translate i and j to 42 when encoding", () => {
    const input = "hi"
    const actual = polybius(input)
    const expected = "3242"
    expect(actual).to.equal(expected)
  })
  it("should translate 42 to i/j when decoding", () => {
    const input = "3242"
    const actual = polybius(input, false)
    const expected = "h(i/j)"
    expect(actual).to.equal(expected)
  })
  it("should ignore capital letters", () => {
    const input = "HI"
    const actual = polybius(input)
    const expected = "3242"
    expect(actual).to.equal(expected)
  })
  it("should maintain spaces in the returned message when encoding", () => {
    const input = "h i"
    const actual = polybius(input)
    const expected = "32 42"
    expect(actual).to.equal(expected)
  })
  it("should maintain spaces in the returned message when decoding", () => {
    const input = "32 42"
    const actual = polybius(input, false)
    const expected = "h (i/j)"
    expect(actual).to.equal(expected)
  })
})