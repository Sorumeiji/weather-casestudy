import React from 'react';
import Weather from './Weather';
import Hourly from './Hourly';

function HourlyList({ weather }) {
	return (
		<div className='hourly-list'>
			{weather && weather.hourly && weather.hourly.length > 0 && (
				<div>
					{weather.hourly.map((hour, index) => (
						<div key={'hourly_' + index}>
							<Hourly hourlyWeather={hour} />
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default HourlyList;
