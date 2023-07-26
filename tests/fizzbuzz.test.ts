import fizzbuzz from "../src/fizzbuzz";

describe("fizzbuzz", () => {
  it("should render number", () => {
    expect(fizzbuzz(1)).toEqual(1);
  });
  it('should render "Fizz" when number is divisable by 3', () => {
    expect(fizzbuzz(3)).toEqual("Fizz");
  });
  it('should render "Buzz" when number is divisable by 5', () => {
    expect(fizzbuzz(5)).toEqual("Buzz");
  });
  it('should render "FizzBuzz" when number is divisable by 3 and 5', () => {
    expect(fizzbuzz(15)).toEqual("FizzBuzz");
  });
});
