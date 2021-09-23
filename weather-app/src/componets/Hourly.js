import React from 'react';
import Weather from './Weather';

function Hourly({ hourlyWeather }) {
	// const [dailyWeather, setDailyWeather] = useState([]);
	return (
		<div className='hourly__content'>
			{hourlyWeather && (
				<div>
					<h2 className='weather__weekday'>{hourlyWeather.weekday}</h2>
					<h1 className='weather__temp'>{parseInt(hourlyWeather.temperature, 10)}° </h1>
					<h2 className='weather__tempdesc'>{hourlyWeather.temperatureDesc}</h2>
				</div>
			)}
		</div>
	);
}

export default Hourly;
