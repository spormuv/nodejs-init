let isRunning = true;

setTimeout(() => (isRunning = false), 10);
process.nextTick(() => console.log('nextTick'));

while (isRunning) {
  console.log('while loop is running...');
}
