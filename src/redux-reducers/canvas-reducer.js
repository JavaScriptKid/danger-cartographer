import { editNode, removeNode } from './reducer-utilities'

export function canvas(state = {}, action) {
    switch (action.type) {

        case "MERGE_THING":
            return editNode(state, action.payload.key, {
                ...action.payload.changes
            });


        default:
            return state;
    }
}
