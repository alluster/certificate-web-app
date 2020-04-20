import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faBookmark } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
import Gx from '@tgrx/gx';
import PropTypes from 'prop-types';

const AccordionContainer = styled.div `
    background-color: white;
    color: black;
	z-index: 100000;
    max-width: 100%;
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

const Label = styled.h5`
    font-size: 12px;
    font-weight: 400;
`;
const Mark = styled.h4`
    font-size: 20px;
    font-weight: 600;
`;

const Button = styled.button`
	background-color: ${props => props.theme.colors.primary};
	color: white;
	-webkit-text-fill-color: white;
	height: 40px; border-radius: 20px;
	text-align: center;
	line-height: 40px;
	font-weight: bold;
	font-size: 20px;
	padding-left: 20px;
	padding-right: 20px;
	width: auto;
	:hover {
		cursor: pointer
	}
	@media (max-width: ${props => props.theme.screenSize.tablet}) {
		width: 60%;
	}
`;

const Accordion = (props) => {
	const [toggle, setToggle] = useState(false)
	return(
		<AccordionContainer onClick={ () => setToggle(!toggle)} open={toggle}>
            <Content>
                <Gx col={2} breakpoint={300}>
					<FontAwesomeIcon icon={faBookmark} />

                </Gx>
                <Gx col={3} breakpoint={300} style={{"paddingLeft": "20px"}}>
                    <Label>Certificate name</Label>
                    <Mark>{props.name || "-"}</Mark>
                </Gx>
                <Gx col={3} >
                    <Label>ID</Label>
					<Mark>
						<Link href={`/certification?id=${props.id}`} >
							<a>{props.id}</a>
						</Link>
					
					</Mark>
                </Gx>
				<Gx col={3} >
					<Mark>
						<Link href={`/certification?id=${props.id}`} >
							<Button>View Certificate</Button>
						</Link>
					
					</Mark>
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
                        <Mark>{props.date || "-"}</Mark>
                    </Gx>
                    <Gx col={3} >
                        <Label>Link to content</Label>
                        <Link href={props.url || "/"}>
                            <a>
                                <Mark>{props.url || "-"}</Mark>
                            </a>
                        </Link>
                    </Gx>
                </Content>
            </AccordionContent>
        </AccordionContainer>
    )
}
Accordion.propTypes = {
	name: PropTypes.string,
	url: PropTypes.string,
	id: PropTypes.string,
	date: PropTypes.number,
	owner: PropTypes.string
 };
export default Accordion;
