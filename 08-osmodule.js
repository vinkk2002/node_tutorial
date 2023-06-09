const os = require('os');
const user = os.userInfo();
//os.userInfo().username;
console.log(user);
console.log(`system up time is ${os.uptime()} seconds`);

const currrentOS = {
    name : os.type(),
    release: os.release(),
    totalmem: os.totalmem().toLocaleString('en-US'),
    freemem: os.freemem().toLocaleString('en-US')
};
console.log(currrentOS);