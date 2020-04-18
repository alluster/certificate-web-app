import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';


const Certificate = () => {
	const [certificate, setCertificate] = useState([])
	const router = useRouter();
	const [ isLoading, setIsLoading ] = useState(false)
	const GetCertificate = async () => {
		setIsLoading(true)
		await axios.get('/getcertification', {
			params: {
				id: router.query.id
			}
		})
		.then( function () {
		})

		.catch(function (error) {
			console.log(error);
		})
		.finally(function (response) {
			setCertificate(response)
			setIsLoading(false)

		});
	}

	useEffect(() => {
		GetCertificate()
		console.log(certificate)
	}, []);
	const Loader = () => {
		return (
			<p>Loading...</p>
		)
	}
	return(
			<div>
				{
					isLoading ? Loader : <p>{router.query.id}</p>
				}
			</div>
		
	)
}

export default Certificate;
