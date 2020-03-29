import React from 'react';
import Layout from '../layouts/layout';
import Container from '../components/Container';
import Hero from '../components/Hero';



const About = () => {
	const pageTitle = "You create the best content to the web."
    const pageIngress = "Someone checking it out cannot be sure your content is created by You! With CertificateMe you can add a tag to your work that ensures it’s yours. "
   

	return(
			<Layout title="About" >
				<Container>
                    <Hero title={pageTitle} ingress={pageIngress} />
				</Container>
			</Layout>
		
	)
}

export default About
