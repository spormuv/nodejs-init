const fs = require('fs');
const dns = require('dns');

const timestamp = () => performance.now().toFixed(2);

console.log('program start');

// Timeouts
setTimeout(() => {
  console.log('timeout 1', timestamp());
}, 0);

setTimeout(() => {
  process.nextTick(() => {
    console.log('next tick 2', timestamp());
  });

  console.log('timeout 2', timestamp());
}, 10);

// Close events
fs.writeFile('./test.txt', 'hello node.js', () =>
  console.log('file written', timestamp())
);

// Promises
Promise.resolve().then(() => {
  console.log('promise 1', timestamp());
});

// Next tick
process.nextTick(() => {
  console.log('next tick 1', timestamp());
});

// SetImmediate (check)
setImmediate(() => {
  console.log('immediate 1', timestamp());
});

// I/O events
dns.lookup('localhost', (err, address, family) => {
  console.log('dns 1 localhost', address, timestamp());
});

console.log('program end');
