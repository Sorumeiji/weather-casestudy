import React from 'react';
import Weather from './componets/Weather';
import './styles/main.scss';

// import images
import applestore from './images/applestore.png';
import googleplay from './images/googleplay.png';

function App() {
	const analyticsCTA = (e) => {
		console.log('analytics has been tracked / activated!');
	};

	return (
		<div className='App'>
			<Weather />
			<div className='landing'>
				<div className='landing__title'>
					<h1 className='landing__name'>Suncast Weather</h1>
					<h1 className='landing__subheading'>
						SIMPLY, GET MORE FROM YOUR WEATHER APP. AVOID THE RAIN.
					</h1>
				</div>
				<button onClick={analyticsCTA} className='landing__cta'>
					TRACK THE SUN
				</button>
				<div className='landing__downloads'>
					<a
						href='https://play.google.com/store'
						className='googleplay'
						target='_blank'
						rel='noopener noreferrer'>
						<img src={googleplay} alt='googleplay_download' />
					</a>
				</div>
			</div>
		</div>
	);
}

export default App;
