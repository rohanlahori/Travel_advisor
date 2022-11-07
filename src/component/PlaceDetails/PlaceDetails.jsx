import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';


const PlaceDetails=({place})=>{
    return(
        <div>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={place.photo? place.photo.images.large.url :"https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"}
                alt={place.name}
            />
            <CardContent spacing={4}>
                <Typography gutterBottom variant="h5" component="div">
                <h3>{place.name}</h3>
                </Typography>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Price</Typography>
                    <Typography gutterButtom variant="subtitle1">{place.price || "Not Available"}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Ranking</Typography>
                    <Typography gutterButtom variant="subtitle1">{place.ranking || "Not Available"}</Typography>
                </Box>

                <Box display="flex" justifyContent="space-between">
                <Typography component="legend">Rating</Typography>
                <Rating name="read-only" value={place.rating || 0} readOnly />
                </Box>
                <Stack direction="row" spacing={1}>
                {place.cuisine ? 
                place.cuisine.map(({name})=>(
                    <Chip variant ="filled" label={name}></Chip>
                )
                ) : ""} 
                </Stack>
                <br></br>
                <Typography variant="subtitle1">Address :    
                {place.address ? place.address : ""}
                </Typography>

                <Typography variant="subtitle1">Phone No  :      
                {place.address ? place.phone : ""}
                </Typography>
            </CardContent>

            <CardActions>
                <Button size="small" color="primary" onClick=
                    {()=>window.open(place.web_url,'_blank')}>
                        Trip Advisor
                </Button>
                <Button size="small" color="primary" onClick=
                {()=>window.open(place.website,'_blank')}>
                    Website
                </Button>
                <Button size="small" color="primary" onClick=
                {()=>window.open(place.write_review,'_blank')}>
                    Give Review
                </Button>
            </CardActions>
            </Card>
        </div>
        
    )
}
export default PlaceDetails