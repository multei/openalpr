import handleErrorResponse from "./handleErrorResponse";

describe('Error handler', function () {
    it('should return error correctly', function () {
        expect(handleErrorResponse({})).toEqual({})
    })
})
