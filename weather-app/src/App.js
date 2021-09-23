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
				<h1 className='landing__title'>SIMPLY, GET MORE FOR YOUR WEATHER. AVOID THE RAIN. </h1>
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
					<a
						href='https://www.apple.com/app-store/'
						className='applestore'
						target='_blank'
						rel='noopener noreferrer'>
						<img src={applestore} alt='applestore_download' />
					</a>
				</div>
			</div>
		</div>
	);
}

export default App;
