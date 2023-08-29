import fizzbuzz from "../src/fizzbuzz";

describe("fizzbuzz", () => {
  it("should render numbers to list of Fizz and Buzz codes", () => {
    expect(fizzbuzz(1)).toEqual("1");
    expect(fizzbuzz(3)).toEqual("1, 2, Fizz");
    expect(fizzbuzz(8)).toEqual("1, 2, Fizz, 4, Buzz, Fizz, 7, 8");
    expect(fizzbuzz(33)).toEqual(
      "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz"
    );
  });
  it("should return failure with number smaller one", () => {
    expect(fizzbuzz(0)).toEqual("Failure");
    expect(fizzbuzz(-2)).toEqual("Failure");
  });
});
