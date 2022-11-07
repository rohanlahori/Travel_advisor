import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import PlaceDetails from "../PlaceDetails/PlaceDetails"
import './listt.css';

export default function NativeSelectDemo({places}) {
  return (
    <div>
    <Box sx={{ minWidth: 120 }}>
        <h1>
            Restaurant Hotel & Attraction around You.
        </h1>
      <FormControl sx={{ m: 1, width: "40%" }}>
        <InputLabel htmlFor="grouped-select">Type</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Grouping">
          <MenuItem value={1}>Hotel</MenuItem>
          <MenuItem value={2}>Restaurant</MenuItem>
          <MenuItem value={3}>Attractions</MenuItem>  
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, width: "40%" }}>
        <InputLabel htmlFor="grouped-select">Rating</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Grouping">
          <MenuItem value={1}>Above 3</MenuItem>
          <MenuItem value={2}>Above 4</MenuItem>
          <MenuItem value={3}>Above 4.5</MenuItem>  
        </Select>
      </FormControl>
      <br></br>
      </Box>
      <Grid style={{height: '500px', overflow:'auto'}} container spacing={3} >
        {places?.map((place,i)=>
        (
            <Grid item key={i} xs={12}>
                <PlaceDetails place={place}/>
            </Grid>
        ))}
      </Grid>
    </div>
  );
}
