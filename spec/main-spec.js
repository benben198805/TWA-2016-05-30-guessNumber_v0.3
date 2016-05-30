describe('main', function () {
    var main;
    var gameController;

    beforeEach(function () {
        main = require("../src/main");
        gameController = require("../src/gameController");
    });

    describe('main', function () {
        it('when call main in the loop return true', function () {
            spyOn(gameController, 'gameController').and.returnValue("0A0B");
            var result = main("1234");
            var expectResult = true;
            expect(result).toBe(expectResult);
        });

        it('when game fail return false', function () {
            spyOn(gameController, 'gameController').and.returnValue("game over");
            var result = main("1234");
            var expectResult = false;
            expect(result).toBe(expectResult);
        });


        it('when game success return false', function () {
            spyOn(gameController, 'gameController').and.returnValue("congratulations");
            var result = main("1234");
            var expectResult = false;
            expect(result).toBe(expectResult);
        });
    });
});
