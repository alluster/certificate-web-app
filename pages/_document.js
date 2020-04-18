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
                <Head>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta property="og:site_name" content="Certificate Me" />
                    <link rel="icon" type="image/png" href="/favicon.ico" sizes="48x48" />
					<meta charset="UTF-8" />
					<meta name="keywords" content="Content,Certificate,Certifications,Free certification,"/>
					<meta name="author" content="Certificate me"/>
                    <link
                        href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,700"
                        rel="stylesheet"
                    />
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