import removeBase64Prefix from "../src/removeBase64Prefix";

describe('Base 64 prefix removal function', function () {

    it('should remove base64 prefix short and unstable GIF', function () {
        const data = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
        const expected = 'R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
        expect(removeBase64Prefix(data)).toEqual(expected);
    });

    it('should throw an exception when base64 data is undefined', function () {
        const badFn = function () {
            removeBase64Prefix()
        }
        expect(badFn).toThrow()
    })

    it('should throw an exception when base64 data is not a string', function () {
        const badFn = function () {
            removeBase64Prefix({})
        }
        expect(badFn).toThrow()
    })

    it('should throw an exception when base64 data is empty string', function () {
        const badFn = function () {
            removeBase64Prefix('')
        }
        expect(badFn).toThrow()
    })

    it('should throw an exception when base64 data is null', function () {
        const badFn = function () {
            removeBase64Prefix(null)
        }
        expect(badFn).toThrow()
    })

});
