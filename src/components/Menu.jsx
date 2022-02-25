import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { NavLink } from 'react-router-dom';


export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <Tab component={NavLink} label="Map" to="mapdisplay" />
        <Tab component={NavLink} label="About" to="about" />
        <Tab component={NavLink} label="Truck Login" to="login" />
      </Tabs>
    </Box>
  );
}
