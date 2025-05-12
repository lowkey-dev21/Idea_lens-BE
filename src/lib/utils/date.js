/**
 * Adjusts a date by adding or subtracting specified time units
 * @param {Object[]} adjustments - Array of time adjustments to make
 * @param {('millisecond'|'second'|'minute'|'hour'|'day'|'week'|'month'|'year')} adjustments[].unit - Time unit to adjust
 * @param {number} adjustments[].value - Amount to adjust (positive to add, negative to subtract)
 * @param {Date} [baseDate=new Date()] - Optional base date to adjust from (defaults to current date/time)
 * @returns {Date} New adjusted date
 */
function adjustDate(adjustments, baseDate = new Date()) {
	// Create new date object to avoid modifying original
	const newDate = new Date(baseDate);

	// Process each adjustment
	adjustments.forEach(({ unit, value }) => {
		switch (unit.toLowerCase()) {
			case 'millisecond':
				newDate.setMilliseconds(newDate.getMilliseconds() + value);
				break;
			case 'second':
				newDate.setSeconds(newDate.getSeconds() + value);
				break;
			case 'minute':
				newDate.setMinutes(newDate.getMinutes() + value);
				break;
			case 'hour':
				newDate.setHours(newDate.getHours() + value);
				break;
			case 'day':
				newDate.setDate(newDate.getDate() + value);
				break;
			case 'week':
				newDate.setDate(newDate.getDate() + value * 7);
				break;
			case 'month':
				newDate.setMonth(newDate.getMonth() + value);
				break;
			case 'year':
				newDate.setFullYear(newDate.getFullYear() + value);
				break;
			default:
				throw new Error(`Invalid time unit: ${unit}`);
		}
	});

	return newDate;
}

/**
 * Formats a date into a human readable string
 * @param {Date|string|number} date - Date to format (Date object, ISO string, or timestamp)
 * @param {Object} [options] - Formatting options
 * @param {boolean} [options.includeTime=false] - Whether to include the time in the output
 * @param {boolean} [options.relative=false] - Whether to return a relative time string (e.g. "2 hours ago")
 * @param {string} [options.locale='en-US'] - Locale to use for formatting
 * @returns {string} Formatted date string
 */
function formatDate(date, options = {}) {
	const {
		includeTime = false,
		relative = false,
		locale = 'en-US'
	} = options;

	// Convert input to Date object if needed
	const dateObj = date instanceof Date ? date : new Date(date);

	// Return 'Invalid Date' if date is invalid
	if (isNaN(dateObj.getTime())) {
		return 'Invalid Date';
	}

	if (relative) {
		const now = new Date();
		const diffMs = Number(now) - Number(dateObj);
		const diffSecs = Math.floor(diffMs / 1000);
		const diffMins = Math.floor(diffSecs / 60);
		const diffHours = Math.floor(diffMins / 60);
		const diffDays = Math.floor(diffHours / 24);
		const diffMonths = Math.floor(diffDays / 30);
		const diffYears = Math.floor(diffDays / 365);

		if (diffSecs < 60) return 'just now';
		if (diffMins < 60) return `${diffMins} minute${diffMins !== 1 ? 's' : ''} ago`;
		if (diffHours < 24) return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
		if (diffDays < 30) return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
		if (diffMonths < 12) return `${diffMonths} month${diffMonths !== 1 ? 's' : ''} ago`;
		return `${diffYears} year${diffYears !== 1 ? 's' : ''} ago`;
	}

	const dateFormatter = new Intl.DateTimeFormat(locale, {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: includeTime ? 'numeric' : undefined,
		minute: includeTime ? 'numeric' : undefined,
		hour12: includeTime
	});

	return dateFormatter.format(dateObj);
}

export { adjustDate, formatDate };