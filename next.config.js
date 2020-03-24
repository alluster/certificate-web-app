module.exports = {
	env: {
		HOST: process.env.HOST,
		AUTHO_DOMAIN: process.env.AUTHO_DOMAIN,
		AUTHO_CLIENT_ID: process.env.AUTHO_CLIENT_ID,
        AUTHO_REDIRECT_URI: process.env.AUTHO_REDIRECT_URI,
        AUTHO_RETURN_URL: process.env.AUTHO_RETURN_URL
	},
	webpack: config => {
		// Fixes npm packages that depend on `fs` module
		config.node = {
		fs: 'empty'
	}

	return config
  }
}