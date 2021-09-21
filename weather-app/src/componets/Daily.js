import React from 'react';
import Weather from './Weather';

function Daily({ dailyWeather }) {
	// const [dailyWeather, setDailyWeather] = useState([]);

	return (
		<div className='weather'>
			{dailyWeather && (
				<div>
					<h2>{dailyWeather.weekday}</h2>
					<h1>
						{parseInt(dailyWeather.highTemperature, 10) +
							'°' +
							'/' +
							parseInt(dailyWeather.lowTemperature, 10) +
							'°'}
					</h1>
					<h2>{dailyWeather.temperatureDesc}</h2>
				</div>
			)}
		</div>
	);
}

export default Daily;
