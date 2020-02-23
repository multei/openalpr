const debug = require('debug')('openalpr:handler')

export default function handleResponse(response) {
    debug('Returning response data...')
    return response.data
}
