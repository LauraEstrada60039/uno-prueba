// rfce
import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThumbDetail from '../ThumbDetail';

const Principal = () =>{

	const [ countries,setCountries] = useState([]);
	const [ mode, setMode] = useState(true);
	const [toggleBtn, setToggleBtn] = useState('<i class="far fa-sun"></i>Light Mode');

	useEffect(()=>{
		getCountries();
	}, []);

	const getCountries = async () => {
		const key = "7c620746d4b3173beea7811a0b946c48";
		const url = `https://api.countrylayer.com/v2/all?access_key=${key}`;
		const res = await fetch(url);
		const data = await res.json();
		await setCountries(data);
	}

	const toggleDarkMode = ()=>{
		if(mode){
			document.documentElement.classList.add('dark');
			setToggleBtn('<i class="fas fa-moon"></i>Dark Mode');
			setMode(current => current = !current );
		}
		if(!mode){
			document.documentElement.classList.remove('dark');
			setToggleBtn('<i class="fas fa-sun"></i>Light Mode');
			setMode(current => current = !current );	
		}
	}

	const searchCountry = async term => {
		if(term.lenth < 3 || term === ''){
			const key = "7c620746d4b3173beea7811a0b946c48";
			const url = `http://api.countrylayer.com/v2/name/${term}?access_key=${key}`;
			const res = await fetch(url);
			const data = await res.json();
			await setCountries(data);
		}
	}

	const filterByRegion = async region =>{
		if(region === ''){
			const key = "7c620746d4b3173beea7811a0b946c48";
			const url = `http://api.countrylayer.com/v2/region/${region}?access_key=${key}`;
			const res = await fetch(url);
			const data = await res.json();
			await setCountries(data);
		}
	}

	return (
		<>
		<div className="bg-gray-100 dark:bg-gray-800 dark:text-white">
			<div>
				<div className="w-screen shadow-md py-6 px-3 bg-white dark:bg-gray-700 dark:text-white mb-16">
					<div className="flex container mx-auto">
						<h1 className="font-bold text-xl">Where in the world</h1>
						<div className="ml-auto font-medium">
							<button onClick={()=>toggleDarkMode()} dangerouslySetinnerHTML={{_html: toggleBtn}}></button>							
						</div>
					</div>
				</div>
			</div>
		
			<div className="flex container mx-auto mb-16">
				<i className="fa fa-search my-auto -mr-9 z-10 pr-2 pl-3 py-5 rounded-md text-gray-400"></i>
				<input type="text" placeholder="Search country" className="pl-10 p-2 shadow-md rounded-md -w-1/3 dark:bg-gray-700" onChage={(term) => searchCountry(term.target.value)}></input>
				<select className="ml-auto my-2 p-2 shadow-md rounded-md font-medium dark:bg-gray-700" onChange={valueR => filterByRegion(valueR.target.value)}></select>
					<option value="">Region</option>
					<option value="africa">Africa</option>
					<option value="america">America</option>
					<option value="asia">Asia</option>
					<option value="europe">Europe</option>
					<option value="oceania">Oceania</option>
			</div>

			<div className="container grid grid-cols-4 gap-16 mx-auto">
				{ countries.map((country, index) => <Link to={{pathname:'information', state:country}} key={index}>
					<ThumbDetail
						title={country.name}
						image_url={country.flag}
						population={country.population}
						region = {country.region}
						capital={country.capital}
					/>
					</Link>)}
			</div>
		</div>
		</>
		);
}

export default Principal;