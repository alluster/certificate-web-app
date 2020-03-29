import React from 'react';
import Layout from '../layouts/layout';
import Container from '../components/Container';
import Hero from '../components/Hero';
import Accordion from '../components/Accordion';

const Home = () => {
	const pageTitle = "In a world of robots and bots you cannot be sure what is real.";
    const pageIngress = "In todays web we need more assurance about the accuracy of content we consume. It might be news article or a porn clip, it is important that viewer can check the origin of your content and trace it to your certified profile in Certificate.com.";
	const heroImage= "./how-it-works.svg"
		return(
			<Layout title="Home" >
				<Container>
					<Hero title={pageTitle} ingress={pageIngress} image={heroImage}/>
					<Accordion />
				</Container>
			</Layout>
		)
}

export default Home
