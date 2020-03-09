import React from 'react';
import Layout from '../layouts/layout';
import Container from '../components/Container';
import Hero from '../components/Hero';


const Creators = () => {
	
    const pageTitle = "Join the Creators with a certification";
    const pageIngress = "Take action and join now to certificate your work";


	return(
			<Layout title="About" >
				<Container>
                    <Hero title={pageTitle} ingress={pageIngress} />
                    <h3>Would you like to be certified as a Creator and proof your work</h3>
                    <p>We are still building our service but you can contact us for more details on how to join. info@certificate.com</p>
				</Container>
			</Layout>
		
	)
}

export default Creators
