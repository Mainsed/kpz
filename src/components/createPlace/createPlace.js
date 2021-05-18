import {
    Paper,
    Grid,
    Typography,
    Button
} from '@material-ui/core'
import axios from 'axios'
import React, {useState } from "react"
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

const CreatePlace = (props) => {
    console.log('CREATE PLACE')
    const [state, setState] = useState({
        validation: {
            name: '',
            img: '',
            shortText: '',
            mainText: '',
            addImages: '',
            url: '',
            web_site: '',
            address: ''
        }
    });

    const handleChange = (event) => {
        const { validation } = state;
        validation[event.target.name] = event.target.value;
        setState({ validation, file: state.file });
    }

    const onFormSubmit = () => {
        state.validation.addImages = state.validation.addImages.split(',')
        axios.put('http://localhost:5000/places',state.validation)
        .then((res)=>props.createPlace(state.validation))
    }

    const { name, img, shortText, mainText, addImages, url, webSite, address } = state.validation;
    return (
        <ValidatorForm onSubmit={onFormSubmit}>
            <Grid item xs={12}>
                <Paper elevation={5} /*className={classes.paper}*/>
                    <Typography align={"center"} variant={"h5"} /*className={classes.link}*/>
                        Додавання нової пам'ятки
                    </Typography>
                    <Grid container justify={'center'}>
                        <Grid item xs={12} sm={10} lg={8}>
                            <TextValidator fullWidth
                                variant={"outlined"}
                                label='Назва'
                                //className={classes.textField}
                                onChange={handleChange}
                                name="name"
                                value={name}
                                validators={['minStringLength:2', 'required']}
                                errorMessages={['Введіть мінімум 2 символи', 'Це поле обов\'язкове для заповнення']}
                            />
                            <TextValidator fullWidth
                                variant={"outlined"}
                                label='Основна картинка'
                                //className={classes.textField}
                                onChange={handleChange}
                                name="img"
                                value={img}
                                validators={['required']}
                                errorMessages={['Це поле обов\'язкове для заповнення']}
                            />
                            <TextValidator fullWidth
                                variant={"outlined"}
                                label='Short text'
                                //className={classes.textField}
                                onChange={handleChange}
                                name="shortText"
                                value={shortText}
                                validators={['required']}
                                errorMessages={['Це поле обов\'язкове для заповнення']}
                            />
                            <TextValidator fullWidth
                                variant={"outlined"}
                                label='Main text'
                                //className={classes.textField}
                                onChange={handleChange}
                                name="mainText"
                                value={mainText}
                                validators={['required']}
                                errorMessages={['Це поле обов\'язкове для заповнення']}
                            />
                            <TextValidator fullWidth
                                variant={"outlined"}
                                label='Додадкові картинки'
                                //className={classes.textField}
                                onChange={handleChange}
                                name="addImages"
                                value={addImages}
                                validators={['required']}
                                errorMessages={['Це поле обов\'язкове для заповнення']}
                            />
                            <TextValidator fullWidth
                                variant={"outlined"}
                                label='URL шлях'
                                //className={classes.textField}
                                onChange={handleChange}
                                name="url"
                                value={url}
                                validators={['required']}
                                errorMessages={['Це поле обов\'язкове для заповнення']}
                            />
                            <TextValidator fullWidth
                                variant={"outlined"}
                                label='Веб-сайт'
                                //className={classes.textField}
                                onChange={handleChange}
                                name="webSite"
                                value={webSite}
                                validators={['required']}
                                errorMessages={['Це поле обов\'язкове для заповнення']}
                            />
                            <TextValidator fullWidth
                                variant={"outlined"}
                                label='Адреса'
                                //className={classes.textField}
                                onChange={handleChange}
                                name="address"
                                value={address}
                                validators={['required']}
                                errorMessages={['Це поле обов\'язкове для заповнення']}
                            />
                            <Grid container justify={"center"}>
                                <Button variant={"contained"}
                                    type={"submit"}
                                    //className={classes.confirmButton}
                                >
                                    Створити
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </ValidatorForm>
    )
}

export default CreatePlace;