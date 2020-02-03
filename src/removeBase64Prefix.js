export default function removeBase64Prefix(data) {
    const dataSplit = data.split(',');
    return dataSplit[1];
}
