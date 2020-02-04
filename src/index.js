import OpenALPR from "./OpenALPR";
import defaults from "./defaults";

/**
 * Create an instance of OpenALPR
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {OpenALPR} A new instance of OpenALPR
 */
function createInstance(instanceConfig = defaults) {
    return new OpenALPR(instanceConfig);
}

/**
 * Create the default instance to be exported
 */
const openALPR = createInstance(defaults);

/**
 * Expose OpenALPR class to allow class inheritance
 *
 * @type {OpenALPR}
 */
openALPR.OpenALPR = OpenALPR

/**
 * Factory for creating new instances
 *
 * @param {Object} instanceConfig
 * @return {OpenALPR}
 */
openALPR.create = function create(instanceConfig) {
    return createInstance({...defaults, ...instanceConfig})
}

/**
 * Allow use of default import syntax
 */
export default openALPR
