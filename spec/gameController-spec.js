describe('gameController', function () {

    var gameController;
    var judgeUserInput;
    var makeRandom;
    var validateUserInput;

    beforeEach(function () {
        gameController = require("../src/gameController");
        judgeUserInput = require("../src/judgeUserInput");
        makeRandom = require("../src/makeRandom");
        validateUserInput = require("../src/validateUserInput");
    });

    describe('beginGame', function () {
        it('when call beginGame set round and targetNumber', function () {
            spyOn(makeRandom, 'makeRandom').and.returnValue("1234");
            gameController.beginGame();
            expect(gameController.round).toEqual(1);
            expect(gameController.targetNumber).toEqual("1234");
        });
    });


    describe('endGame', function () {
        it('when call endGame set round and targetNumber', function () {
            gameController.endGame();
            expect(gameController.round).toEqual(0);
            expect(gameController.targetNumber).toEqual("");
        });
    });

    describe('gameController', function () {
        it('when call gameController with error input then round stay', function () {
            spyOn(makeRandom, 'makeRandom').and.returnValue("1234");
            spyOn(judgeUserInput, 'judgeUserInput').and.returnValue(false);
            var result = gameController.gameController("123a");
            expect(gameController.round).toEqual(1);
            expect(gameController.targetNumber).toEqual("1234");
            expect(result).toEqual("error input");
        });
        it('when call gameController with right input at first time then reture congratulations', function () {
            spyOn(makeRandom, 'makeRandom').and.returnValue("1234");
            spyOn(judgeUserInput, 'judgeUserInput').and.returnValue("4A0B");
            var result = gameController.gameController("1234");
            expect(result).toEqual("congratulations");
        });
        it('when call gameController with right input at second time then reture congratulations', function () {
            spyOn(makeRandom, 'makeRandom').and.returnValue("1234");
            spyOn(judgeUserInput, 'judgeUserInput').and.returnValues("0A0B","4A0B");
            gameController.gameController("5678");
            var result = gameController.gameController("1234");
            expect(result).toEqual("congratulations");
        });
        it('when call gameController with right input at sixth time then reture congratulations', function () {
            spyOn(makeRandom, 'makeRandom').and.returnValue("1234");
            spyOn(judgeUserInput, 'judgeUserInput').and.returnValues("0A0B","0A0B","0A0B","0A0B","0A0B","4A0B");
            gameController.gameController("5678");
            gameController.gameController("5678");
            gameController.gameController("5678");
            gameController.gameController("5678");
            gameController.gameController("5678");
            var result = gameController.gameController("1234");
            expect(result).toEqual("congratulations");
        });

        it('when call gameController with wrong input at sixth time then reture game over', function () {
            spyOn(makeRandom, 'makeRandom').and.returnValue("1234");
            spyOn(judgeUserInput, 'judgeUserInput').and.returnValues("0A0B","0A0B","0A0B","0A0B","0A0B","0A0B");
            gameController.gameController("5678");
            gameController.gameController("5678");
            gameController.gameController("5678");
            gameController.gameController("5678");
            gameController.gameController("5678");
            var result = gameController.gameController("5678");
            expect(result).toEqual("game over");
        });
    });
});