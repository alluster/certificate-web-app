module.exports = {
	env: {
		HOST: 'localhost:',
		AUTHO_DOMAIN: 'dev-gasm1gv3.eu.auth0.com',
		AUTHO_CLIENT_ID: 'IZY754RrGl4qHxzQUFB1sgOXyjZZWPJC',
		AUTHO_REDIRECT_URI: 'http://localhost:3000/profile'
	},
	webpack: config => {
		// Fixes npm packages that depend on `fs` module
		config.node = {
		fs: 'empty'
	}

	return config
  }
}
