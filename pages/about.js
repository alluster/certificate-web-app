import React from 'react';
import Layout from '../layouts/layout';
import Container from '../components/Container';
import Hero from '../components/Hero';



const About = () => {
	
    const pageTitle = "In a world of robots and bots you cannot be sure what is real.";
    const pageIngress = "In todays web we need more assurance about the accuracy of content we consume. It might be news article or a porn clip, it is important that viewer can check the origin of your content and trace it to your certified profile in Certificate.com.";

	return(
			<Layout title="About" >
				<Container>
                    <Hero title={pageTitle} ingress={pageIngress} />
				</Container>
			</Layout>
		
	)
}

export default About
