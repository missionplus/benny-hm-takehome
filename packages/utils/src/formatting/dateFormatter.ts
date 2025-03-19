/**
 * Formats a date into a readable string
 * @param date The date to format
 * @param format The format to use (default: 'short')
 * @returns Formatted date string
 */
export function formatDate(date: Date, format: 'short' | 'long' = 'short'): string {
  if (format === 'short') {
    return date.toLocaleDateString();
  }
  return date.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Formats a date to relative time (e.g., "2 days ago")
 * @param date The date to format
 * @returns Relative time string
 */
export function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInSecs = Math.floor(diffInMs / 1000);
  const diffInMins = Math.floor(diffInSecs / 60);
  const diffInHours = Math.floor(diffInMins / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInSecs < 60) {
    return 'just now';
  } else if (diffInMins < 60) {
    return `${diffInMins} minute${diffInMins > 1 ? 's' : ''} ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
  } else if (diffInDays < 30) {
    return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  } else {
    return formatDate(date);
  }
}
