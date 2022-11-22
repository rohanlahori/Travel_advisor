import * as React from 'react';
import {useState,useEffect} from 'react'
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
import { getPlacesData } from '../../api';
import {Change} from '../../App'
import { BeatLoader } from 'react-spinners';

export default function NativeSelectDemo({places,setType,loading,setRating}) 
{
  const selceted_rating=3;
  return (
    <div >
    <Box sx={{ minWidth: 200 }}>
        <h1>
            Restaurant Hotel & Attraction around You.
        </h1>

        {loading?
        <BeatLoader/>
        :
        <div>
          <FormControl sx={{ m: 1, width: "40%" }}>
            <InputLabel htmlFor="grouped-select">Type</InputLabel>
            <Select defaultValue="" id="grouped-select" label="Grouping">
              <MenuItem value={1} onClick={event=>setType("hotels")}>Hotels</MenuItem>
              <MenuItem value={2} onClick={event=>setType("restaurants")}>Restaurant</MenuItem>
              <MenuItem value={3} onClick={event=>setType("attractions")}>Attractions</MenuItem>  
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, width: "40%" }}>
            <InputLabel htmlFor="grouped-select">Rating</InputLabel>
            <Select defaultValue="" id="grouped-select" label="Grouping">
              <MenuItem value={1} onClick={event=>setRating(3)}>Above 3</MenuItem>
              <MenuItem value={2} onClick={event=>setRating(4)}>Above 4</MenuItem>
              <MenuItem value={3}onClick={event=>setRating(4.5)}>Above 4.5</MenuItem>  
            </Select>
          </FormControl>
        </div>
        }
      <br></br>
      <br></br>
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
