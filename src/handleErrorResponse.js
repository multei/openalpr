export default function handleErrorResponse(error) {
    const { status, statusText, data } = error.response;
    return { status, statusText, error_code: data.error_code, error: data.error }
}
