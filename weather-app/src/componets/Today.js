import React from 'react';
import Weather from './Weather';

function Today({ weather, timezone, displayCurrentTime }) {
	return (
		<div className='weather'>
			{weather && (
				<div>
					<h2>
						{weather.today.city}, {weather.today.state} Weather
					</h2>
					<h3>as of {displayCurrentTime + ' ' + timezone} </h3>
					<h1>{parseInt(weather.today.temperature, 10)}° </h1>
					<h2>{weather.today.description}</h2>
				</div>
			)}
		</div>
	);
}

export default Today;
