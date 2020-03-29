import React from 'react';
import Layout from '../layouts/layout';
import Container from '../components/Container';
import Hero from '../components/Hero';
import Accordion from '../components/Accordion';
import { withAuth, withLoginRequired } from 'use-auth0-hooks';

const Profile = () => {

	const pageTitle = "User Profile"
    const pageIngress = "Welcome to Certify.me service"
	return(
			<Layout title="Profile" >
				<Container>
                    <Hero title={pageTitle} ingress={pageIngress}/>
					<Accordion />
				</Container>
			</Layout>
		
	)
}

export default withLoginRequired(withAuth(Profile))
