import React from 'react';
import Weather from './Weather';

function Hourly({ hourlyWeather }) {
	const displayHourlyTime = () => {
		let getUTCDate;
		let getHour;
		if (hourlyWeather && hourlyWeather.utcTime) {
			getUTCDate = new Date(hourlyWeather.utcTime);
			console.log(getUTCDate);
			getHour = getUTCDate.getHours();

			if (getUTCDate.getHours() >= 12) {
				return getHour + ':00' + ' PM';
			} else {
				return getHour + ':00' + ' AM';
			}
		}
	};

	return (
		<div className='hourly__content'>
			{hourlyWeather && (
				<div>
					<h2 className='weather__hour'>{displayHourlyTime()}</h2>
					<h2 className='weather__weekday'>{hourlyWeather.weekday}</h2>
					<h1 className='weather__temp'>{parseInt(hourlyWeather.temperature, 10)}° </h1>
					<img src={hourlyWeather.iconLink} />
					<h2 className='weather__tempdesc'>{hourlyWeather.temperatureDesc}</h2>
				</div>
			)}
		</div>
	);
}

export default Hourly;
