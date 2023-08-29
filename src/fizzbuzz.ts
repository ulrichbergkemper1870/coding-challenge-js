const fizzbuzz = (count: number): string => {
  if (count < 1) return "Failure";

  const transformedNumbers = [];

  for (let number = 1; number <= count; number++) {
    if (number % 3 == 0 && number % 5 == 0)
      transformedNumbers.push("Fizz Buzz");
    else if (number % 3 == 0) transformedNumbers.push("Fizz");
    else if (number % 5 == 0) transformedNumbers.push("Buzz");
    else transformedNumbers.push(number);
  }

  return transformedNumbers.join(", ");
};

export default fizzbuzz;
