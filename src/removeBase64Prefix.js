import Debug from 'debug'

const debug = Debug('openalpr:removeBase64Prefix')

export default function removeBase64Prefix(data) {
    if(typeof data !== "string") {
        throw new Error(`Can not recognize base64 data. This is not a valid base64 string. Got ${data}`)
    }
    if(data === '') {
        throw new Error('Can not recognize base64 data from an empty string.')
    }
    debug('Splitting base64 prefix from image data...')
    const dataSplit = data.split(',');

    debug('Checking if split data contains prefix...')
    if(dataSplit.length > 1) {
        debug('Split data contains prefix: %o', dataSplit[0])
        return dataSplit[1];
    }

    debug('Returning original string (it does not have base64 prefix)')
    return dataSplit[0];

}
