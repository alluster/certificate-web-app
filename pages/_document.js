import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import React from 'react';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const page = ctx.renderPage(App => props => sheet.collectStyles(<App {...props} />));
        const styleTags = sheet.getStyleElement();

        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps, ...page, styleTags };
    }

    render() {
        return (
            <html lang="en">
                <Head >
					{this.props.styleTags}
				</Head>
                <body>
                    <Main />
                    <NextScript />
					<script src="https://www.gstatic.com/firebasejs/7.14.0/firebase-app.js"></script>
                </body>
            </html>
        );
    }
}


export default MyDocument;