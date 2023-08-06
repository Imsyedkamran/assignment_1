// 2nd 
let Name:string = "kamran ";
console.log('Hello '+  Name+' would you like to learn some Python today?');
// 3rd 

console.log("Lowercase:", Name.toLowerCase());
console.log("Uppercase:",Name.toUpperCase());

const titlecaseName = Name.replace(/\b\w/g, (char) => char.toUpperCase());
console.log("Titlecase:", titlecaseName);
//4th and 5th
const personName: string = "syed ";
const quote: string = "A person who never made a mistake never tried anything new.";

const message: string = `${personName} once said, "${quote}"`;
console.log(message);
// 6th 

const newName: string = "\t   \n  ali   \t\n   ";
console.log("Name with whitespace:", newName);
console.log("Stripped name:", newName.trim());
//7th and 8th 
console.log("Addition Result:", 4 + 4); 
console.log("Subtraction Result:", 12 - 4);
console.log("Multiplication Result:",2 * 4);
console.log("Division Result:",16 / 2);
 
//9th
const favoriteNumber: number = 22;
console.log('My favorite number is ' + favoriteNumber);