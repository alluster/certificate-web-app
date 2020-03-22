import React, { useState, useEffect } from 'react';
import { AppContext } from './Context';
import PropTypes from 'prop-types';
import { useAuth } from 'use-auth0-hooks';

const Provider = ({children}) => {


    const { isAuthenticated, login, logout } = useAuth();
    const [auth, setAuth] = useState(false)
 
    const AuthenticateUser = () => {
        if(isAuthenticated === true)
            setAuth(true)
            
    }

	useEffect(() => {
        AuthenticateUser()
        console.log(isAuthenticated)
        }, []);
        return (
            <AppContext.Provider 
                value={{
                    logout,
                    isAuthenticated,
                    login,
                    auth
                }} 
            >
                {children}
            </AppContext.Provider>
        );
    }
    Provider.propTypes = {
        children: PropTypes.object
     };

     export default Provider;