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
				title={router.query.id}
				description={router.query.id}
				route={'certification/' + router.query.id}
			>
				<Container>
					<Certificate id={router.query.id}/>
				</Container>
			</Layout>
		
	)
}

export default Certification;
