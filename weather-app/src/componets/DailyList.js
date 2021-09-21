import React from 'react';
import Weather from './Weather';
import Daily from './Daily';

function DailyList({ weather }) {
	return (
		<div className='daily-list'>
			{weather && weather.daily && weather.daily.length > 0 && (
				<div>
					{weather.daily.map((day, index) => (
						<div key={'daily_' + index}>
							<Daily dailyWeather={day} />
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default DailyList;
