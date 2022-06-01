const { substitution } = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution", () => {
  it("should return false if the given alphabet isn't 26 characters long", () => {
    const input = "thinkful"
    const alphabet = "abcdefghijklmnop"
    const actual = substitution(input, alphabet)
    expect(actual).to.be.false
  })
  it("should correctly translate the given phrase based on the alphabet provided", () => {
    const input = "dog"
    const alphabet = "xoyqmcgrukswaflnthdjpzibev"
    const actual = substitution(input, alphabet)
    const expected = "qlg"
    expect(actual).to.equal(expected)
  })
  it("should return false if there are any duplicate characters in the alphabet", () => {
    const input = "dog"
    const alphabet = "aacdefghijklmnopqrstuvwxyz"
    const actual = substitution(input, alphabet)
    expect(actual).to.be.false
  })
  it("should maintain spaces in the message when encoding", () => {
    const input = "d o g"
    const alphabet = "xoyqmcgrukswaflnthdjpzibev"
    const actual = substitution(input, alphabet)
    const expected = "q l g"
    expect(actual).to.equal(expected)
  })
  it("should maintain spaces in the message when decoding", () => {
    const input = "q l g"
    const alphabet = "xoyqmcgrukswaflnthdjpzibev"
    const actual = substitution(input, alphabet, false)
    const expected = "d o g"
    expect(actual).to.equal(expected)
  })
  it("should ignore capital letters", () => {
    const input = "DOG"
    const alphabet = "xoyqmcgrukswaflnthdjpzibev"
    const actual = substitution(input, alphabet)
    const expected = "qlg"
    expect(actual).to.equal(expected)
  })
})
