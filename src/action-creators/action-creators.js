import store from '../init/store'
import updateFirebase from '../firebase/update-to-firebase'
/* the Firebase thing might be a little impure, but I'm trying it anyway */

export function setDetailsValue(changes={}) {
    store.dispatch({
        type: "SET_DETAILS_VALUE",
        payload: {
            changes: {...changes}
        }
    });

    updateFirebase();
}

export function setUserValue(changes={}) {
    store.dispatch({
        type: "SET_USER_VALUE",
        payload: {
            changes: {...changes}
        }
    });
}


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

export function mergeLandscape(id="", changes={}) {
    store.dispatch({
        type: "MERGE_LANDSCAPE",
        payload: {
            key: id,
            changes: {...changes}
        }
    });
    updateFirebase();
}

export function deletePlacement(id="") {
    store.dispatch({
        type: "REMOVE_LANDSCAPE",
        payload: {
            key: id,
        }
    });
    updateFirebase();
}
