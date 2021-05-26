import React from "react";
import './showPlaceComponent.css'
import {
    Grid,
    Typography,
    Paper
} from "@material-ui/core"

function showPlaceComponent(props) {
    const place = props.places.filter((place) => place.url === '/' + props.match.params.name)[0];
    return !place ? 'Місця не існує' :
        (
            <Grid container justify={"center"}>
                <Grid item xs={10}>
                    <Paper elevation={10} className='showPlacePaper'>
                        <Grid container justify={"center"}>
                            <Typography align={"center"} variant={"h3"}>{place.name}</Typography>
                            <Grid item xs={12} sm={12} md={9} className='imgWrap'>
                                <img src={place.img} alt={place.name} className='img'/>
                            </Grid>
                            <Grid container justify={"space-evenly"} alignItems={"center"} className='imgWrap'>
                                {place.addImages.map((img, i) => {
                                    return <Grid xs={2}>
                                        <img src={img} alt={place.name + i} className='img'/>
                                    </Grid>
                                })}
                            </Grid>
                            <Typography align={"justify"}>{place.mainText}</Typography>
                            <Grid container justify={"space-evenly"} alignItems={'center'}>
                                <Typography variant={'h6'}><a className='officialUrl' href={place.web_site}>
                                    Офіційна веб-сторінка
                                </a></Typography>
                                <Typography variant={'h6'}>Адресса: {place.address}</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        );
}

export default showPlaceComponent;
