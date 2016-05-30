describe('validateUserInput', function () {
    var validateUserInput;

    beforeEach(function () {
        validateUserInput = require("../src/validateUserInput");
    });


    describe('checkIsNumber', function () {
        it('when call validateUserInput with 1234 should return true', function () {
            var result = validateUserInput.checkIsNumber("1234");
            expect(result).toEqual(true);
        });
        it('when call validateUserInput width 123a should return false', function () {
            var result = validateUserInput.checkIsNumber("123a");
            expect(result).toEqual(false);
        });
    });

    describe('validateUserInput', function () {
        it('when call validateUserInput with right number return true', function () {
            var result = validateUserInput.validateUserInput("1234");
            expect(result).toEqual(true);
        });
        it('when call validateUserInput with wrong input should false', function () {
            var result = validateUserInput.validateUserInput("123a");
            expect(result).toEqual(false);
        });
        it('when call validateUserInput with 3 length number return false', function () {
            var result = validateUserInput.validateUserInput("123");
            expect(result).toEqual(false);
        });
        it('when call validateUserInput with repaeated number return false', function () {
            var result = validateUserInput.validateUserInput("1123");
            expect(result).toEqual(false);
        });
    });

});