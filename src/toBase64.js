import Debug from 'debug'

const debug = Debug('openalpr:toBase64')

export default function toBase64(file) { return new Promise(((resolve, reject) => {
    debug('Creating a new file reader...')
    const reader = new FileReader()

    debug('Reading file as data URL...')
    reader.readAsDataURL(file)

    debug('Setting an onload event listener...')
    reader.onload = () => resolve(reader.result)

    debug('Setting an onerror event listener...')
    reader.onerror = error => reject(error)
})) }
