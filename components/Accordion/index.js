import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
import Gx from '@tgrx/gx';

const AccordionContainer = styled.div `
    background-color: white;
    color: black;
	z-index: 100000;
    width: 100%;
    height: auto;
    padding: 10px;
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
	${props => {
		if (props.open) return css`
			display: block;
		`;
	}};
`;


const Content = styled.div`
    width: 100%;
`;

const LogoImage = styled.img `
    max-height: 40px;
    object-fit: cover;
    padding: 10px;
`;
const Label = styled.h5`
    font-size: 7px;
    font-weight: 400;
`;
const Mark = styled.h4`
    font-size: 12px;
    font-weight: 600;
`;


// const imageFingerPrint = "finger-print.svg"
// const imageTwitter = "https://seeklogo.com/images/T/twitter-2012-positive-logo-916EDF1309-seeklogo.com.png"
const imageHs = "https://www.hs.fi/assets/images/og-hs-1920px.5fdbe1eeac47f127.png"
const Accordion = () => {
    const [toggle, setToggle] = useState(false)
	return(
		<AccordionContainer onClick={ () => setToggle(!toggle)} open={toggle}>
            <Content>
                <Gx col={2} breakpoint={300}>
					<LogoImage src={imageHs} />
                </Gx>
                <Gx col={6} breakpoint={300} style={{"paddingLeft": "20px"}}>
                    <Label>Certificate name</Label>
                    <Mark>Twitter</Mark>
                </Gx>
                <Gx col={3} >
                    <Label>ID</Label>
                    <Mark>12345678</Mark>
                </Gx>
                <Gx col={1}>
                    <h5 style={{"color":"orange"}} >
                        <FontAwesomeIcon icon={faChevronDown} />
                    </h5>
                </Gx>
            </Content>
            <AccordionContent open={toggle}>
                <Content>
                    <Gx col={6} breakpoint={300} style={{"paddingLeft":"20px"}}>
                        <Label>Date Added</Label>
                        <Mark>1.3.2020</Mark>
                    </Gx>
                    <Gx col={3} >
                        <Label>Link to content</Label>
                        <Link href="/">
                            <a>
                                <Mark>12345678</Mark>
                            </a>
                        </Link>
                    </Gx>
                </Content>
            </AccordionContent>
        </AccordionContainer>
    )
}

export default Accordion;
