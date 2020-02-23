import handleErrorResponse from "./handleErrorResponse";

describe('Error handler', function () {

    it('return data, status and headers when server respond', function () {
        const error = {
            response: {
                data: {},
                headers: {},
                status: 400
            }
        }
        const actual = handleErrorResponse(error)
        expect(actual.data).toEqual({})
        expect(actual.headers).toEqual({})
        expect(actual.status).toEqual(400)
    })

    it('return request data when server does not respond', function () {
        const error = {
            request: {}
        }
        const actual = handleErrorResponse(error)
        expect(actual).toEqual({})
    })

    it('return error message when request was not made', function() {
        const error = {
            message: ''
        }
        const actual = handleErrorResponse(error)
        expect(actual).toEqual('')
    })

    it('return the same error message for uncovered cases', function () {
        expect(handleErrorResponse({})).toEqual({})
    })

})
