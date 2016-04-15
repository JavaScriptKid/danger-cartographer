import { setValue } from './reducer-utilities'

export function cursor(state = {}, action) {
    switch (action.type) {
        case "SET_CURSOR_VALUE":
            return setValue(state, action.payload.changes);

        default:
            return state;
    }
}
