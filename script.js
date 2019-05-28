const numbers = [67, 80, 65, 79, 86, 66, 75, 71, 81, 69, 90, 79, 68, 65, 73, 88];

// 1. Convert numbers to Alphabet according to Ascii table using the fromCharCode method
// Using a for loop:

// MY ANSWER BELOW

// for (let i = 0; i < numbers.length; i++) {
//     let string = String.fromCharCode(numbers[i])
//     console.log(string)
// }

// Using the forEach method:

// MY ANSWER BELOW

// numbers.forEach(function(element) {
//     let string = String.fromCharCode(element)
//     console.log(string)
// })

// Using the map method:

// MY ANSWER BELOW

// numbers.map(function(element) {
//     console.log(String.fromCharCode(element)) 
// })

// 2. Display numbers below showing only numbers that are greater than 72 and less then 88 (inclusive) using the filter method

// Answer:

// const filtered = numbers.filter(number => number > 72 && number < 88);
// console.log(filtered)

// 3. Display the product of all numbers using reduce

// Answer:

// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log(numbers.reduce(reducer));