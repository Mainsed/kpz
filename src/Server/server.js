import express from 'express'
import router from "./router.js"
import axios from "axios"

const app = express();

app.use(express.json());

app.use('/places', router)

app.use((req, res, next) => {
    console.log(req.body, req.url, req.method);
    next();
})

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(5000, ()=>console.log('SERVER STARTED AT 5000'))

axios.get('http://localhost:5000/places')
//axios.put('http://localhost:5000/places', {a:1123, b:2523, c: 4363})