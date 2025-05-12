import { UAParser } from 'ua-parser-js';

/**
 * @typedef {Object} UAResults
 * @property {import('ua-parser-js').IResult['browser']} browser - Browser information
 * @property {import('ua-parser-js').IResult['os']} os - Operating system information
 * @property {import('ua-parser-js').IResult['device']} device - Device information
 * @property {import('ua-parser-js').IResult['cpu']} cpu - CPU information
 * @property {import('ua-parser-js').IResult['engine']} engine - Browser engine information
 */

/**
 * Parses the user agent string and returns the device information.
 * @param {string} uaString - The user agent string.
 * @returns {UAResults} - The device information.
 */
const getDeviceInfo = (uaString) => {
    const parser = new UAParser(uaString);
    const results = parser.getResult();
    return {
        browser: results.browser,
        os: results.os,
        device: results.device,
        cpu: results.cpu,
        engine: results.engine,
    };
};

export { getDeviceInfo };