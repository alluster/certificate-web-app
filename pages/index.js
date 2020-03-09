import React, { useContext } from 'react';
import Layout from '../layouts/layout';
import Container from '../components/Container';
import EmailForm from '../components/EmailForm';
import Hero from '../components/Hero';
import { AppContext } from '../context/Context';
const Home = () => {
    const context = useContext(AppContext)
	const pageTitle = "You create the best content to the web."
    const pageIngress = "Someone checking it out cannot be sure your content is created by a You! With CertificateMe you can add a tag to your work that ensures it’s yours. "
	return(
			<Layout title="Home" >
				<Container>
                    <Hero title={pageTitle} ingress={pageIngress}/>
				</Container>
			</Layout>
		
	)
}

export default Home
