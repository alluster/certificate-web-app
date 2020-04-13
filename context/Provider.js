import React, { useState, useEffect } from 'react';
import { AppContext } from './Context';
import PropTypes from 'prop-types';
import { useAuth } from 'use-auth0-hooks';
import axios from 'axios';

const Provider = ({children}) => {

const initialState = {
	certification: {
		name: "",
		url: "",

	}
}
	const { isAuthenticated, login, logout, user  } = useAuth();
	const [ userCertifications, setUsercertifications ] = useState([])
	const [certification, setCertification] = useState({
		name: "",
		url: "",
		owner: "",
		date: "",
		id: ""
	})
	console.log(user)

	const clearState = () => {
		setCertification({ ...initialState });
	};
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

	useEffect(() => {
		console.log(userCertifications)
	}, []);
        return (
            <AppContext.Provider 
                value={{
					GetCertifications,
					userCertifications,
					setUsercertifications,
                    logout,
                    isAuthenticated,
                    login,
					user,
					certification,
					setCertification,
					clearState
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