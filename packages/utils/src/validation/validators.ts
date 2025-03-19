/**
 * Validates an email address
 * @param email The email to validate
 * @returns True if the email is valid
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates a password meets minimum requirements
 * @param password The password to validate
 * @param minLength Minimum length (default: 8)
 * @returns True if the password meets requirements
 */
export function isValidPassword(password: string, minLength = 8): boolean {
  if (password.length < minLength) return false;
  
  // At least one uppercase letter
  if (!/[A-Z]/.test(password)) return false;
  
  // At least one lowercase letter
  if (!/[a-z]/.test(password)) return false;
  
  // At least one number
  if (!/[0-9]/.test(password)) return false;
  
  return true;
}
