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
				</Container>
			</Layout>
		
	)
}

export default Creators
