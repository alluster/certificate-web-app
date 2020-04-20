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
	function reformatName(y){
		return y.replace('.', ' ').replace(/(?:^|\s)\S/g, a => a.toUpperCase());
	}

	return(
		<Layout title="Profile" >
			<Container>
				<p>Profile</p>
				<h1>{reformatName(context.user.nickname)}</h1>
				<AddCertificate />
				<CertificationsList />
			</Container>
		</Layout>
	)
}
export default withLoginRequired(withAuth(Profile))
