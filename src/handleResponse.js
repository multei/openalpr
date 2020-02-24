import Debug from 'debug'
const debug = Debug('openalpr:handler:response')

export default function handleResponse(response) {
    debug('Returning response data...')
    return response.data
}
