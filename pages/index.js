import React, { useContext } from 'react';
import Layout from '../layouts/layout';
import styled from 'styled-components';
import Container from '../components/Container';
import Hero from '../components/Hero';

import { AppContext } from  '../context/Context';

const SignInButton = styled.button `
	background-color: ${props => props.theme.colors.primary};
	color: white;
	margin-left: auto;
	margin-right: auto;
	-webkit-text-fill-color: white;
	height: 40px; border-radius: 20px;
	text-align: center;
	line-height: 40px;
	font-weight: bold;
	font-size: 20px;
	padding-left: auto;
	padding-right: auto;
	margin-top: 50px;
	width: 500px;
	@media (max-width: ${props => props.theme.screenSize.tablet}) {
		width: 100%;
    }
`;
const Home = () => {
	const context = useContext(AppContext)

	const pageTitle = "We need facts more than ever!";
    const pageIngress = "When browsing the web - it's impossible to know what content is fake.";
	const heroImage= "./how-it-works.svg"
		return(
			<Layout title="Home" >
				<Container>
					<Hero title={pageTitle} ingress={pageIngress} image={heroImage}>
						<p>This is where our certificates can help. By registering and creating an certificate for your content - you can make sure that everyone know what content is created by you and what is not.</p>
						<SignInButton onClick={() => context.login({ appState: { returnTo: process.env.AUTHO_REDIRECT_URI } })} >Create a certificate</SignInButton>

					</Hero>
				</Container>
			</Layout>
		)
}

export default Home
