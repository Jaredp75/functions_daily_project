// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(num1, num2){
	  if (num1 === num2){
	    return "Numbers are equal"
	  } else if (num1 > num2){
	    return num1
	  } else if (num2 > num1){
	    return num2
	  } else {
	    return "Numbers are Invalid"
	  }
	}
	 console.log(max(4, 5));



// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(num1, num2, num3){
	  return "The largest of the three numbers is " + Math.max(num1, num2, num3);
	}
	 console.log(maxOfThree(6, 8, 2));




// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function vowel_count(char) {
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;

  for(var x = 0; x < char.length ; x++)
  {
    if (vowel_list.indexOf(char[x]) !== -1)
    {
      vcount += 1;
    }

  }
  return vcount;
}
console.log(vowel_count("My name is Jared"));




// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
let sum = [1, 2, 3].reduce(add, 0);

function add(a, b) {
  return a + b;
}

console.log(sum);


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function maxOfThree(num1, num2, num3){
	  return "The largest of the three numbers is " + Math.max(num1, num2, num3);
	}
	 console.log(maxOfThree(6, 8, 2));


// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
//function getLength() {
  let str = 'Hello World!';
  var n = str.length;

console.log(str.length);

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
//function greaterThan(){
  //if (num1 >= num2);
    //return true;
//  else if (num2 >= num1);
//    return false;
//}
//console.log(greaterThan);
function greaterThan(num1, num2){
	  if (num1 === num2){
	    return "Numbers are equal"
	  } else if (num1, num2){
	    return "The greatest parameter is " + Math.max(num1, num2);
	  } else {
	    return "Numbers are Invalid"
	  }
	}
	 console.log(greaterThan(7, 9));



// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.


//let greeting = function (name) {
//  console.log("Hello," + " " + name);
//};

let greeting = "Hello";

let name = "Jared";
console.log(greeting + " " + name);





// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.
function madlib(word1, word2, word3, word4){
	  if (arguments.length !== 4){
	    return "Please use exactly 4 words in '' quotes"
	  } else {
	    return "Today I saw " + word1 + " go to the " + word2 + " to find some " + word3 + " so she can " + word4 + "."
	  }
	}
	 console.log(madlib("Cindy", "market", "paper", "draw"));
