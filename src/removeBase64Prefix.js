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

    debug('Returning split base64 data...')
    return dataSplit[1];
}
