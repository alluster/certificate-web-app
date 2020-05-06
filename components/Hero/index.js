import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import PropTypes from 'prop-types';
import Gx from '@tgrx/gx';

const ImageContainer = styled.div`
	max-width: 800px;
	padding: 50px;
    margin: auto;
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
		display: none
    }

    `

const Title = styled.h1`
    text-align: left;
    color: white;
    font-weight: 600;
	margin-top: 50px;
	font-size: 80px;
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
        font-size: 34px;
		text-align: center;


     }
`;

const Ingress = styled.p `
    font-size: 34px;
    color: white;
    font-weight: 400;
    text-align: left;
    margin-top: 50px;
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
        font-size: 24px;
        margin-top: 20px;
		text-align: center;

     }
`;

const HeroStyled = styled.div`
    background-color: ${props => props.theme.colors.persBlue};
    min-height: 200px;
    margin-bottom: 100px;
    padding-top: 20px;
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
        padding-top: 20px;

     }
`;
const Content = styled.div `
	 text-align: left;
	 @media (max-width: ${props => props.theme.screenSize.tablet}) {
		text-align: center;

     }

`;



const Hero = ({title, ingress, image, children}) => {
    return(
        <HeroStyled>
            <Container>
				<Gx col={6} breakpoint={900}>
					<Title>
						{title}
					
					</Title>
		
					<Ingress>
					{ingress}
					</Ingress>
					<Content>
						{children}
					</Content>
				</Gx>
                
				<Gx col={6} breakpoint={900}>
					{
						image ? 
							<ImageContainer>
								<img src={image} alt="Hero image" /> 
							</ImageContainer>
							:
							null
					}
				</Gx>

            </Container>
        </HeroStyled>
        
    );
};

Hero.propTypes = {
    title: PropTypes.string,
    ingress: PropTypes.string,
	image: PropTypes.string,
	children: PropTypes.any

 };

export default Hero;