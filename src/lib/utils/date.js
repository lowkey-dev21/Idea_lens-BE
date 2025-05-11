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

export { adjustDate };