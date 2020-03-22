import React, { useContext } from 'react';
import Layout from '../layouts/layout';
import Container from '../components/Container';
import Hero from '../components/Hero';
import { AppContext } from '../context/Context';
import { useRouter } from 'next/router';
import { withAuth, withLoginRequired } from 'use-auth0-hooks';

const Profile = () => {
    const router = useRouter();

    const context = useContext(AppContext)
	const pageTitle = "User Profile"
    const pageIngress = "Welcome to Certify.me service"
	return(
			<Layout title="Profile" >
				<Container>
                    <Hero title={pageTitle} ingress={pageIngress}/>
				</Container>
			</Layout>
		
	)
}

export default withLoginRequired(withAuth(Profile))
