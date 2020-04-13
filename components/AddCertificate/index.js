import React, { useState, useContext } from 'react';
import styled, { css } from 'styled-components';
import { AppContext } from  '../../context/Context';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import Gx from '@tgrx/gx';

const AccordionContainer = styled.div `
    background-color: white;
    color: black;
	z-index: 100000;
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-top: 30px;
    ${props => {
		if (props.open) return css`
			height: auto;
		`;
	}};
	
`;
    
const AccordionContent = styled.div `
	background-color: white;
	display: none;
	padding: 10px;

	${props => {
		if (props.open) return css`
			display: block;
		`;
	}};
`;


const Content = styled.div`
	width: 100%;
	height: 50px;
`;
const ContentClosed = styled.div`
	width: 100%;
	background-color: ${props => props.theme.colors.primary};
	color: white;
	padding: 20px;

`;


const Label = styled.h5`
    font-size: 7px;
    font-weight: 400;
`;

const Input = styled.input`
	border: 1px solid black;
	color: black;
	height: 30px;
	padding: 5px;
	width: 80%;
	:placeholder {
		color: gray
	}
	
`
const SubmitButton = styled.button `
	background-color: ${props => props.theme.colors.primary};
	color: white;
	height: 40px; border-radius: 15px;
	text-align: center;
	line-height: 40px;
	font-weight: normal;
	font-size: 20px;
	padding-left: 100px;
	padding-right: 100px;
`


const AddCertificate = () => {
	const context = useContext(AppContext)  
	const [toggle, setToggle] = useState(false)

	const updateField = (e) => {
		context.setCertification({
			...context.certification,
			[e.target.name]: e.target.value

		});
	};
	const clear = () => context.clearState();
	
	const generateId =  () =>  { return '_' + Math.random().toString(36).substr(2, 9);};

	const SubmitCertfication = async () => {

		try {
			return await axios.get('/addcertification',  {
				params: {
					id: generateId(),
					name: context.certification.name,
					date: Date.now() , 
					url: context.certification.url || null,
					owner: context.user.sub
				}	
			})

		} 
		catch (error) {
			console.error(error)
		}
	}
	context.GetCertifications(context.user.sub)

	return(
		

<AccordionContainer >
	{
		!toggle ? 
	
            <ContentClosed onClick={ () => setToggle(!toggle)} open={toggle}>
                <Gx col={11} breakpoint={300} style={{"paddingLeft": "20px"}}>
					<h2>Add certification</h2>
                </Gx>
               
                <Gx col={1}>
                    <h2 style={{"color":"white"}} >
                        <FontAwesomeIcon  icon={faPlus} />
                    </h2>
                </Gx>
			</ContentClosed>:
			null
	}
            <AccordionContent open={toggle}>
                <Content>
				<Gx col={6} breakpoint={300} style={{"paddingLeft": "20px"}}>
				<Label>Certification name</Label>

						<Input placeholder="Name for the certification" name="name" value={context.certification.name || ""} onChange={updateField} type="text" />
                </Gx>
                    <Gx col={5} >
                        <Label>Link to content</Label>
									<Input placeholder="Url for the certification" name="url" value={context.certification.url || "" } onChange={updateField} type="text" />
                    </Gx>
				<Gx col={1}>
                    <h2 style={{"color":"black"}} >
                        <FontAwesomeIcon  icon={faWindowClose} onClick={ () => setToggle(!toggle)}  />
                    </h2>
                </Gx>
				</Content>

				<SubmitButton text="Submit" onClick={e => SubmitCertfication(e) && clear()}>Submit</SubmitButton>

            </AccordionContent>
        </AccordionContainer>
    )
}

export default AddCertificate;
