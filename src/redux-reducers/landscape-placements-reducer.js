import { editNode, removeNode } from './reducer-utilities'

export function landscapePlacements(state = {}, action) {
    switch (action.type) {

        case "MERGE_LANDSCAPE":
            return editNode(state, action.payload.key, {
                ...action.payload.changes
            });

        default:
            return state;
    }
}