import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from "redux";
import dataReducer from "./reducers/dataReducer";
import { Provider} from "react-redux";

const store = createStore(dataReducer);

store.subscribe(() => console.log("heyy " ,store.getState()));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);