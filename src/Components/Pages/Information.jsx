import React, { useState } from 'react';
import {useHistory, useLocation} from 'react-router';

const Information = () => {
	const [mode, setMode] = useState(true);
	const [toggleBtn, setToggleBtn] = useState();

	let {state} = useLocation();
	let history = useHistory();

	const goPrincipalBtn = () =>{
		history.push("/");
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

	return (
		<div clasName="bg-gray-100 dark:bg-gray-800 dark:text-white">
			<div className="w-screen shadow-md py-6 px-3 bg:white dark:bg-gray-700 dark:text-white mb-16">
				<div clasName="container flex mx-auto">
					<h1 className="font-bold text-xl">Where in the world</h1>
					<div className="ml-auto font-medium">
						<button onClick={()=>toggleDarkMode()} dangerouslySetinnerHTML={{_html: toggleBtn}}></button>
					</div>
				</div>
			</div>
			<div className="container mx-auto mb-16">
				<button className="px-8 py-2 bg-white text-gray-600 shadow-md rounded-lg dark:bg-gray-700 dark:text-white" onClick={()=>goPrincipalBtn()}>
					<i class="fa fa-arrow-left"></i>Back
				</button>
			</div>
			<div className="container flex mx-auto p-8 pl-0 pr-0">
				<img src={state.flag} className="w-1/2 pr-8" alt={state.name}/>
				<div className="p-8 pl-0">
					<h2 className="font-bold text-2xl mb-8">{state.name}</h2>
					<div className="grid grid-cols-2 gap-x-20 gap-y-4">
						<p>Native name: <span className="dark:text-gray-400 text-gray-7000 text-sm">{state.nativeName}</span></p>
						<p>Population: <span className="dark:text-gray-400 text-gray-7000 text-sm">{state.population}</span></p>
						<p>Region: <span className="dark:text-gray-400 text-gray-7000 text-sm">{state.region}</span></p>
						<p>Sub region:<span className="dark:text-gray-400 text-gray-7000 text-sm">{state.subregion}</span></p>
						<p>Capital: <span className="dark:text-gray-400 text-gray-7000 text-sm">{state.capital}</span></p>
						<p>Top level domain: <span className="dark:text-gray-400 text-gray-7000 text-sm">{state.topLevelDomain[0]}</span></p>
						<p>Currencies: <span className="dark:text-gray-400 text-gray-7000 text-sm">{state.currencies.map(curr => curr.name)}</span></p>
						<p>Languajes: <span className="dark:text-gray-400 text-gray-7000 text-sm">{state.languajes.map(lang => lang.name+', ')}</span></p>
					</div>
				</div>
			</div>
		</div>
		);
}

export default Information;