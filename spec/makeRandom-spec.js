describe('makeRandom', function () {
    var makeRandom;

    beforeEach(function () {
        makeRandom = require("../src/makeRandom");
    });

    describe('checkRepeat', function () {
        it('when given a no repaeted numeber should return true', function () {
            var result = makeRandom.checkRepeat("1234");
            var expectResult = true;
            expect(result).toBe(expectResult);
        });
        it('when given a repaeted numeber should return false', function () {
            var result = makeRandom.checkRepeat("1134");
            var expectResult = false;
            expect(result).toBe(expectResult);
        });
    });

    describe('makeRandom', function () {
        it('when call makeRandom should return number', function () {
            var result = makeRandom.makeRandom();
            expect(parseInt(result)).toEqual(jasmine.any(Number));
        });
        it('when call makeRandom should return 4 length result', function () {
            var result = makeRandom.makeRandom();
            expect(result.length).toBe(4);
        });
    });
});
