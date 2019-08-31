# Practice questions to do later

### TODO

- map, reduce and filter arrays

-----------

## Underscore

### Underscore - Arrays!

Log out the answers to all of the following questions!

Here is some data that you can work with.

```js
var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var bumpyArr = ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]];
var uncompactedArr = [ "hello", false, NaN, undefined, "quantom bogo-sort" ];

var arrToTransform = [[ "age", "location" ], [ NaN, undefined ]];
```

- Create an array of every five numbers between 30 and 101
- Turn ` bumpyArr ` into one flat array (no nested arrays)
- Remove all of the falsey elements in the ` uncompactedArr `
- Find all of the unique elements in the following arrays - ` [ 1, 25, 100 ] `, ` [ 1, 14, 25 ] ` and ` 24, Infinity, -0 `
- Find the index of the first element in ` numbers ` that is over 7 and is even
- Turn ` arrToTransform ` into an object that looks like this - ` { age: NaN, location: undefined } `

#### Collections!

Log out the answers to all of the following questions!

Here is some data that you can work with.

```js
var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var people = [
  { id: 1, username: "A", active: true,  age: 20, uid: 1412 },
  { id: 2, username: "B", active: false, age: 35, uid: 1352 },
  { id: 3, username: "C", active: false, age: 50, uid: 5418 },
  { id: 4, username: "D", active: true,  age: 65, uid: 216  },
  { id: 5, username: "E", active: true,  age: 80, uid: 18   },
  { id: 6, username: "E", active: true,  age: 95, uid: 1000 },
];

var words = [
  "attoparsec", "batch", "Cinderalla Book", "Dr. Fred Mbogo", "eat flaming death", "fandango on core", "Foonly", "goat file", "Halloween Documents", "I see no X here", "Imminent Death Of The Net Predicted!", "jibble", "kilogoogle", "larval stage", "maximum Maytag mode", "nybble", "octal forty", "pico-", "quantum bogodynamics", "rubber-hose cryptanalysis", "sigmonster", "tail recursion", "unswizzle", "VAXen", "webmaster", "XEROX PARC", "yak shaving", "Zero-One-Infinity Rule"
]; // Random words from here... http://www.catb.org/jargon/html/go01.html
```

### Underscore - Exercises

- Sort the ` people ` by 'uid'
- Group the random words by the lower case version of their first letter
- Check to see if all the words have more than 3 characters
- Check if some words are over twenty characters long
- Get an array of all of the uids in ` people `
- Find the person with the highest uid
- Return an object that says how many even numbers and how many odd numbers there are in ` numbers `
- Get three random numbers out of ` numbers `


------------
## Vanilla JS

### Javascript - Scrabble Score
Write a program that, given a word, computes the scrabble score for that word.

``
scrabble("cabbage")
// => 14
``

#### Letter Values

| Letters                      | Values |      
| -----------------------------|:-------|
| A, E, I, O, U, L, N, R, S, T | 1      |
| D, G                         | 2      |
| B, C, M, P                   | 3      |
| F, H, V, W, Y                | 4      |
| K                            | 5      |
| J, X                         | 8      |
| Q, Z                         | 10     |

#### Extensions
- You can play a :double or a :triple letter.
- You can play a :double or a :triple word.

### Javascript - Roman Numerals
The Romans were a clever bunch. They conquered most of Europe and ruled it for hundreds of years. They invented concrete and straight roads and even bikinis. One thing they never discovered though was the number zero. This made writing and dating extensive histories of their exploits slightly more challenging, but the system of numbers they came up with is still in use today. For example, the BBC uses Roman numerals to date their programmes.

The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice these letters have lots of straight lines and are hence easy to hack into stone tablets using a chisel).
```
 1  => I
10  => X
 7  => VII
 ```

Write a program that will convert Arabic numerals to Roman numerals.

There is no need to be able to convert numbers larger than about 3000. (The Romans themselves didn't tend to go any higher)

Wikipedia says: "Modern Roman numerals ... are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero."

To see this in practice, consider the example of 1990.
```
In Roman numerals 1990 is MCMXC:

1000=M 900=CM 90=XC

2008 is written as MMVIII:

2000=MM 8=VIII
```

See http://www.romannumerals.co.uk/roman-numerals/numerals-chart.html for the table of Roman Numbers you will need to check for.

## Pairwise

Given an array, find element pairs whose sum equal the second argument arg and return the sum of their indices.

If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.

For example, pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

```js
Index	0	 1	 2	 3	 4
Value	7	 9	11	13	15
```

Below we will take their corresponding indices and add them.

```js
7 + 13 = 20 => Indices 0 + 3 = 3
9 + 11 = 20 => Indices 1 + 2 = 3
3 + 3 = 6 => Return 6
```


Do this with .reduce

## Phone Number Check

The rules for a valid phone number in this exercise are as follows:

If the phone number has any non-numerals in it, they should be removed/ignored
If the phone number is 11 digits and the first number is 1, trim the 1 and use the first 10 digits
If the phone number is 11 digits and the first number is not 1, then it is an invalid number
If the phone number is 10 digits long, it is valid; if not, it is invalid

### Exercise
Write a Javascript function which takes a phone number as a string and returns the cleaned-up version of the number if it is valid (ie. with non-numerals removed), or if not valid, returns '00000000' (ten zeroes)
Write a Javascript function which returns a formatted version of the given phone number, ie:
Input:  11234567890
Output: (123) 456-7890
I.e., the first 3 numbers are the area code, and are in brackets;
then comes a space, then the next 3 numbers (the exchange code),
followed by a dash, then then the last four numbers.

do this using substr
and ternary


## Happy Numbers
// A happy number is defined by the following process:
//
// Starting with any positive integer,
// Replace the number by the sum of the squares of its digits, and repeat the process until
// the number equals 1 (where it will stay),
// or it loops endlessly in a repeating cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy numbers, while those for which this process do not end in 1 are unhappy numbers.
//
// Task
// Your task is to write a program in Javascript which prints the first 10 happy numbers, starting from 1.
//
// Here are the first 10 happy numbers, for you to compare your output against:
//
// 1
// 7
// 10
// 13
// 19
// 23
// 28
// 31
// 32
// 44
