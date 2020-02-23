import axios from "axios";
import removeBase64Prefix from "./removeBase64Prefix";
import handleErrorResponse from "./handleErrorResponse";
import handleResponse from "./handleResponse";

/**
 * Create a new instance of OpenALPR
 *
 * @param instanceConfig
 * @constructor
 */
function OpenALPR(instanceConfig) {
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
    config = {...this.defaults, ...config}
    const instance = axios.create({baseURL: 'https://api.openalpr.com/v2'})
    const url = `/recognize_bytes?recognize_vehicle=1&country=br&secret_key=${config["secretKey"]}`
    try {
        data = removeBase64Prefix(data)
        const response = await instance.post(url, data, { headers: {'content-type': 'raw'} })
        return handleResponse(response)
    }
    catch (error) {
        return handleErrorResponse(error)
    }
}

export default OpenALPR
