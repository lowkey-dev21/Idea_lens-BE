import { validatePassword as valP } from 'multiform-validator';
import { methodResponse } from './response-handler';

/**
 * Validates a password against specified criteria
 * 
 * @param {string} password - The password to validate
 * @returns {{status: boolean, code: number, message: string, data?: any}} Validation result
 */
const validatePassword = (password) => {
    const { isValid, errorMsg } = valP(password, {
        minLength: 8,
        maxLength: 128,
        options: {
            requireNumber: true,
            requireUppercase: true,
            requireSpecialChar: true,
            requireString: true,
        }
    });
    if (!isValid) {
        return methodResponse(false, 400, errorMsg);
    }
    return methodResponse(true, 200, 'Password is valid');
}

export { validatePassword };