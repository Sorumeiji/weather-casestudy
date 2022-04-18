import React from 'react';
import Weather from './Weather';
import Hourly from './Hourly';

function HourlyList({ weather }) {
	return (
		<div className='weather'>
			{weather && weather.hourly && weather.hourly.length > 0 && (
				<div className='hourly__list'>
					{weather.hourly.map((hour, index) => (
						<div key={'hourly_' + index} className='hourly__item'>
							<Hourly hourlyWeather={hour} />
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default HourlyList;
