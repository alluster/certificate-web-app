module.exports = {
	env: {
				HOST: process.env.HOST,
				AUTHO_DOMAIN: process.env.AUTHO_DOMAIN,
				AUTHO_CLIENT_ID: process.env.AUTHO_CLIENT_ID,
        		AUTHO_REDIRECT_URI: process.env.AUTHO_REDIRECT_URI,
				AUTHO_RETURN_URL: process.env.AUTHO_RETURN_URL,
				DATABASE_HOST: process.env.DATABASE_HOST,
				DATABASE_USER: process.env.DATABASE_USER,
				DATABASE_PASSWORD: process.env.DATABASE_PASSWORD
	},
	webpack: config => {
		// Fixes npm packages that depend on `fs` module
		config.node = {
		fs: 'empty'
	}

	return config
  }
}