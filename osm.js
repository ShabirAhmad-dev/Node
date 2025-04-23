const os = require('os');
const { release } = require('process');

const user = os.userInfo()
console.log(user)

console.log(`Uptime ${(os.uptime() / 3600)}`)

computerInfo = {
    name: os.userInfo().username,
    release: os.release(),
    freeMemory: os.freemem()
}

for (const data in computerInfo){
    console.log(computerInfo[data])
}
