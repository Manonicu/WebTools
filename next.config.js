module.exports = {
	webpack: (config) => {
		config.resolve.fallback = {
			fs: false,
			process: false,
			os: false,
			path: false,
			buffer: false,
			http: false,
			https: false,
			querystring: false,
		};

		return config;
	},
	reactStrictMode: true,
	images: {
		loader: 'custom',
		domains: ['cdn.jsdelivr.net'],
	},
	compiler: {
		styledComponents: true,
	},
};
