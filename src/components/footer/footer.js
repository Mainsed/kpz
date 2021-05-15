import React from 'react'
import {
    Paper,
    Grid,
    Typography,
} from '@material-ui/core'
import {NavLink} from 'react-router-dom'
import '../../index.css'

const Footer = () => {
    return <Grid container justify={"space-evenly"} className='footer'>
        <Grid item xs={4}>
            <Typography align={"center"}>left</Typography>
        </Grid>
        <Grid item xs={4}>
            <Typography align={"center"}>mid</Typography>
        </Grid>
        <Grid item xs={4}>
            <Typography align={"center"}>right</Typography>
        </Grid>
    </Grid>
}

export default Footer;