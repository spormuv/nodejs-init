const myName = 'Mike';
const myHobbies = ['Sports', 'Cooking', 'Reading'];
const myFavoriteNumber = 7;

console.log('Text from the multiple-exports CommonJS module');

// module.exports & exports reference the same object in memory
module.exports.myName = myName;
exports.myHobbies = myHobbies;
exports.myFavoriteNumber = myFavoriteNumber;
