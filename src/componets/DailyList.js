import React from 'react';
import Weather from './Weather';
import Daily from './Daily';

function DailyList({ weather }) {
	return (
		<div className='weather'>
			{weather && weather.daily && weather.daily.length > 0 && (
				<div className='daily__list'>
					{weather.daily.map((day, index) => (
						<div key={'daily_' + index} className='daily__item'>
							<Daily dailyWeather={day} />
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default DailyList;
