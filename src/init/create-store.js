import { createStore, applyMiddleware, combineReducers } from 'redux'
import * as canvasReducer from '../redux-reducers/canvas-reducer'

export default function(data) {
    var reducer = combineReducers({
        ...canvasReducer
    });

    var store = createStore(reducer, data);
    return store
}