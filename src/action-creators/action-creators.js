import store from '../init/store'

export function setViewSettingsValue(changes={}) {
    store.dispatch({
        type: "SET_VIEW_SETTINGS_VALUE",
        payload: {
            changes: {...changes}
        }
    });
}


export function setCursorValue(changes={}) {
    store.dispatch({
        type: "SET_CURSOR_VALUE",
        payload: {
            changes: {...changes}
        }
    });
}
