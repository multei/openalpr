export default function handleErrorResponse(originalError) {

    if(typeof originalError.response === "undefined") {
        return {
            status: null,
            statusText: 'No status',
            error_code: null,
            error: 'Unknown error. Could not get error response data from OpenALPR API'
        }
    }

    const { status, statusText, data: { error_code, error } } = originalError.response;
    return { status, statusText, error_code, error }
}
