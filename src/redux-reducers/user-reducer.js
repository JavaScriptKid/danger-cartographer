import { setValue } from './reducer-utilities'

export function user(state = {}, action) {
    switch (action.type) {
        case "SET_USER_VALUE":
            return setValue(state, action.payload.changes);
        default:
            return state;
    }
}