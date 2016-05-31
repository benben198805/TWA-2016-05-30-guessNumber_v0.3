var judgeUserInput = require("../src/judgeUserInput");
var makeRandom = require("../src/makeRandom");
var validateUserInput = require("../src/validateUserInput");
var input = require("../src/input");

var gameController = {
    round: 0,
    maxRound: 6,
    targetNumber: "",

    beginGame: function () {
        this.targetNumber = makeRandom.makeRandom();
    },
    endGame: function () {
        this.round = 0;
        this.targetNumber = "";
    },

    gameController: function () {
        var result = "";

        if (this.round == 0) {
            this.beginGame();
        }

        while (this.round <= this.maxRound) {
            var userInput = input.input();
            while (!validateUserInput.validateUserInput(userInput)) {
                console.log("error input");
                userInput = input.input();
            }
            
            var result = judgeUserInput.judgeUserInput(this.targetNumber, userInput);
            if (result == "4A0B") {
                console.log("congratulations");
                return true;
            } else {
                this.round++;
                console.log(result);
            }
        }
        console.log("game over");
        this.endGame();
        return false;

    }
}

module.exports = gameController;