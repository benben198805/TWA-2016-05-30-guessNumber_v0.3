const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var main = require("../src/main");

console.log('please input 4 length number:');
rl.on('line', (userInput) => {
    var result = main(userInput);
    if (result) {
        console.log('please input 4 length number:');
    }else{
        rl.close();
    }
});
