import React from 'react';
import Weather from './Weather';

function Today({ weather, timezone, displayCurrentTime }) {
	return (
		<div className='weather'>
			{weather && (
				<div>
					<h2 className='weather__location'>
						{weather.today.city}, {weather.today.state} Weather
					</h2>
					<h3 className='weather__localtime'>as of {displayCurrentTime + ' ' + timezone} </h3>
					<h1 className='weather__temp'>{parseInt(weather.today.temperature, 10)}° </h1>
					<div className='weather__tempcontent'>
						<h2 className='weather__tempdesc'>{weather.today.description}</h2>
						<img src={weather.today.iconLink} />
					</div>
				</div>
			)}
		</div>
	);
}

export default Today;
