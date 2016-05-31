const readLine = require('readline-sync');
var input = function () {
    console.log('please input 4 length number:');
    var userInput = readLine.question();
    return userInput;
}
module.exports = {
    input: input
}