import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import { GGL_KEY } from '../../variables';

import './Location.css';

function Location({ selectedBrewery, zoom, defCenter }) {
	//const [locationInfo, setLocationInfo] = useState(null);
	const [coordinates, setCoordinates] = useState({
		lat: parseFloat(selectedBrewery.latitude),
		lng: parseFloat(selectedBrewery.longitude),
	});
	const examineCoords = selectedBrewery.longitude;
	return (
		<div className='map'>
			<GoogleMapReact
				bootstrapURLKeys={{ key: GGL_KEY }}
				yesIWantToUseGoogleMapApiInternals
				defaultCenter={examineCoords ? coordinates : defCenter}
				defaultZoom={zoom}>
				<LocationMarker
					lat={selectedBrewery.latitude}
					lng={selectedBrewery.longitude}
				/>
			</GoogleMapReact>
		</div>
	);
}

Location.defaultProps = {
	defCenter: {
		lat: 40.75,
		lng: -73.98,
	},
	zoom: 14,
};

export default Location;