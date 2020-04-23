import React, { useState, useEffect } from 'react';
import { AppContext } from './Context';
import PropTypes from 'prop-types';
import { useAuth } from 'use-auth0-hooks';
import axios from 'axios';

const Provider = ({children}) => {
	
	const { isAuthenticated, login, logout, user, signup  } = useAuth();
	const [ userCertifications, setUsercertifications ] = useState([]);
	const [ certification, setCertification ] = useState();
	const [ isLoading, setIsLoading ] = useState(false)
	const [ loadingMessage, setLoadingMessage ] = useState()


	const GetCertifications = (sub) => {
		axios.get('/getusercertifications', {
			params: {
				owner: sub
			}
		})
		.then(function (response) {
			let data = response.data
			setUsercertifications(data)
		})
		.catch(function (error) {
			console.log(error);
		})
		.finally(function () {
		});
	}
	const GetCertification =  (id) => {
	
		axios.get('/getcertification', {
			params: {
				id: id
			}
		})
		.then(function (response) {
			let data = response.data[0]
			setCertification(data)
		})
		.catch(error => {
			console.log(error);
		});
	};
	const LoadingContent = () => {
		setLoadingMessage("Loading content...") 
		setTimeout(() => { 
			setLoadingMessage("Unfortunately something went wrong. We are working on this. Please return to previous page and try again")  
		}, 8000)
		setTimeout(() => {
			setLoadingMessage("")  
		}, 14000)
	}

	useEffect(() => {
	}, []);
        return (
            <AppContext.Provider 
                value={{
					signup,
					GetCertifications,
					userCertifications,
					setUsercertifications,
                    logout,
                    isAuthenticated,
                    login,
					user,
					certification,
					setCertification,
					isLoading,
					setIsLoading,
					GetCertification,
					LoadingContent,
					loadingMessage
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