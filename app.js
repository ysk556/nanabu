const gl = require("./getline.js");

// メイン処理
async function main() {
  console.log(('--begin--'));
  while (true) {
    var result = await gl.getline('type any words: ');
    if (result == '') {
      break;
    }
    console.log('you typed: ' + result);
  }
  console.log('--end--');
}

// メイン処理を実行
main();