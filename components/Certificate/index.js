import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../context/Context';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';


const Button = styled.button`
	background-color: ${props => props.theme.colors.primary};
	color: white;
	-webkit-text-fill-color: white;
	height: 40px; border-radius: 20px;
	text-align: center;
	line-height: 40px;
	font-weight: bold;
	font-size: 20px;
	padding-left: auto;
	padding-right: auto;
	margin-top: 50px;
	width: 500px;
	:hover {
		cursor: pointer
	}
	@media (max-width: ${props => props.theme.screenSize.tablet}) {
		width: 100%;
	}
`;
const Certificate = (props, router) => {
	const context = useContext(AppContext);
	const [ copyMessage, setCopyMessage ] = useState()
	const data = props.cert
	const CertificationUrl = process.env.AUTHO_RETURN_URL + router.asPath

	const CopyMessage = () => {
		setCopyMessage("Certification copied. Go to your publication and paste certification there") 
		setTimeout(() => {
			setCopyMessage("")  
		}, 4000)
	}



	useEffect(() => {
		context.LoadingContent()
	}, []);

	return(
			<div>
		
				{
					data ? 
					<div>
						<h1>Content Certificate</h1>
						<p>Certificate id: {data.id || "-" }</p> 
						<p>Creation date: {data.date || "-" }</p>
						<p>Owner id: {data.owner || "-" }</p>  
						<p>Certificate name: {data.name || "-" }</p> 
						<p>Certificate url to content: {data.url || "-" }</p>
						<h3>
							{copyMessage}
						</h3>
						<CopyToClipboard text={CertificationUrl}
							onCopy={() => CopyMessage()}
						>
							<Button>Copy Certification</Button>
						</CopyToClipboard>
					</div>
					: 
					<h3>{context.loadingMessage}</h3>
				}	
			</div>
	)
}
Certificate.propTypes = {
	id: PropTypes.string,
	router: PropTypes.any,
	cert: PropTypes.any
	
 };	



export default withRouter(Certificate);
