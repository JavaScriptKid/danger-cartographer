import {mergeLandscape, setCursorValue} from '../action-creators/action-creators'

export default function(options={}, setAsActive=true) {
    const useOptions = {
        x:0,
        y:0,
        width: 1,
        height: 1,
        type: null,
        ...options,
        skin: {
            id: "rectangle",
            fill1: "#4A90E2",
            ...options.skin
        }
    };
    const id = "placement_"+Date.now();

    mergeLandscape(id, useOptions);

    if (setAsActive) {
        setCursorValue({
            selectedElement: id
        })
    }
}