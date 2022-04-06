module.exports = {
	webpack: (config, { isServer }) => {
		if (!isServer) {
			// don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
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
		}

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
	productionBrowserSourceMaps: true,
};
