let fs = require('fs');
let readline = require('readline');
let process = require('node:process');
let rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('What do you want to write to me?\n');
rl.prompt();
rl.on('line', (text) => {
  if (text === 'exit') {
    close();
  } else {
    fs.appendFile('text.txt', text, { encoding: 'utf8', flag: 'a' }, (err) => {
      if (err) {
        throw err;
      }
    });
  }
});
rl.on('SIGINT', () => {
  close();
});
function close() {
  console.log('bye');
  rl.close();
}
