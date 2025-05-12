import { randomBytes, scryptSync, timingSafeEqual } from 'crypto';

/**
 * Generates a random OTP (One Time Password) code
 * @param {Object} options - OTP generation options
 * @param {('numeric'|'alphanumeric')} [options.type='numeric'] - Type of OTP to generate
 * @param {number} [options.length=6] - Length of OTP
 * @returns {string} Generated OTP code
 */
function generateOTP({ type = 'numeric', length = 6 } = {}) {
  if (type === 'numeric') {
    return Array.from(
      { length },
      () => Math.floor(Math.random() * 10)
    ).join('');
  }
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return Array.from(
    { length },
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join('');
}

/**
 * Hashes a password using scrypt
 * @param {string} password - Plain text password to hash
 * @param {number} [keyLength=64] - Length of the derived key
 * @returns {string} Hashed password (salt:hash format)
 */
function hashPassword(password, keyLength = 64) {
  const salt = randomBytes(16).toString('hex');
  const hash = scryptSync(password, salt, keyLength).toString('hex');
  return `${salt}:${hash}`;
}

/**
 * Compares a plain text password with a stored hash
 * @param {string} password - Plain text password to verify
 * @param {string} storedHash - Stored password hash to compare against (salt:hash format)
 * @returns {boolean} Whether the password matches the hash
 */
function comparePasswordHash(password, storedHash) {
  const [salt, hash] = storedHash.split(':');
  const keyLength = hash.length / 2; // Convert hex string length to bytes
  const hashBuffer = Buffer.from(hash, 'hex');
  const derivedKey = scryptSync(password, salt, keyLength);
  return timingSafeEqual(hashBuffer, derivedKey);
}

export { generateOTP, hashPassword, comparePasswordHash };