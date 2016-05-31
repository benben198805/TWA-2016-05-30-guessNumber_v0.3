describe('input', function () {
    var input;
    var readLine;
    beforeEach(function () {
        input = require("../src/input");
        readLine = require('readline-sync');
    });

    describe('input', function () {
        it('when call input 1234 return 1234', function () {
            spyOn(readLine,'question').and.returnValue("1234");
            var result=input.input();
            expect(result).toEqual("1234");
        });
    });
});