import { setValue } from './reducer-utilities'

export function details(state = {}, action) {
    switch (action.type) {
        case "SET_DETAILS_VALUE":
            return setValue(state, action.payload.changes);

        default:
            return state;
    }
}
