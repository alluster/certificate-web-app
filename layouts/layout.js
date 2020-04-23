import React from 'react';
import styled from 'styled-components';
import Head from '../components//head';
import { createGlobalStyle } from "styled-components";
import TopNavigation from '../components/TopNavigation';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import theme from "../theme";
import { ThemeProvider } from 'styled-components';
import BurgerMenu from '../components/BurgerMenu';

const GlobalStyle = createGlobalStyle`
    body, html {
        margin: 0px;
        padding: 0px;
        max-width: 100%;
        color: white;
        height: 100%;
		font-family: "Montserrat", Arial, sans-serif;
		font-display: swap;
    }
    h1 {
        margin-top: 0.3em; 
        margin-bottom: 0.3em;
        margin-left: 0;
        margin-right: 0;
    }
    h2 {
        margin-top: 0.3em; 
        margin-bottom: 0.3em;
        margin-left: 0;
        margin-right: 0;
    }
    h3 {
        margin-top: 0.3em; 
        margin-bottom: 0.3em;
        margin-left: 0;
        margin-right: 0;
    }
    h4 {
        margin-top: 0.3em; 
        margin-bottom: 0.3em;
        margin-left: 0;
        margin-right: 0;
    }
    h5 {
        margin-top: 0.3em; 
        margin-bottom: 0.3em;
        margin-left: 0;
        margin-right: 0;
    }
    h6 {
        margin-top: 0.3em; 
        margin-bottom: 0.3em;
        margin-left: 0;
        margin-right: 0;
    }
    img {
        max-width: 100%;
    }
    a {
        all: unset;
    }
    a:link {
        all: unset;
    }
    a:focus {
        all: unset;
    }
    a:active {
        all: unset;
    }
    a:visited {
        all: unset;
    }
    a:hover {
        all: unset;
    }
    button {
        all: unset;
	}




    input {
        all: unset;
        ::-webkit-input-placeholder {
    }
    :-moz-placeholder {
        /* FF 4-18 */
        opacity: 1;
    }
    ::-moz-placeholder {
        /* FF 19+ */
        opacity: 1;
    }
    :-ms-input-placeholder {
        /* IE 10+ */
    }
    ::-ms-input-placeholder {
        /* Microsoft Edge */
    }
    ::placeholder {
        /* modern browser */
    }
    }
    
`;

const Background = styled.div `
	background-color: ${props => props.theme.colors.persBlue}


`
const Burger = styled(BurgerMenu)`
    display: none;
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
        display: inline-block
     }


`
const Nav = styled(TopNavigation)`
    display: inline-block;
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
        display: none
     }

`


const Layout = ({title, description, route, children}) => {
    return(
            <ThemeProvider theme={theme}>
            <Background>
				<Head 
					title={title}
					description={description}
					route={route}
				>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta property="og:site_name" content="Certify" />
                    <link rel="icon" type="image/png" href="/favicon.ico" sizes="48x48" />
					<meta charset="UTF-8" />
					<meta name="keywords" content="Content,Certificate,Certifications,Free certification,"/>
					<meta name="author" content="Certify"/>
                    <link
                        href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,700"
                        rel="stylesheet"
                    />


				</Head>
					
				
                       
             
                <header>
                    
                    <Nav />
                    <Burger />

                </header>
                <GlobalStyle />
                { children }
                <Footer />

            </Background>
               
            </ThemeProvider>

        );
}
    
Layout.propTypes = {
	children: PropTypes.object,
	title: PropTypes.string,
	description: PropTypes.string,
	route: PropTypes.string
}
    

export default Layout;