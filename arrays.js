// Creating an Array
let favoriteFruits;

// 1) Use the array literal characters [] to create a list of your favorite
//    fruits and store them in the previous variable for later printout.
//
//    Note: Remember, different items in a list are separated by commas.
favoriteFruits = ['banana', 'apple', 'grapes', 'persimmon']

// Adding items to the END of an Array
const sports = ["football", "basketball"];

// 2) Use the "push" function on the previous array to add another sport
//    to the END of the list for later printout
function addSport() {sports.push('soccer')};
addSport();

// Removing items from the END of an Array
const groceryList = ["pepper", "salt", "oranges"];

// 3) Use the "pop" function on the previous array to remove the LAST
//    item in the list for later printout
console.log(groceryList.pop());

// Adding items to the BEGINNING of an Array
const seriesMissing1 = [2, 3, 4];

// 4) Use the "unshift" function on the previous array to add 1
//    to the BEGINNING of the list for later printout
console.log(seriesMissing1.unshift(1));

// Removing items from the BEGINNING of an Array
const seriesWrong = [10, 1, 2, 3, 4];

// 5) Use the "shift" function on the previous array to remove
//    the FIRST item of the list for later printout
function removeNum() {
	seriesWrong.shift();
}

removeNum();

// Getting the number of items in an Array
const randomNumbers = [2, 2, 6, 3, 3, 73, 16, 28, 91];

// 6) Use the "length" property on the previous array to retrieve
//    how many items are in the array and store the result in the
//    following variable
let randomNumbersSize;

randomNumbersSize = randomNumbers.length;


// Getting the index of an existing item in an Array
const randomWords = ["pen", "pencil", "charcoal", "oil pastel"];

// 7) Use the "indexOf" function on the "randomWords" array to get the index
//    of the item "pencil" and store the result in the following variable
let pencilIndex;

pencilIndex = randomWords.indexOf('pencil');

// 8) Use the "indexOf" function on the "randomWords" array to get the index
//    of the item "brush" and store the result in the following variable
let brushIndex;

brushIndex = randomWords.indexOf('brush');

// Joining items in an Array into a String
const sentenceArray = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog."];

// 9) Use the "join" function on the previous array to combine its items
//    into a string, and store the result in the following variable
//
//    Note: Make sure you use the parameter to add spacing between each word
let sentence;
sentence = sentenceArray.join();

// Creating a (shallow) copy of an Array
const originalArray = [5, 6, 7];

// 10) Use the "slice" function to create a (shallow) copy of "originalArray"
//     and store the result in "copiedArray" below
let copiedArray;

copiedArray = originalArray.slice();

// 11) Use the indexing operator [] to set the last index in your copied array
//     to be 8 instead of 7


// Adding one Array's items to another Array
const box1 = ["computer", "television", "laptop"];
const box2 = ["cake", "juice", "celery"];

// 12) Use the "concat" function to combine the two arrays and store the result
//    in the follow variable for later printout
let biggerBox;

biggerBox = box1.concat(box2);

// Working with Arrays inside Arrays
const meals = [
	["bacon", "lettuce", "tomato", "bread"],
	["milk", "cereal"]
];

// 13) Use the indexing operator to get the last ingredient of each meal
//     and store their results in their respective variables below
let bread;
let cereal;

bread = meals[0][3];
cereal = meals[1][1];


// Printouts
//
// Note: Do not modify the code below
console.log("Favorite Fruits:", favoriteFruits.join(", "));
console.log("Sports:", sports.join(", "));
console.log("Grocery List:", groceryList.join(", "));
console.log("Series (was missing 1):", seriesMissing1.join(", "));
console.log("Series (had 10 at beginning):", seriesWrong.join(", "));
console.log("Random Array Size:", randomNumbersSize);
console.log("Index of \"pencil\":", pencilIndex);
console.log("Index of \"brush\":", brushIndex);
console.log("Joined sentence:", sentence);
console.log("Original Array:", originalArray.join(", "));
console.log("Copied Array:", copiedArray.join(", "));
console.log("Bigger Box Contents:", biggerBox.join(", "));
console.log("Bread String:", bread);
console.log("Cereal String:", cereal);