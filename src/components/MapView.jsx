import React, { useState } from "react";
import MapDisplay from "./MapDisplay";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



function MapView () {
   
    const [mapTheme, setMapTheme] = useState("mapsThemeMondrian")


    const setTheme = (event) => {
        setMapTheme(event.target.value)
    }
    console.log(mapTheme)
    
    return (
        
        <>        
            <FormLabel id="map-themes">Map Theme</FormLabel>
            <RadioGroup
                aria-labelledby="map-themes"
                defaultValue={mapTheme}
                name="radio-buttons-group"
                onChange={setTheme}>
                    

                <FormControlLabel value="mapsThemeMondrian" control={<Radio />} label="Mondrian" />
                <FormControlLabel value="mapsThemeAssassinsCreed" control={<Radio />} label="Assassin's Creed" />
                <FormControlLabel value="mapsThemeShadesOfGray" control={<Radio />} label="Shades Of Gray" />
            </RadioGroup>
        
            <MapDisplay mapTheme={mapTheme}>

            </MapDisplay>
        </>

    )
}


export default MapView;