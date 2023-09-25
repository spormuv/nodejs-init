let isRunning = true;

setTimeout(() => (isRunning = false), 10);
process.nextTick(() => console.log('nextTick'));

function setImmediatePromise() {
  return new Promise(resolve => {
    setImmediate(resolve);
    // with resolve() we stay on the same event loop iteration
    // resolve();
  });
}

async function whileLoop() {
  while (isRunning) {
    console.log('while loop is running...');
    await setImmediatePromise();
  }
}

whileLoop().then(() => console.log('while loop is done'));
