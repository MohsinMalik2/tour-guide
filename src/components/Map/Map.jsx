import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery} from '@material-ui/core';
import { LocationOnOutlinedIcon } from '@material-ui/icons/LocationOnOutlined';

import useStyles from './style';

const Map = () => {

    const classes = useStyles();
    const mobileCheck = useMediaQuery('(min-width: 600px;)');
   
    const coordinates = {lng: 0,lat: 0};
  return (
        <div className={classes.mapContainer}>  
            <GoogleMapReact
                bootstrapURLKeys={{key: "AIzaSyCltkrefYEJ36bd1q-VljZM82dQrS9SlNQ"}}
                margin={[50,50,50,50]}
                center={coordinates}
                defaultCenter={coordinates}
                defaultZoom={14}
                options={""}
                onChange={""}
                onChildClick={""}

            >

            </GoogleMapReact>
           
        </div>
    );
}

export default Map;
