import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Switch, Route, useParams } from 'react-router-dom';
import axios from 'axios';
import Today from './Today';
import DailyList from './DailyList';
import HourlyList from './HourlyList';

const Weather = () => {
	const [weather, setWeather] = useState(null);

	// Loads API
	useEffect(() => {
		const weatherData = axios
			.get('https://j9l4zglte4.execute-api.us-east-1.amazonaws.com/api/ctl/weather')
			.then((data) => {
				setWeather(data.data);
				console.log(data.data.today.utcTime);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<Router>
			<nav className='navigation'>
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
					<Today weather={weather} />
				</Route>
				<Route path='/Daily'>
					<DailyList weather={weather} />
				</Route>
				<Route path='/Hourly'>
					<HourlyList weather={weather} />
				</Route>
			</Switch>
		</Router>
	);
};

export default Weather;
