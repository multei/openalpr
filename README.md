# OpenALPR JavaScript SDK Documentation

[![codecov](https://codecov.io/gh/multei/openalpr/branch/master/graph/badge.svg)](https://codecov.io/gh/multei/openalpr)

`openalpr` is a JS way to recognize license plates and vehicles using OpenALPR API.

You can add `openalpr` to your Node.js (including Express) and web (including React) projects.

### Get started

This quick start is intended for intermediate to advanced developers.

### 1. Install the openalpr dependency

```shell
npm install openalpr
```

The above command installs **openalpr** locally on your project.

#### Explore our Node.js example

```shell
cd example
npm start
```

You will find some outputs on Terminal.

### 2. Import or require `openalpr`

```js
// ES6 import
import openALPR from 'openalpr'

// RequireJS import
const openALPR = require('openalpr')
```

### 3. Create a configuration

We recommend that you create a separate file for the `openalpr` config.
The `config` must be an object with the `secretKey` property, like this:

#### Basics

```js
/**
 * @type {{secretKey: string}}
 */
const config = {
    secretKey: 'sk_123a4bc56d78e901fa2b3c45' // This is a non-functional key just for this example.
}

// ES6 export
export default config

// RequireJS export
module.exports = config
```

Replace `secretKey` by your CarCheck API Credential (get yours on https://cloud.openalpr.com/cloudapi/).

#### Make config file more secure

The example above showed just how the configuration should be created.

However, ideally, keys should not be stored in repository files.

Therefore, we recommend that you use the environment variables for this.

```js
/**
 * @type {{secretKey: string}}
 */
const config = {
    secretKey: process.env.OPENALPR_SECRET_KEY
}

// ES6 export
export default config

// RequireJS export
module.exports = config
```

##### Trouble with getting env variables?

On development environments or some projects, maybe you'll need to install [dotenv](https://www.npmjs.com/package/dotenv) dependency to get env values. We recommend version `8.2.0` or higher.

```js
npm install --save --save-exact dotenv
```

And then, create (or update) your `.env` or `.env.development` file with this:

```env
OPENALPR_SECRET_KEY=sk_123a4bc56d78e901fa2b3c45
```

### 4. Create an instance

After importing (or requiring) `openalpr`, you can create an instance with the `config` we created before.

#### ES6 way

```js
import config from './config'
import openALPR from 'openalpr'

const instance = openALPR.create(config)
```

#### RequireJS way

```js
const config = require('./config')
const openALPR = require('openalpr')

const instance = openALPR.create(config)
```

### 5. Use recognition service

#### With blob images from browser Files API

Currently, we support direct recognition only of base64 image files.
If you are working with file inputs on HTML forms, you can use `toBase64()` and encode these images before.

##### Promise.then

```js
// ES6 way
import toBase64 from 'openalpr/dist/toBase64'

// RequireJS way
const toBase64 = require('openalpr/dist/toBase64')

function foo() {

    const handleResult = result => {
        // @todo recognize result
    }
    const handleError = error => {
        console.error(error)
    }
    
    toBase64(file).then(handleResult).catch(handleError)

}
```

##### With try/catch

```js
// ES6 way
import toBase64 from 'openalpr/dist/toBase64'

// RequireJS way
const toBase64 = require('openalpr/dist/toBase64')

async function foo() {

    let result;

    try {
       const result = await toBase64(file);
        // @todo recognize result
    }
    catch (error) {
       console.error(error)
    }

}
```

#### With base64 strings

Let's suppose that we have some JPEG data encoded with base64:

```js
const imageData = 'data:image/jpeg;base64,ABCDEFGIHJKLMNOPQRSTUVWXY/Z'
```

You can call `recognize` method from `openalpr`, which returns a `Promise`:

```
instance.recognize(data)
  .then(r => console.log('Response', r))
  .catch(e => console.error('Error', e))
})
```

##### Successful response

If image base64 data is valid, and your secret key too, you will find a JSON with recognition results, like this:

```js
Response {
  uuid: '',
  data_type: 'alpr_results',
  epoch_time: 1584024229747,
  processing_time: {
    total: 785.0690000004761,
    plates: 63.24161911010742,
    vehicles: 71.50000000001455
  },
  img_height: 683,
  img_width: 1024,
  results: [
    {
      plate: 'ABC1234',
      confidence: 85.76541900634766,
      region_confidence: 0,
      vehicle_region: [Object],
      region: '',
      plate_index: 0,
      processing_time_ms: 19.37890625,
      candidates: [Array],
      coordinates: [Array],
      vehicle: [Object],
      matches_template: 1,
      requested_topn: 10
    }
  ],
  credits_monthly_used: 1,
  version: 2,
  credits_monthly_total: 2000,
  error: false,
  regions_of_interest: [ { y: 0, x: 0, height: 683, width: 1024 } ],
  credit_cost: 1
}
```

##### Error responses

Otherwise, you can find errors like `Image data is empty or null. Please check recognize() function call`.

Or even:

```js
{
  data: {
    error_code: 400,
    error: 'Unable to base64 decode image_bytes body'
  },
  status: 400,
  headers: {
    // ...
  }
}
```

In this case, check your secret key and base64 image content.

## Start contributing

Visit our [code of conduct](https://github.com/multei/.github/blob/master/CODE_OF_CONDUCT.md).
