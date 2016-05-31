describe('gameController', function () {

    var gameController;
    var judgeUserInput;
    var makeRandom;
    var validateUserInput;
    var input;

    beforeEach(function () {
        gameController = require("../src/gameController");
        judgeUserInput = require("../src/judgeUserInput");
        makeRandom = require("../src/makeRandom");
        validateUserInput = require("../src/validateUserInput");
        input = require("../src/input");
    });

    describe('beginGame', function () {
        it('when call beginGame set round and targetNumber', function () {
            spyOn(makeRandom, 'makeRandom').and.returnValue("1234");
            gameController.beginGame();
            expect(gameController.round).toEqual(0);
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
        beforeEach(function () {
            spyOn(makeRandom, 'makeRandom').and.returnValue("1234");
        });

        it('when call gameController with error input then round stay', function () {
            spyOn(validateUserInput, 'validateUserInput').and.returnValues(false, true, true);
            spyOn(judgeUserInput, 'judgeUserInput').and.returnValues("2A2B", "4A0B");
            spyOn(input, 'input').and.returnValues("123a", "5678", "1234");
            gameController.gameController();
            expect(gameController.round).toEqual(2);
            expect(gameController.targetNumber).toEqual("1234");
        });
        it('when call gameController with right input at first time then reture congratulations', function () {
            spyOn(judgeUserInput, 'judgeUserInput').and.returnValue("4A0B");
            spyOn(input, 'input').and.returnValue("1234");
            var result = gameController.gameController();
            expect(result).toEqual(true);
        });
        it('when call gameController with right input at second time then reture congratulations', function () {
            spyOn(judgeUserInput, 'judgeUserInput').and.returnValues("0A0B", "4A0B");
            spyOn(input, 'input').and.returnValue("5678", "1234");
            var result = gameController.gameController();
            expect(result).toEqual(true);
        });
        it('when call gameController with right input at sixth time then reture congratulations', function () {
            spyOn(validateUserInput, 'validateUserInput').and.returnValues(true, true, true, true, true, true);
            spyOn(judgeUserInput, 'judgeUserInput').and.returnValues("0A0B", "0A0B", "0A0B", "0A0B", "0A0B", "4A0B");
            spyOn(input, 'input').and.returnValue("5678", "5678", "5678", "5678", "5678", "1234");
            var result = gameController.gameController();
            expect(result).toEqual(true);
        });

        it('when call gameController with wrong input at sixth time then reture game over', function () {
            spyOn(judgeUserInput, 'judgeUserInput').and.returnValues("0A0B", "0A0B", "0A0B", "0A0B", "0A0B", "0A0B");
            spyOn(input, 'input').and.returnValue("5678", "5678", "5678", "5678", "5678", "5678");
            var result = gameController.gameController();
            expect(result).toEqual(false);
        });
    });
});