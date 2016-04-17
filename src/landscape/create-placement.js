import {mergeLandscape} from '../action-creators/action-creators'

export default function(options={}) {
    const useOptions = {
        x:0,
        y:0,
        width: 1,
        height: 1,
        ...options,
        skin: {
            id: "rectangle",
            fill1: "#4A90E2",
            ...options.skin
        }
    };
    const id = "placement_"+Date.now();

    mergeLandscape(id, useOptions)
}