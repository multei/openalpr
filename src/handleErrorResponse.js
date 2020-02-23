export default function handleErrorResponse(error) {
    if(typeof error.response !== "undefined") {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        const { data, status, headers } = error.response
        return { data, status, headers }
    }
    if(typeof error.request !== "undefined") {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        return error.request
    }
    if(typeof error.message !== "undefined") {
        // Something happened in setting up the request and triggered an Error
        return error.message
    }
    return error;
}
