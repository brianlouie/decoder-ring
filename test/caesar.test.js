const { caesar } = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
  it("should return false if the shift value is 0", () => {
    const input = "thinkful"
    const shift = 0
    const actual = caesar(input, shift)
    expect(actual).to.be.false
  })
  it("should return false if the shift value is less than -25", () => {
    const input = "thinkful"
    const shift = -26
    const actual = caesar(input, shift)
    expect(actual).to.be.false
  })
  it("should return false if the shift value is greater than 25", () => {
    const input = "thinkful"
    const shift = 26
    const actual = caesar(input, shift)
    expect(actual).to.be.false
  })
  it("should ignore capital letters", () => {
    const input = "HELO"
    const expected = "khor"
    const shift = 3
    const actual = caesar(input, shift)
    expect(actual).to.equal(expected)
  })
  it("should wrap to the other side of the alphabet if the shift crosses the beginning or end", () => {
    const input = "zen"
    const expected = "chq"
    const shift = 3
    const actual = caesar(input, shift)
    expect(actual).to.equal(expected)
  })
  it("should maintain spaces and other nonalpabetic symbols when encoding a message", () => {
    const input = "$#!%"
    const expected = "$#!%"
    const shift = 3
    const actual = caesar(input, shift)
    expect(actual).to.equal(expected)
  })
  it("should maintain spaces and other nonalpabetic symbols when decoding a message", () => {
    const input = "$#!%"
    const expected = "$#!%"
    const shift = 3
    const actual = caesar(input, shift, false)
    expect(actual).to.equal(expected)
  })
})