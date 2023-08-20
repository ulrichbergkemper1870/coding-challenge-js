import { render, fireEvent, screen } from "@testing-library/vue";
import Fizzbuzz from "src/views/Fizzbuzz.vue";

describe("Fizzbuzz Component", () => {
  let input: HTMLElement;

  beforeEach(() => {
    render(Fizzbuzz);
    input = screen.getByRole("textbox");
  });

  it("should render FizzBuzz for multiples 1", async () => {
    await fireEvent.update(input, "1");
    await fireEvent.click(screen.getByText("Show output"));
    expect(screen.getByText("1")).toBeTruthy();
  });

  it("should render FizzBuzz for multiples of both 3 and 5", async () => {
    await fireEvent.update(input, "15");
    await fireEvent.click(screen.getByText("Show output"));
    expect(screen.getByText("FizzBuzz")).toBeTruthy();
  });

  it("should render the number for non-multiples of 3 or 5", async () => {
    await fireEvent.update(input, "7");
    await fireEvent.click(screen.getByText("Show output"));
    expect(screen.getByText("1, 2, Fizz, 4, Buzz, Fizz, 7")).toBeTruthy();
  });

  it("should render an error message for invalid input", async () => {
    await fireEvent.update(input, "invalid");
    expect(screen.getByText("Please enter a valid number.")).toBeTruthy();
  });

  it("should render the FizzBuzz list from 1 to 15", async () => {
    const expectedOutput =
      "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz";
    await fireEvent.update(input, "15");
    await fireEvent.click(screen.getByText("Show output"));
    expect(screen.getByText(expectedOutput)).toBeTruthy();
  });
});
