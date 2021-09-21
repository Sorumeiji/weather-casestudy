import React from 'react';
import Weather from './Weather';

function Hourly({ hourlyWeather }) {
	// const [dailyWeather, setDailyWeather] = useState([]);
	return (
		<div className='weather'>
			{hourlyWeather && (
				<div>
					<h2>{hourlyWeather.weekday}</h2>
					<h1>{parseInt(hourlyWeather.temperature, 10)}° </h1>
					<h2>{hourlyWeather.temperatureDesc}</h2>
				</div>
			)}
		</div>
	);
}

export default Hourly;
