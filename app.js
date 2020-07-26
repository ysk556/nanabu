const fs = require('fs');
const r1 = require('./getline.js');

async function main() {
  let msg = await r1.getline('please type:');
  fs.writeFileSync('./data.txt', msg);
  console.log('save data.txt to write:' + msg);
}
main();