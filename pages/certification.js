import React, { useEffect } from 'react';
import Layout from '../layouts/layout';
import Container from '../components/Container';
import { withRouter } from 'next/router';
import Certificate from '../components/Certificate';
import PropTypes from 'prop-types';

const Certification = ({router}) => {
	useEffect(() => {
	}, []);
	return(
			<Layout 
				title={router.asPath}
				// description={router.query.id}
				route={router.asPath}
			>
				<Container>
					<Certificate  id={router.query.id}/>
				</Container>
			</Layout>
		
	)
}

Certification.propTypes = {
	router: PropTypes.any
	
 };
export default withRouter(Certification);
