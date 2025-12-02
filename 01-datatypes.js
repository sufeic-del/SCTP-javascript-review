// PRIMITIVE DATA TYPES
// numbers
// - integers - store whole numbers
let x = 42;
// - float - decimal numbers
let pi = 3.14;
// string - text
let password = "rotiprata123";
// boolean - true/false
let wantPlasticBag = true;

// REFERENCE DATA TYPES
// Array
let fruits = ["apples", "oranges", "bananas"];
console.log(fruits[1]);

// Objects
// used to represent stuctured record
// objects consist of key/value pairs
// if the keys are valid variable names, you don't need to use double quotes or single quotes around the keys
// if the key is not a valid variable name, then we MSUT use double quotes or single quotes
let book = {
    "title":"Romance of the Three Kingdoms",
    "author":"Luo Guozhong",
    "pages": 1000,
    yearPublished: 1880,
    "published by":"Tan & Ming" 
}
console.log(book["title"]);
// if key is a valid variable name, we can use the dot notation to access the key
console.log(book.title);
// if the key is not a valid variable name then we must use square bracket
// and strings to access to it
console.log(books["published by"]);

// while it is possible to use an array like an object, not recomemnded
let contact = ["John", "Snow", "johnsnow@gmail.com", true, 5];
console.log(contact[0], contact[1]);

// VALID VARIABLE/IDENTIFIER NAME (are case sensitive)
// 1. cannot begin with numbers
// let 3apples;  // WRONG
// let apples3; // CAN!
// 2. cannot contain special character except _ and $ (include spaces)
// let $processor = {};
// let MAX_LIMIT = 10;
// 3. canot be a reserved keyword
// let let=3; // NO