console.log(arguments.callee.toString());
// function (exports, require, module, __filename, __dirname) {}

console.log(__filename);
console.log(__dirname);

console.log(exports);
// exports === module.exports

console.log(require);
console.log(require.extensions);
