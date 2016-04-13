import { setValue } from './reducer-utilities'

export function viewSettings(state = {}, action) {
    switch (action.type) {
        case "SET_VIEW_SETTINGS_VALUE":
            return setValue(state, action.payload.changes);

        default:
            return state;
    }
}