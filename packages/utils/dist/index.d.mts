/**
 * Formats a date into a readable string
 * @param date The date to format
 * @param format The format to use (default: 'short')
 * @returns Formatted date string
 */
declare function formatDate(date: Date, format?: 'short' | 'long'): string;
/**
 * Formats a date to relative time (e.g., "2 days ago")
 * @param date The date to format
 * @returns Relative time string
 */
declare function formatRelativeTime(date: Date): string;

/**
 * Validates an email address
 * @param email The email to validate
 * @returns True if the email is valid
 */
declare function isValidEmail(email: string): boolean;
/**
 * Validates a password meets minimum requirements
 * @param password The password to validate
 * @param minLength Minimum length (default: 8)
 * @returns True if the password meets requirements
 */
declare function isValidPassword(password: string, minLength?: number): boolean;

declare const HEY_AI_LINK = "https://heymax.ai";

export { HEY_AI_LINK, formatDate, formatRelativeTime, isValidEmail, isValidPassword };
