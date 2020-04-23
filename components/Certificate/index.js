import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../context/Context';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';

const Content = styled.div `
	text-align: center;
`
const H3 = styled.h3 `
	font-weight: 400;
	margin: 30px;
`
const H2 = styled.h2 `
	font-weight: 400;
	margin: 30px;
`

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
const Certificate = (props) => {
	const context = useContext(AppContext);
	const [ copyMessage, setCopyMessage ] = useState()
	const data = props.cert
	const CertificationUrl = process.env.AUTHO_RETURN_URL + props.router.asPath
	const name = reformatName(data.username)
	const CopyMessage = () => {
		setCopyMessage("Certification copied. Go to your publication and paste certification there") 
		setTimeout(() => {
			setCopyMessage("")  
		}, 4000)
	}


	function reformatName(y) {
		return y.replace('.', ' ').replace(/(?:^|\s)\S/g, a => a.toUpperCase())
	}
	

	useEffect(() => {
		context.LoadingContent()

	}, []);

	return(
			<div>
		
				{
					data ? 
					<Content>
						<h1>Content Certificate</h1>
						<H2>With this certificate it is declared that the content on a webservice is created by {name}.</H2>
						<p>To verify the certification, please check that the description bellow matches the origin where the certification has been used.</p>
						<H3>Certificate description: {data.description || "-" }</H3> 
						<p>Creation date: {data.date || "-" }</p>
						<p>Certificate url to content: {data.url || "-" }</p>
						<p>Certificate id: {data.id || "-" }</p> 
						
						<h3>
							{copyMessage}
						</h3>
						<CopyToClipboard text={CertificationUrl}
							onCopy={() => CopyMessage()}
						>
							<Button>Copy Certification</Button>
						</CopyToClipboard>
					</Content>
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
