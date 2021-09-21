import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Switch, Route, useParams } from 'react-router-dom';
import axios from 'axios';

const Weather = () => {
	const today = new Date();
	const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	let time = today.getHours() + ':' + today.getMinutes();
	const [weather, setWeather] = useState(null);

	const displayCurrentTime = () => {
		if (today.getHours() >= 12) {
			return time + ' PM';
		} else {
			return time + ' AM';
		}
	};

	useEffect(() => {
		const weatherData = axios
			.get('https://j9l4zglte4.execute-api.us-east-1.amazonaws.com/api/ctl/weather')
			.then((data) => {
				setWeather(data.data);
				console.log(data.data.today);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<Router>
			<nav className='navgation'>
				<ul>
					<li>
						<Link to='/'>Today</Link>
					</li>
					<li>
						<Link to='/Hourly'>Hourly</Link>
					</li>
					<li>
						<Link to='/Daily'>Daily</Link>
					</li>
				</ul>
			</nav>
			<Switch>
				<Route exact={true} path='/'>
					<div className='weather'>
						{weather && (
							<div>
								<h2>
									{weather.today.city}, {weather.today.state} Weather
								</h2>
								<h3>as of {displayCurrentTime() + ' ' + timezone} </h3>
								<h1>{parseInt(weather.today.temperature, 10)}° </h1>
								<h2>{weather.today.description}</h2>
							</div>
						)}
					</div>
				</Route>
			</Switch>
		</Router>
	);
};

export default Weather;
