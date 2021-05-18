import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import RouteController from "./RouterController";
import {Provider} from 'react-redux'
import store from './Redux/store'
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <RouteController />
                <Footer />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);