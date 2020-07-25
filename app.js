const gl = require("./getline.js");

const readline = require('readline');

async function main() {
  while (true) {
    var re = await gl.getline('input: ');
    console.log('(' + re.length + ' chars)');
  }
}

main();