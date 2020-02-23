const config = require('./config')
const openALPR = require('openalpr').create(config)

openALPR.recognize(require('./images/valid-image'))
    .then(r => console.log('Response', r))
    .catch(e => console.error('Error', e))

openALPR.recognize('invalid string')
    .then(r => console.log('Response', r))
    .catch(e => console.error('Error', e))
