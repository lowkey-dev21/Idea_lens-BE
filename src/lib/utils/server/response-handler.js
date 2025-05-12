import { json } from "@sveltejs/kit";

/**
 * Creates a standardized response object for internal method responses
 * 
 * @param {boolean} status - Success or Failure
 * @param {number} code - Internal response code
 * @param {string} message - Response message
 * @param {...any} data - Optional response payload
 * @returns {{status: boolean, code: number, message: string, data?: any}} Response object
 */
const methodResponse = (status, code, message, ...data) => {
  return {
    status,
    code,
    message,
    data: data.length === 1 ? data[0] : data.length > 1 ? data : undefined,
  };
};

/**
 * Creates a standardized JSON response for API endpoints
 * 
 * @param {boolean} status - Success or Failure
 * @param {number} code - Internal response code
 * @param {string} message - Response message
 * @param {...any} data - Optional response payload
 * @returns {Response} JSON response object
 */
const endpointResponse = (status, code, message, ...data) => {
  return json({
    status,
    code,
    message,
    data: data.length === 1 ? data[0] : data.length > 1 ? data : undefined,
  });
};

/**
 * Default unauthorized response object
 * @type {{status: boolean, code: number, message: string}}
 */
const UNAUTHORIZED = {
    status: false,
    code: 401,
    message: 'Unauthorized access'
};


export { methodResponse, endpointResponse, UNAUTHORIZED };