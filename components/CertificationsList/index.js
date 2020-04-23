import React, { useContext, useEffect } from 'react';
import { AppContext } from  '../../context/Context';
import Accordion from '../Accordion';

const CertificationsList = () => {
	const context = useContext(AppContext)
	const sub = context.user.sub;
	const listItems = context.userCertifications.reverse().map((cert, i) =>
		<Accordion key={i} description={cert.description} id={cert.id} url={cert.url} date={cert.date} owner={cert.owner} username={cert.username} />
	);

	useEffect(() => {
		context.GetCertifications(sub)
		
	}, []);

	return(
		<div>
			{
				context.userCertifications ? listItems : <p>Loading</p>
			}
		</div>
		
    )	
}
	

export default CertificationsList;
