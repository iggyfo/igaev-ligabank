import React from 'react';
import ReactDOM from 'react-dom';
import './scss/style.scss';
import App from './js/components/app';
import {Provider} from 'react-redux';
import {createApi} from "./js/services/api";
import {loadQuotes} from "./js/store/action";
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from "./js/store/root-reducer"
import {redirect} from "./js/middlewares/redirect";

const api = createApi(
    () => store.dispatch(loadQuotes)
);

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: api
            },
        }).concat(redirect)
});


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
