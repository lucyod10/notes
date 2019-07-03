**Interesting Functions**

function | description
--- | ---
`array.substring(start, end)` |	returns string starting at index start, and ending at index end
`array.sort(function)` |	sorts the array depending on the function in the brackets. http://www.javascriptkit.com/javatutors/arraysort.shtml
`array.forEach(function)` |	loops through each element in an array, and executed function in brackets
`string.IndexOf(“word”)` |	finds the index of the first character of the string. e.g. for string.IndexOf(“not”) will return 50 if the word “not” starts on the 50th character
`string.includes(“”)` |	checks if the string includes “”
`string.endswith(“”)` |	checks if the string ends with “”
`array.pop()	` | removes the last value of an array. Returns the data that was removed (so you can put it in a variable)
arguments	inside of a function, the arguments keyword returns an array of the argument values

```
for (let animal in zoo ) {
	console.log(`the key: ${animal}, and the value is: ${zoo[animal]}`);
}
```

A function does not need the exact number of arguments, it will keep track of them all in an array called arguments. you can, for example, loop through the arguments and add them all together.

If you define an object like: 
```
const Cat = function ( a, b, c ) {
	this.name = a;
	this.age = b;
	this.colour = c;
}
```
then to make a new one
`const greg = new Cat(s , f , g);`

this adds to them all the species “feline”
`Cat.prototype.species = “feline";`


Save Image using command line:
`curl imagepath > images/filename.jpg`

**placeholder images**
placepuppy for placeholder images
http://place-puppy.com/200x200 
http://www.placepuppy.net/400/250
https://placedog.net/
https://placedog.net/640/480?random


**Image Spriting**

GA Library
Welcome to a nicer way to learn about HTML % CSS
htmlandcssbook.com

thought works
mozilla
