// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

//function max(num1, num2){
//  let max = 0;
//  if (num1 >= num2){
//    max = num1;
//  }
//  else if (num2 >= num1){
//    max = num2;
//  }
//return max;

//}

//console.log(max);

//console.log( _.max([1,2,3,4]) );

let array = [1, 2];
let largest = Math.max.apply(Math, array);
console.log(largest);



// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

//function maxOfThree(num1, num2, num3){
//    let max = 0;
//    if((num1 >= num2) && (num1 >= num3)){
//      max = num1;
//    }
//    else if((num2 >= num1) && (num2 >= num3)){
//      max = num2;
//    }
//    else{
//      max = num3;
//    }
//return max;
//}
//console.log(maxOfThree);

//let array = [1, 2, 3];
//let largest = Math.max.apply(Math, array);
//console.log(largest);





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
