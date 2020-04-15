import React, { useContext } from 'react';
import Layout from '../layouts/layout';
import styled from 'styled-components';
import Container from '../components/Container';
import Hero from '../components/Hero';

import { AppContext } from  '../context/Context';

const SignInButton = styled.button `
	background-color: ${props => props.theme.colors.primary};
	color: white;
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

	const pageTitle = "In a world of robots and bots you cannot be sure what is real.";
    const pageIngress = "In todays web we need more assurance about the accuracy of content we consume. It might be news article or a porn clip, it is important that viewer can check the origin of your content and trace it to your certified profile in Certificate.com.";
	const heroImage= "./how-it-works.svg"
		return(
			<Layout title="Home" >
				<Container>
					<Hero title={pageTitle} ingress={pageIngress} image={heroImage}/>
					<SignInButton onClick={() => context.login({ appState: { returnTo: process.env.AUTHO_REDIRECT_URI } })} >Register Now</SignInButton>

				</Container>
			</Layout>
		)
}

export default Home
