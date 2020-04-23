import React from 'react';
import Layout from '../layouts/layout';
import Container from '../components/Container';
import Hero from '../components/Hero';



const About = () => {
	const pageTitle = "You create the best content to the web."
    const pageIngress = "No one can be sure your content is created by you! With Certify you can add a certificate to your work that ensures it’s yours. "
   

	return(
			<Layout title="About" >
				<Container>
                    <Hero title={pageTitle} ingress={pageIngress} />
				</Container>
			</Layout>
		
	)
}

export default About
