var gameController = require("../src/gameController");

var main=function(userInput){
    result = gameController.gameController(userInput);
    console.log(result);
    if (result != "congratulations"&&result!="game over") {
        return true;
    }else{
        return false;
    }
}

module.exports=main;
