import React from 'react';
import Weather from './Weather';

function Daily({ dailyWeather }) {
	// const [dailyWeather, setDailyWeather] = useState([]);

	return (
		<div className='daily__content'>
			{dailyWeather && (
				<div>
					<h2 className='weather__weekday'>{dailyWeather.weekday}</h2>
					<h1 className='weather__temp'>
						{parseInt(dailyWeather.highTemperature, 10) +
							'°' +
							'/' +
							parseInt(dailyWeather.lowTemperature, 10) +
							'°'}
					</h1>
					<h2 className='weather__tempdesc'>{dailyWeather.temperatureDesc}</h2>
				</div>
			)}
		</div>
	);
}

export default Daily;
