import React, { useContext } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Gx from '@tgrx/gx';
import PropTypes from 'prop-types';
import { Links } from '../links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { AppContext } from  '../../context/Context'

const LOGO_IMG = '/logo.svg';

const LinkText = styled.h3`
    font-weight: 400;
    font-size: 18px;
	color: white;
	line-height: 50px;
    :hover {
        cursor: pointer;
    }
`;


const NavContainer = styled.div`
    text-align: center;
    padding-top: 20px;
	min-width: 100%;
	height: 50px;
`;

const Logo = styled.img `
    width: 80%;
    object-fit: cover;
    padding: 10px;
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
        width: 100px;
     }
    
`


const TopNavigation = ({ className }) => {
	const context = useContext(AppContext)  
    return(
		<NavContainer className={className} >
			<Gx col={2}>
				<Link href="/">
					<a>
						<Logo src={LOGO_IMG} alt="Certify me" />
					</a>
				</Link>                
			</Gx>
	

		{ Links.map((item, i) => {
			return (
				<Gx key={i} col={1}>
					<Link href={item.link}>
						<a>
						<LinkText>{item.name}</LinkText> 
						</a>
					</Link>
				</Gx>
			)
		})}
		{
			context.isAuthenticated ? (
				<>   
					<Gx col={2}>
						<LinkText onClick={() => context.logout({ returnTo: process.env.AUTHO_RETURN_URL })}>Log out</LinkText>
					</Gx>
					<Gx col={1}>
						<Link href='/profile'>
							<a>
								<LinkText>
									<FontAwesomeIcon icon={faUser} />
								</LinkText>
							</a>

						</Link>
					</Gx>
				</>
			)
			:
			(
				<>   
					<Gx col={2}>
						<LinkText onClick={() => context.login({ returnTo: process.env.AUTHO_REDIRECT_URI })}>Sign Up</LinkText>
					</Gx>
					<Gx col={1}>
						<LinkText>
							<FontAwesomeIcon onClick={() => context.login({ returnTo: process.env.AUTHO_REDIRECT_URI })} icon={faSignInAlt} />
						</LinkText>
					</Gx>
				</>
			)
		}
	</NavContainer>        
            
    );
};
TopNavigation.propTypes = {
    className: PropTypes.string
};

export default TopNavigation;