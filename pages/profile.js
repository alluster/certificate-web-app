import React, { useContext } from 'react';
import Layout from '../layouts/layout';
import Container from '../components/Container';
import Hero from '../components/Hero';
import { withAuth, withLoginRequired } from 'use-auth0-hooks';
import { AppContext } from  '../context/Context'
import AddCertificate from '../components/AddCertificate';
import CertificationsList from '../components/CertificationsList';

const Profile = () => {

	const context = useContext(AppContext)  
	const pageIngress = "Welcome to Certify.me service"

	
	return(
		<Layout title="Profile" >
			<Container>
				<Hero title={context.user.nickname} ingress={pageIngress}/>
				<AddCertificate />
				<CertificationsList />
			</Container>
		</Layout>
	)
}
export default withLoginRequired(withAuth(Profile))
