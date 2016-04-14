import { createStore, applyMiddleware, combineReducers } from 'redux'
import * as canvasReducer from '../redux-reducers/canvas-reducer'
import * as detailsReducer from '../redux-reducers/details-reducer'
import * as viewSettingsReducer from '../redux-reducers/view-settings-reducer'
import * as landscapePlacementsReducer from '../redux-reducers/landscape-placements-reducer'

export default function(data) {
    var reducer = combineReducers({
        ...detailsReducer,
        ...canvasReducer,
        ...viewSettingsReducer,
        ...landscapePlacementsReducer,
    });

    var store = createStore(reducer, data);
    return store
}