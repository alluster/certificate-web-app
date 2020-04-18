import React, { useEffect } from 'react';
import Layout from '../layouts/layout';
import Container from '../components/Container';
import { useRouter } from 'next/router';
import Certificate from '../components/Certificate';

const Certification = () => {
	const router = useRouter();

	useEffect(() => {
	}, []);

	return(
			<Layout 
				title="Hello world"
				description={`This is a certification for ${router.query.id}`}
				route={'certificate/' + router.query.id}
			>
				<Container>
					<Certificate id={router.query.id}/>
				</Container>
			</Layout>
		
	)
}

export default Certification;
