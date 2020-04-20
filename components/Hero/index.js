import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import PropTypes from 'prop-types';

const ImageContainer = styled.div`
    max-width: 800px;
    margin: auto;
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
        max-width: 100%;
    }

    `

const Title = styled.h1`
    text-align: center;
    color: white;
    font-weight: 600;
    margin-top: 50px;
    font-size:  ${props => props.theme.fontSize.h3}
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
        font-size: 24px;


     }
`;

const Ingress = styled.p `
    font-size:  ${props => props.theme.fontSize.h5};
    color: white;
    font-weight: 400;
    text-align: center;
    margin-top: 50px;
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
        font-size: 14px;
        margin-top: 20px;

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




const Hero = ({title, ingress, image, children}) => {
    return(
        <HeroStyled>
            <Container>
                <Title>
					{title}
					<div>
						{children}
					</div>
                </Title>
	
				<Ingress>
                   {ingress}
                </Ingress>
				{
					image ? 
						<ImageContainer>
							<img src={image} alt="Hero image" /> 
						</ImageContainer>
						:
						null
				}
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