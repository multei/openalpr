import axios from "axios";
import Debug from 'debug'
import removeBase64Prefix from "./removeBase64Prefix";
import handleErrorResponse from "./handleErrorResponse";
import handleResponse from "./handleResponse";

const debug = Debug('openalpr:openalpr')

/**
 * Create a new instance of OpenALPR
 *
 * @param instanceConfig
 * @constructor
 */
function OpenALPR(instanceConfig) {
    debug('Constructing OpenALPR instance...')
    this.defaults = instanceConfig
}

/**
 * Dispatch a recognition
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 * @return {Promise<*>}
 */
OpenALPR.prototype.recognize = async function recognize(data, config = {}) {

    if(typeof data === 'undefined') {
        throw new Error('Image base64 data is missing. Please check recognize() function call')
    }
    if(data === '' || data === null) {
        throw new Error('Image data is empty or null. Please check recognize() function call')
    }

    debug('Setting config...')
    config = {...this.defaults, ...config}

    debug('Creating axios instance with OpenALPR API data...')
    const instance = axios.create({baseURL: 'https://api.openalpr.com/v2'})

    debug('Building request URL...')
    const url = `/recognize_bytes?recognize_vehicle=1&country=br&secret_key=${config["secretKey"]}`

    try {
        debug('Removing base64 prefix (if needed)...')
        data = removeBase64Prefix(data)

        if(typeof data === "undefined") {
            throw new Error("Cannot make request to API. Image data is undefined after base64 prefix removal")
        }

        debug('Making request to OpenALPR with raw data...')
        const response = await instance.post(url, data, { headers: {'content-type': 'raw'} })

        debug('Calling response handler...')
        return handleResponse(response)
    }
    catch (error) {
        debug('Calling error handler...')
        throw handleErrorResponse(error)
    }
}

export default OpenALPR
