import React, { useState }  from 'react';
import styled from 'styled-components';
import Gx from '@tgrx/gx';
import Container from '../Container';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Links } from '../links';
import { useAuth } from 'use-auth0-hooks';
const LOGO_IMG = '/logo.svg';

const NavWrapper = styled.div `
    width: 100%;
    margin-top: 20px;

`;

const NavContainer = styled(Container)`

`;

const Logo = styled.img `
    object-fit: cover;
    padding: 10px;
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
        width: 100px;
     }
    
`;
const BurgerContainer = styled.div`
    display: flex;
   justify-content: flex-end;

`;

const StyledBurger = styled.div`
    top: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;
    
    &:focus {
        outline: none;
    }
    
    div {
        width: 2rem;
        height: 0.25rem;
        background: ${props => props.theme.colors.persOrange};
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;
    }
`;
const NavOpen = styled.div`
    height: 100vh;
    background-color: ${props => props.theme.colors.persBlue};
    color: white;
    font-size: 20px;
    text-align: center;
    

`;
const H3 = styled.h3 `
	margin-top: 40px;
`


const BurgerMenu = ({className} ) => {
    const [nav, setNav] = useState(false)
	const { isAuthenticated, login, logout } = useAuth();
    return(
        <NavWrapper className={className}>
            <NavContainer >
                <Gx col={4} breakpoint={300} >
                    <Link href="/">
                        <a onClick={() => setNav(false)}>
                        <Logo src={LOGO_IMG} alt="Certify me"/>
                        </a>
                    </Link>
                </Gx>
                <Gx col={8} breakpoint={300} >
                    <BurgerContainer>
                        <StyledBurger onClick={() => setNav(!nav)}>
                            <div/>
                            <div/>
                            <div/>
                        </StyledBurger>
                    </BurgerContainer>
                </Gx>
                {
                    nav ?
                    <Gx col={12} >
                        <NavOpen>
							{
								isAuthenticated ? 
									<div>
										<Gx col={2}>
											<H3 onClick={() => logout({ returnTo: process.env.AUTHO_RETURN_URL })}>Log out</H3>
										</Gx>
										<Gx col={1}>
											<Link href='/profile'>
												<a>
													<H3>
														Profile
													</H3>
												</a>
											</Link>
										</Gx>
									</div>
									
							
							: 
							<Gx col={2}>
								<H3 onClick={() => login({ appState: { returnTo: process.env.AUTHO_REDIRECT_URI } })}>
								Log in
								</H3>
							</Gx>
							
							}
							{Links.map((item, i) => {
								return (
									<Link key={i} href={item.link}>
										<a onClick={() => setNav(!nav)}>
											<H3 >{item.name}</H3>
										</a>
									</Link>
								)
							})}    
                        </NavOpen>
                    </Gx>
                    :
                    null
                }
            </NavContainer>
        </NavWrapper>
    );
};
BurgerMenu.propTypes = {
    className: PropTypes.string
 };

export default BurgerMenu;