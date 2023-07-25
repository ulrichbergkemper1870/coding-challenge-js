# Coding challenges

This repository contains a running skeleton of a Vue application with some pre-configured components 

Prerequisites:
* use Vue composition API
* use TypeScript if possible


## 1. FizzBuzz
#### Description
FizzBuzz is originally a childrens game for learning maths, where all children sit in a circle and start counting up from 1 in a round-robin way, so first kid says "1, the next kid says "2", and so on. The trick of this game is that numbers are substituted by words if certain rules apply.

The rules are:
* if the number is divisible by 3, say "Fizz"
* if the number is divisible by 5, say "Buzz"
* if the number is both divisible by 3 and 5, say "FizzBuzz"
* if the number is divisisable by neither 3 nor 5, just say the number.

For example, a typical round of fizz buzz would start as follows:

1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz, ...
 

Tasks for this challenge:
  * enter a number in the input field of the FizzBuzz component (text is not allowed)
 * as output display all numbers from 1 to the previously entered number following the FizzBuzz rules as numbered list items
 * implement meaningful tests. You may also try to solve this challenge test-driven. [Click here for a short introduction to Test Driven Development](https://www.techtarget.com/searchsoftwarequality/definition/test-driven-development)

---

## 2. NicerDicer
#### Description
In this challenge you should implement a simple roll-a-die app, where you roll a die and display the result of the roll and some stats.

Tasks for this challenge:
* enable the NicerDicer "link" on the home page to navigate to the NicerDicer component
* render a select-box where you can select the number of sides of the die. Options are
  * 4
  * 6
  * 12
  * 20
* changing the value of the select box resets all stats
* render a button that rolls a virtual die having the selected number of sides and display the result of the roll
* display the total number of rolls and how often a number was rolled, both in absolute and relative (percentage) figures
* use a re-usable Vue component for displaying the results of each possible number. Store the frequency values of the numbers inside each component instance
* render a reset button that resets the stats collected so far
* Bonus: you can try to visualize the percentage how often each number was rolled, e.g. by displaying bars or other shapes with corresponding dimensions. Be creative ;)


---
---


# How to start the project
### Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test
```

### Lints and fixes files
```
yarn lint
```
