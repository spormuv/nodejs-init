// console.log(arguments.callee.toString());
// // function (exports, require, module, __filename, __dirname) {}

// console.log(__filename);
// console.log(__dirname);

// console.log(exports);
// // exports === module.exports

// console.log(require);
// console.log(require.extensions);

const { myName, myHobbies, myFavoriteNumber } = require('./multiple-exports');
const {
  myName: myOtherName,
  myFriendsName,
  myGreatHobbies,
} = require('./export-and-import');
const greetingFn = require('./my-modules/single-export');

// Dont use absolute paths
// const greetingFn = require('c:\\_Projects\\nodejs-init\\03-commonjs-modules\\single-export.js');

// Imports from multiple-exports
console.log(myName);
console.log(myHobbies);
console.log(myFavoriteNumber);

// Mutates array in the multiple-exports module!
myHobbies.push('Bouldering');

// Imports from single-export
greetingFn(myName);

// Imports from export-and-import
console.log(myOtherName);
console.log(myFriendsName);
console.log(myGreatHobbies);
