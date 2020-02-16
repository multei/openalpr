import handleErrorResponse from "./handleErrorResponse";

describe('Error handler', function () {

    const expectedKeys = ['status', 'statusText', 'error_code', 'error'];

    it.each(expectedKeys)('should have %p key even when original error response is empty', key => {
        expect(handleErrorResponse({})[key]).toBeDefined()
    })

    it('should return correct error code from original error response', () => {
        const originalError = {response: {data: {error_code: 400}}};
        expect(handleErrorResponse(originalError).error_code).toEqual(400)
    })

})
