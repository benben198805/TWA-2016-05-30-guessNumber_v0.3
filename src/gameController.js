var judgeUserInput = require("../src/judgeUserInput");
var makeRandom = require("../src/makeRandom");
var validateUserInput = require("../src/validateUserInput");

var gameController = {
    round: 0,
    maxRound: 6,
    targetNumber: "",

    beginGame: function () {
        this.round++;
        this.targetNumber = makeRandom.makeRandom();
    },
    endGame: function () {
        this.round = 0;
        this.targetNumber = "";
    },

    gameController: function (userInput) {
        var result = "";

        if (this.round == 0) {
            this.beginGame();
        }

        if (validateUserInput.validateUserInput(userInput)) {
            result = judgeUserInput.judgeUserInput(this.targetNumber, userInput);
            if (result == "4A0B") {
                result = "congratulations";
            } else {
                this.round++;
                if (this.round > this.maxRound) {
                    result = "game over";
                    this.endGame();
                }
            }
        } else {
            result = "error input";
        }
        return result;
    }
}

module.exports = gameController;