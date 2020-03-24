import App from 'next/app';
import Provider from '../context/Provider';
import React from 'react';
import { Auth0Provider } from 'use-auth0-hooks';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
		<Auth0Provider
			domain={`${process.env.AUTHO_DOMAIN}`}
			clientId={`${process.env.AUTHO_CLIENT_ID}`}
			redirectUri={`${process.env.AUTHO_REDIRECT_URI}`}
		>
			<Provider>
				<Component {...pageProps} />
			</Provider>
		</Auth0Provider>
    );
  }
}

export default MyApp;