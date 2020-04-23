import React, { useState, useContext } from 'react';
import styled, { css } from 'styled-components';
import { AppContext } from  '../../context/Context';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import Gx from '@tgrx/gx';


    
const ContentOpen = styled.div `
	background-color: white;
	display: none;
	padding: 10px;
	color: black;
	border-radius: 8px;


	${props => {
		if (props.open) return css`
			display: block;
		`;
	}};
`;



const ContentClosed = styled.div`
	background-color: ${props => props.theme.colors.primary};
	color: white;
	padding: 10px;
	border-radius: 8px;

`;

const Label = styled.h5`
	top: 0;
	display: block;
	transition: 0.2s;
	font-size: 12px;
	font-weight: 400;
`;

const Input = styled.input`
	font-family: inherit;
	width: 100%;
	border: 0;
	border-bottom: 1px solid gray;
	outline: 0;
	color: $white;
	padding: 7px 0;
	background: transparent;
	transition: border-color 0.2s;
  
	::placeholder {
		color: gray;
		font-size: 10px;
		font-weight: 300;
		font-style: italic;	  
	}
  
	
}`

const SubmitButton = styled.button `
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
	@media (max-width: ${props => props.theme.screenSize.tablet}) {
		width: 100%;
    }
`;


const AddCertificate = () => {
	const initialState = {
		url: "",
		description: ""
	}
	const [{ url, description },setState] = useState(initialState);
	const context = useContext(AppContext)  
	const [toggle, setToggle] = useState(false)
	const inputChange = e => {
		const { name, value } = e.target;
		setState(prevState => ({ ...prevState, [name]: value }));
	};
	const generateId =  () =>  { return '_' + Math.random().toString(36).substr(2, 9);};
	const clearState = () => {
		setState({ ...initialState });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			return await axios.get('/addcertification',  {
				params: {
					id: generateId(),
					description: description,
					date: Date.now() , 
					url: url || null,
					owner: context.user.sub,
					username: context.user.nickname
				}	
			})
			.then(setToggle(false))
			.then(clearState())
			.then(context.GetCertifications(context.user.sub))
		} 
		catch (error) {
			console.error(error)
		}
	}
	return(
		<div>
			{
				!toggle ? 
					<ContentClosed onClick={ () => setToggle(!toggle)} open={toggle}>
						<Gx col={10} breakpoint={300} >
							<h2>Create a new certificate</h2>
						</Gx>	
						<Gx col={1}breakpoint={300}>
							<h2  >
								<FontAwesomeIcon  icon={faPlus} />
							</h2>
						</Gx>
					</ContentClosed>
					:
					null
			}
            <ContentOpen open={toggle}>
				<form onSubmit={handleSubmit} >
					<Gx col={12}>
						<h2 style={{ textAlign: "right"}}>
							<FontAwesomeIcon icon={faTimes} onClick={ () => setToggle(!toggle)} />
						</h2>
					</Gx>
					<Gx col={12}>
						<Label>Briefly describe the usage of this certificate</Label>
						<Input placeholder="Facebook post.., This is a tweet.., I was interviewed.. etc" name="description" value={description} onChange={inputChange} type="text" />
					</Gx>
					<Gx col={12}>
						<Label>Provide a link to content where certificate is used</Label>
						<Input placeholder="www.twitter.com, www.facebook.com, slack etc." name="url" value={url} onChange={inputChange} type="text" />
					</Gx>
					
					<SubmitButton onClick={e => handleSubmit(e)}>Create certificate</SubmitButton>
				</form>
            </ContentOpen>
        </div>
    )
}

export default AddCertificate;
