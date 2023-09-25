const fs = require('fs');
const dns = require('dns');

const info = text => {
  console.log(text, performance.now().toFixed(2));
};

info('program start!');

// Close events
fs.writeFile('./test.txt', 'hello node.js', () => info('file written'));

// Promises
Promise.resolve().then(() => {
  info('promise 1');
});

// Next tick
process.nextTick(() => {
  info('next tick 1');
});

// SetImmediate (check)
setImmediate(() => {
  info('immediate 1');
});

// Timeouts
setTimeout(() => {
  info('timeout 1');
}, 0);

setTimeout(() => {
  process.nextTick(() => {
    info('next tick 2');
  });

  info('timeout 2');
}, 100);

// Intervals
let intervalCount = 1;
const intervalId = setInterval(() => {
  info(`interval ${(intervalCount += 1)}`);
  if (intervalCount === 2) clearInterval(intervalId);
}, 50);

// I/O events
dns.lookup('localhost', (err, address, family) => {
  info('dns 1 localhost');
  Promise.resolve().then(() => {
    info('promise 2');
  });
  process.nextTick(() => {
    info('next tick 3');
  });
});

info('program end!');
