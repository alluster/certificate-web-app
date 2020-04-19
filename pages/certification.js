import React, { useEffect } from 'react';
import Layout from '../layouts/layout';
import Container from '../components/Container';
import { withRouter } from 'next/router';
import Certificate from '../components/Certificate';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';

const Certification = (props, router) => {
	useEffect(() => {
	}, []);
	return(
			<Layout 
				title={router.asPath}
				// description={router.query.id}
				route={router.asPath}
			>
			
				<Container>
					<Certificate cert={props.certification}/>
				</Container>
			</Layout>		
	)
}

Certification.propTypes = {
	router: PropTypes.any
	
 };
 Certification.getInitialProps = async function(router) {
	const res = await fetch(`${process.env.AUTHO_RETURN_URL}/getcertification/${router.query.id}`)
	const data = await res.json()
	return {
		certification: data[0]
	}
  };
export default withRouter(Certification);
