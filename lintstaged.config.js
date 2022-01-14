module.exports = {
	'**/*.{js,jsx,ts,tsx,json,css,scss,md}': [
		'prettier --write',
		'yarn lint --fix',
	],
};
