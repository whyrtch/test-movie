import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";

import appReducer from './reducer'
import thunk from 'redux-thunk'

const reduxStore  = createStore(
    appReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

export default reduxStore