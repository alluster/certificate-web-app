import React, { useContext } from 'react';
import Layout from '../layouts/layout';
import Container from '../components/Container';
import { withAuth, withLoginRequired } from 'use-auth0-hooks';
import { AppContext } from  '../context/Context'
import AddCertificate from '../components/AddCertificate';
import CertificationsList from '../components/CertificationsList';

const Profile = () => {

	const context = useContext(AppContext)  
	function reformatName(y){
		if(y === null){ return "undefined" }
		else return y.replace('.', ' ').replace(/(?:^|\s)\S/g, a => a.toUpperCase());
	}
	

	return(
		<Layout title="Profile" >
			<Container>
				<h3>Profile</h3>
				<p>Create new certificate and post it into your content in web to prove that it's yours</p>
				<h2>{reformatName(context.user.nickname)}</h2>
				<AddCertificate />
				<CertificationsList />
			</Container>
		</Layout>
	)
}
export default withLoginRequired(withAuth(Profile))
