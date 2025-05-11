/**
 * Get user's country code and language based on IP address
 * @typedef {Object} CountryCurrency
 * @property {string|null} code - Currency code (e.g. USD)
 * @property {string|null} symbol - Currency symbol (e.g. $)
 * @property {number|null} aDollarTo - Exchange rate to USD
 *
 * @typedef {Object} Country
 * @property {string|null} code - Two letter country code
 * @property {string|null} name - Full country name
 * @property {CountryCurrency} currency - Currency information
 * @property {boolean} isEu - Whether country is in European Union
 *
 * @typedef {Object} GeoLocation
 * @property {Country|null} country - Country information
 * @property {string|null} timezone - Timezone name
 *
 * @param {string} ip - IP address to lookup
 * @returns {Promise<GeoLocation>} Geolocation data for the IP
 */
async function getUserCountryCodeAndLanguage(ip) {
	console.log('🌐 Starting to fetch user country code and language...', { ip });

	// Get the user's browser language
	try {
		console.log('📡 Fetching geolocation data for IP:', ip);
		const req = await fetch('http://www.geoplugin.net/json.gp?ip=' + ip);

		if (!req.ok) {
			throw new Error(`HTTP error! status: ${req.status}`);
		}

		const res = await req.json();
		console.log('📥 Received raw geolocation data:', res);

		const result = {
			country: {
				code: res?.geoplugin_countryCode,
				name: res?.geoplugin_countryName,
				currency: {
					code: res?.geoplugin_currencyCode,
					symbol: res?.geoplugin_currencySymbol,
					aDollarTo: res?.geoplugin_currencyConverter
				},
				isEu: res?.geoplugin_continentCode === 'EU' || res?.geoplugin_continentName === 'Europe'
			},
			timezone: res?.geoplugin_timezone
		};

		console.log('🎉 Successfully parsed user details:', result);
		return result;
	} catch (error) {
		console.error('❌ Error while fetching geolocation data:', {
			error: error.message,
			ip,
			stack: error.stack
		});
		return {
			country: null,
			timezone: null
		};
	}
}

export { getUserCountryCodeAndLanguage };