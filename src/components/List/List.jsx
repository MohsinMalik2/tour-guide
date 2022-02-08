import React, {useState} from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select} from '@material-ui/core';

import useStyle from './style'
import Placeholder from '../placeHolders/Placeholder'

const List = () => {

    const classes = useStyle();
    
    const [type, setType] = useState("restaurants");
    const [rating, setRating] = useState("");
  
  const places = [
      { name: "Hafeez center"},
      { name: "Barkat center"},
      { name: "Opera center"},
      { name: "Guitar center"},
      { name: "Luxury center"},
      { name: "Kaneez center"},
      { name: "West center"},
      { name: "Nice center"},
    ]
  
  
    return (
        <div className={classes.container}>
            <Typography varient="h4">
                Hotel , Attractions & Restaurant
            </Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e)=>setType(e.target.value)}>
                    <MenuItem value="restaurants">Restaurant</MenuItem>
                    <MenuItem value="hotels">Hotel</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e)=>setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3}>
                {places?.map((place,i) =>(
                    <Grid item xs={12} key={i}>
                        <Placeholder place={place}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default List;
