/* Gather latest state of the current project, send to firebase */
import store from '../init/store'

export default function(newState) {
    if (!newState) {
        return;
    }

    store.dispatch({
        type: "SET_ALL_LANDSCAPES",
        payload: {
            ...newState.landscapePlacements
        }
    });
    store.dispatch({
        type: "SET_ALL_DETAILS",
        payload: {
            ...newState.details
        }
    });
}