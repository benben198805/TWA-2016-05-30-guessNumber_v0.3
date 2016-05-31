const readLine = require('readline-sync');
var input=function() {
    var userInput=readLine.question();    
    return userInput;
}
module.exports={
    input:input
}