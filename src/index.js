import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import RouteController from "./RouterController";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header/>
            <RouteController/>
            <Footer/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);