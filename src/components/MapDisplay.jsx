import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const containerStyle = {
  width: '500px',
  height: '500px'
};

const center = {
  lat: 41.2565,
  lng: -95.9345
};


function MapDisplay() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCUsNTk-UhiAZbzXaWwDcdWYWkPjZ7eChg"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
      <Marker position={{lat: 41.2565,lng: -95.9345}} />
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MapDisplay)