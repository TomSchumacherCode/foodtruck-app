import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import mapsThemeShadesOfGray from "../static/mapsTheme_shadesOfGray.json";
import mapsThemeAssassinsCreed from "../static/mapsTheme_assassinsCreed.json";
import mapsThemeMondrian from "../static/mapsTheme_mondrian.json";

const mapThemes = [
    {name: "mapsThemeMondrian", value: mapsThemeMondrian},
    {name: "mapsThemeAssassinsCreed", value: mapsThemeAssassinsCreed},
    {name: "mapsThemeShadesOfGray", value: mapsThemeShadesOfGray}
]

const containerStyle = {
  width: '500px',
  height: '500px'
};

const center = {
  lat: 41.2565,
  lng: -95.9345
};

function MapDisplay(props) {
    const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;


    const currentTheme = mapThemes.find((theme) => theme.name === props.mapTheme)
    const mapOptions = {styles: currentTheme?.value}

    console.log(props)


  return (
    <LoadScript
      googleMapsApiKey= {googleMapsApiKey}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        options={mapOptions}
        
      >
      <Marker position={{lat: 41.2565,lng: -95.9345}} />
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MapDisplay)