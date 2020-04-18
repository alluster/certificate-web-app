import React from 'react';
import NextHead from 'next/head';
import { string } from 'prop-types';

const fallbackRoute = '/';
const SITE_URL = 'https://certificate-me.herokuapp.com';
const fallbackOgImage = SITE_URL + '/fallbackOgImage.jpg';
const metaDescription = 'Certificate your content in web';

const Head = ({ title, ogImage, route, description }) => {
    route = route || fallbackRoute;
    if (!route.startsWith('/')) {
        route = '/' + route;
    }

    return (
        <NextHead>
            <title>{title ? title : 'Certificate me'}</title>
            <meta property="og:url" content={SITE_URL + route} />
            <meta property="og:title" content={title} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={ogImage || fallbackOgImage} />
            <meta property="og:description" content={description || metaDescription} />
            <meta name="description" content={description || metaDescription} />

			
        </NextHead>
    );
};

Head.propTypes = {
	title: string,
	route: string,
    description: string,
    url: string,
    ogImage: string
};

export default Head;
