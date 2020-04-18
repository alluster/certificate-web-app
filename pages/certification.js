import React, { useEffect } from 'react';
import Layout from '../layouts/layout';
import Container from '../components/Container';
import { useRouter } from 'next/router';
import Certificate from '../components/Certificate';

const Certification = () => {
	const router = useRouter()
	useEffect(() => {
		console.log(router)
	}, []);

	return(
			<Layout 
				title={router.asPath}
				// description={router.query.id}
				route={router.asPath}
			>
				<Container>
					<Certificate id={router.query.id}/>
				</Container>
			</Layout>
		
	)
}

export default Certification;
