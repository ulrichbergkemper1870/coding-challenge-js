const fizzbuzz = (count: Number): String => {
  if (count % 15 === 0) {
    return "FizzBuzz";
  }
  if (count % 3 === 0) {
    return "Fizz";
  }
  if (count % 5 === 0) {
    return "Buzz";
  }
  return count;
};

export default fizzbuzz;
