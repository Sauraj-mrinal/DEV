
const os  = require('os');

// methods 
console.log(os.arch());
// this shows ur system architecture
//--> x64

console.log(os.platform());
// it shows system platform
//--> wind32

console.log(os.networkInterfaces());
// it shows network information 
// --> {
//     address: '127.0.0.1',
//     netmask: '255.0.0.0',
//     family: 'IPv4',
//     mac: '00:00:00:00:00:00',     
//     internal: true,
//     cidr: '127.0.0.1/8'
//   }
// ]

console.log(os.cpus());
// it  shows cpu information 
// --> {
//     model: 'Intel(R) Core(TM) i5-9300H CPU @ 2.40GHz',
//     speed: 2400,
//     times: { user: 1831796, nice: 0, sys: 714750, idle: 63094515, irq: 15625 }
//   }
