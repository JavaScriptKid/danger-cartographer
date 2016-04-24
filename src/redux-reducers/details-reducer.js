import { setValue } from './reducer-utilities'

export function details(state = {}, action) {
    switch (action.type) {
        case "SET_DETAILS_VALUE":
            return setValue(state, action.payload.changes);

        case "SET_ALL_DETAILS": /* INCOMING FIREBASE UPDATE */
            return {
                ...action.payload /* NOTE: not a merge. */
            };

        default:
            return state;
    }
}
