import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useJsApiLoader } from "@react-google-maps/api"


const containerStyle = {
  width: '800px',
  height: '750px'
};

const center = {
  lat: 41.2565,
  lng: 95.9345
};

function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey="keyAIzaSyAXWTvgiIv0FPs4LnmZP8bf0pfv-XHAz14"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
      <Marker position={{lat: 41.2565,lng: 95.9345}} />
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)