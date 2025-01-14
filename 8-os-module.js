const os = require('os');

//info about current user
const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds
console.log(`the system up time is: ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
  platform: os.platform(),
  userInfo: os.userInfo(),
  version: os.version(),
  hostname:os.hostname(),
}

console.log(currentOS);