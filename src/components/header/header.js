import React from 'react'
import {
    Paper,
    Grid,
    Typography,
} from '@material-ui/core'
import {NavLink} from 'react-router-dom'
import '../../index.css'

const Header = () => {
    return <Grid container justify={"space-evenly"} className='header'>
        <Grid item xs={4}>
            <Typography align={"center"}>
                <NavLink className='placeUrl homeUrl btn' to='/'>Home</NavLink>
            </Typography>
        </Grid>
        <Grid item xs={4}>
            <Typography align={"center"}>Пам'ятки запоріжжя</Typography>
        </Grid>
        <Grid item xs={4}>
            <Typography align={"center"}>
                <NavLink className='placeUrl btn' to='/place/create'>Додати місце</NavLink>
                </Typography>
        </Grid>
    </Grid>
}

export default Header;