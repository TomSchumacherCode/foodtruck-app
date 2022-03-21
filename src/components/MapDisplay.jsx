import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoBox } from '@react-google-maps/api';
import mapsThemeShadesOfGray from "../static/mapsTheme_shadesOfGray.json";
import mapsThemeAssassinsCreed from "../static/mapsTheme_assassinsCreed.json";
import mapsThemeMondrian from "../static/mapsTheme_mondrian.json";
import useAPI from "../hooks/useAPI";
import { API } from 'google-places-web';

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



// const testMarker = { lat: 40.7699478, lng: -96.7161464 };
// const event1 = { lat: 41.7699478, lng: -96.7161464 };
// const event2 = { lat: 42.7699478, lng: -96.7161464 };

// const foodTruckEvents = [
//     event1,
//     event2,
//     testMarker
// ]

function MapDisplay({mapTheme, activeUser}) {
    console.log("ActiveUser in Map Display", activeUser)
    const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    const [foodTruckEvents, setFoodTruckEvents] = useState([]);

    const currentTheme = mapThemes.find((theme) => theme.name === mapTheme)
    const mapOptions = {styles: currentTheme?.value}
    const api = useAPI();
    useEffect(() => {
        console.log("ActiveUser inside useEffect", activeUser)
        async function fetchData() {
          const events = await api.allEvents()
          console.log(events)
          const googleFormat = events.data.map(item => {
            return{lat: parseFloat(item.lat), lng: parseFloat(item.lng)}
          })
          setFoodTruckEvents(googleFormat)
        }
        fetchData()
    },[activeUser])
   

  return (
    <LoadScript
      googleMapsApiKey= {googleMapsApiKey}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
        options={mapOptions}
        
      >
      <Marker position={{lat: 41.2565,lng: -95.9345}} />
      {foodTruckEvents.length && foodTruckEvents.map((event, index) => {
            return (
              <Marker key={index} position={event}>
                {/* <InfoBox>TEST</InfoBox> */}
              </Marker>
            )


      })}
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MapDisplay)