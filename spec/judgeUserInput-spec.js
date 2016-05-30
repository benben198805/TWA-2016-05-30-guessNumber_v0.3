describe('judgeUserInput', function () {

    var judgeUserInput;

    beforeEach(function () {
        judgeUserInput = require("../src/judgeUserInput");
    });

    describe('judgeUserInput', function () {
        it('when call judgeUserInput with 1234 to compare 1234 number return 4A0B', function () {
            var result = judgeUserInput.judgeUserInput("1234", "1234");
            expect(result).toEqual("4A0B");
        });
        it('when call judgeUserInput with 4321 to compare 1234 number return 0A4B', function () {
            var result = judgeUserInput.judgeUserInput("1234", "4321");
            expect(result).toEqual("0A4B");
        });
        it('when call judgeUserInput with 1234 to compare 5678 number return 0A0B', function () {
            var result = judgeUserInput.judgeUserInput("1234", "5678");
            expect(result).toEqual("0A0B");
        });
        it('when call judgeUserInput with 1243 to compare 1234 number return 2A2B', function () {
            var result = judgeUserInput.judgeUserInput("1234", "1243");
            expect(result).toEqual("2A2B");
        });
    });
});