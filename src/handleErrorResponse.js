import Debug from 'debug'

const debug = Debug('openalpr:handler:error')

export default function handleErrorResponse(error) {
    debug('Handling error response...')
    if(typeof error.response !== "undefined") {
        debug('Request made, server responded with error status code')
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        const { data, status, headers } = error.response
        return { data, status, headers }
    }
    if(typeof error.request !== "undefined") {
        debug('Request made but no response received')
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        return error.request
    }
    if(typeof error.message !== "undefined") {
        debug('Request not made. Found error %o', error.message)
        // Something happened in setting up the request and triggered an Error
        return error.message
    }
    debug('Unknown error found: %o', error)
    return error;
}
