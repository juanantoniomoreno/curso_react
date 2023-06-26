import React from 'react'
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CounterApp } from './CounterApp';
/* import { FirstApp } from './FirstApp'; */

import './styles.css';

ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        {/* <FirstApp title='Hola, Soy Vegeta'/> */}
        <CounterApp value={ 0 }/>
    </React.StrictMode>
);