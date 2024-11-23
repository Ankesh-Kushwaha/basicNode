const { readFileSync, writeFileSync } = require('fs');
console.log('start');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

writeFileSync(
  './content/result-sync.txt', `here is the result:${first},${second}`, // this can write the file during exicution
  { flag: 'a' }//this append the file 
);

console.log('done with this task');
console.log('starting the new task');
