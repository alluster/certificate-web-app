module.exports = {
	env: {
		HOST: process.env.HOST,
		AUTHO_DOMAIN: process.env.AUTHO_DOMAIN,
		AUTHO_CLIENT_ID: process.env.AUTHO_CLIENT_ID,
		AUTHO_REDIRECT_URI: process.env.AUTHO_REDIRECT_URI,
		AUTHO_RETURN_URL: process.env.AUTHO_RETURN_URL,
		DATABASE_HOST: process.env.DATABASE_HOST,
		DATABASE_USER: process.env.DATABASE_USER,
		DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
		FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
		FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
		FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
		FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
		FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
		FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
		FIREBASE_APP_ID: process.env.FIREBASE_APP_ID
	},
	webpack: config => {
		// Fixes npm packages that depend on `fs` module
		config.node = {
		fs: 'empty'
	}

	return config
  }
}