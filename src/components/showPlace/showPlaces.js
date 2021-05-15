import React from 'react'
import {
    Paper,
    Grid,
    Typography,
} from '@material-ui/core'
import {NavLink} from 'react-router-dom'
import '../../index.css';

const ShowPlaces = (props) => {
    return <NavLink to={props.url} className='placeUrl'>
        <Paper elevation={5} className='placeWrap placePaper'>
            <Grid container justify={"space-evenly"} alignItems='center'>
                <Grid item xs={12} md={5}>
                    <img align={'center'} src={props.img} alt={props.name} className='placeImg'/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant={"h5"} align={"center"}>{props.name}</Typography>
                    <Typography align={"center"}>
                        {props.shortText}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    </NavLink>
}

export default ShowPlaces;