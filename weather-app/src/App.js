import React from 'react';
import Weather from './componets/Weather';

// import images
import applestore from './images/applestore.png';
import googleplay from './images/googleplay.png';

function App() {
	return (
		<div className='App'>
			<Weather />
			<div>
				<h1>SIMPLY, GET MORE FOR YOUR WEATHER. AVOID THE RAIN. </h1>
				<button className='cta'>TRACK THE SUN</button>
				<div className='appDownload'>
					<a href='#test'>
						<img src={googleplay} alt='googleplay_download' />
					</a>
					<a href='#'>
						<img src={applestore} alt='applestore_download' />
					</a>
				</div>
			</div>
		</div>
	);
}

export default App;
