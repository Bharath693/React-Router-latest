import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from "./Redux/ReduxStore/ReduxStore";
import {Routes} from "react-router-dom"
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
,document.getElementById('root'));
