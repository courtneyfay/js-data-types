/**
 * Arrays
 * Most of your answers should be stored in variables called q1, q2 etc.. and the variables printed to the console.

    (i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array of image sources. Use image1.png, image2.png, and image3.png as the array values.
 */

var images = ["image1.png","image2.png","image3.png"];
console.log("Question 1: " + images);

/**
 * Question 2
 * Using the array from Question 1, store the first element of the array in variable q2.
 */

var q2 = images[0];
console.log("Question 2: " + q2);

/**
 * Question 3
 * Get the length of the first array (number of elements in the array) and store it in variable q3
 */

var q3 = images.length;
console.log("Question 3: " + q3);

/**
 * Question 4
 *  Using the array from Question 1, store the last element of the array in variable q4. Hint: How can we get the number of elements in the array?
 */


var q4 = images[images.length-1];
console.log("Question 4: " + q4);


// ____________________________________________________________________________

/**
 * Arrays + Iteration
 * Most of your answers should be stored in variables called q1, q2 etc.. and the variables printed to the console.

    (i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array of numbers using 1,2,3, and 4 as values. Use forEach to increase each value by 1 and store the value back in the array.
The end result should be an array of numbers with values 2,3,4,5
 */

// Come back and check!
var numbers = [1, 2, 3, 4];
numbers.forEach(function(el) {
	numbers[el-1] = el + 1;
});
console.log("Question 1: " + numbers);


/**
 * Question 2
 * Using the array from Question 1, find the average of the numbers in the array (average=sum of all numbers/number of numbers). 
 Store the average in q2.
 */


var qq2 = Math.average(numbers);
console.log("Question 1: " + qq2);
