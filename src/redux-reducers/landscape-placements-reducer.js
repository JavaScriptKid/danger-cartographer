import { editNode, removeNode } from './reducer-utilities'

export function landscapePlacements(state = {}, action) {
    switch (action.type) {

        case "MERGE_LANDSCAPE":
            return editNode(state, action.payload.key, {
                ...action.payload.changes
            });

        case "REMOVE_LANDSCAPE":
            return removeNode(state, action.payload.key);

        case "SET_ALL_LANDSCAPES": /* INCOMING FIREBASE UPDATE */
            return {
                ...action.payload /* NOTE: not a merge. */
            };

        default:
            return state;
    }
}