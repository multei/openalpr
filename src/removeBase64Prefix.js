export default function removeBase64Prefix(data) {
    if(typeof data !== "string") {
        throw new Error(`Can not recognize base64 data. This is not a valid base64 string. Got ${data}`)
    }
    if(data === '') {
        throw new Error('Can not recognize base64 data from an empty string.')
    }
    const dataSplit = data.split(',');
    return dataSplit[1];
}
