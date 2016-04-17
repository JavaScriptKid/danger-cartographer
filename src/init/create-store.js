import { createStore, applyMiddleware, combineReducers } from 'redux'
import * as canvasReducer from '../redux-reducers/canvas-reducer'
import * as detailsReducer from '../redux-reducers/details-reducer'
import * as viewSettingsReducer from '../redux-reducers/view-settings-reducer'
import * as landscapePlacementsReducer from '../redux-reducers/landscape-placements-reducer'
import * as cursorReducer from '../redux-reducers/cursor-reducer'

export default function(data) {
    var reducer = combineReducers({
        ...detailsReducer,
        ...canvasReducer,
        ...viewSettingsReducer,
        ...landscapePlacementsReducer,
        ...cursorReducer,
    });

    var store = createStore(reducer, data,
        window.devToolsExtension ? window.devToolsExtension() : undefined
    );
    return store
}