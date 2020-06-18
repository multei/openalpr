import Debug from 'debug'
import OpenALPR from "./index";

const debug = Debug('openalpr:express-middleware')

module.exports = (fileIndex, secretKey) => async (req, res, next) => {

  debug('Entered OpenALPR middleware...')

  if(typeof secretKey === 'undefined') {
    throw new Error('Can not call OpenALPR API. Secret key is missing.')
  }

  const openALPR = OpenALPR.create({ secretKey });

  const handleRecognition = result => {

    debug('Recognition result: %o', result)

    if(result.status === 400) {
      throw new Error('Can not recognize data from image. OpenALPR returned 400')
    }

    debug('Success recognizing vehicle!');
    req.recognitionData = req.recognitionData || {};

    req.recognitionData[fileIndex] = result;

  };

  try {
    const encoded = req.files[fileIndex][0].buffer.toString('base64')
    debug('Generating encoded base64 file')

    debug('Starting vehicle recognition')
    const result = await openALPR.recognize(encoded);

    debug('Starting to handle recognition...')
    handleRecognition(result);

    next()

  } catch(err) {
    debug('Vehicle recognition failed')
    next(err)
  }

}
