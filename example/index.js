const config = require('./config')
const openALPR = require('openalpr').create(config)

const values = [null, '', 'invalid string', require('./images/valid-image')]

values.map(data => {
    openALPR.recognize(data)
        .then(r => console.log('Response', r))
        .catch(e => console.error('Error', e))
})
