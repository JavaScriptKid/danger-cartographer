import {mergeLandscape, setCursorValue} from '../action-creators/action-creators'

export function createPlacement(options={}, setAsActive=true) {
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

export function handleCreateLandscape(x,y) {
    createPlacement({
        x: x,
        y: y,
        width: 1,
        height: 1,
        skin: {
            id: "rectangle",
            fill1: "#b4da55",
        }
    });
    setCursorValue({showCreateMenu:false})
}

export function handleCreateStructure(x,y) {
    createPlacement({
        x: x,
        y: y,
        width: 1,
        height: 2,
        type: "structure",
        skin: {
            id: "sidetable",
            fill1: "#8B5B55",
        }
    });
    setCursorValue({showCreateMenu:false})
}

export function handleCreateObject(x,y) {
    createPlacement({
        x: x,
        y: y,
        width: 1,
        height: 1,
        type: "object",
        skin: {
            id: "coffeeCup",
            fill1: "#B27D4D",
        }
    });
    setCursorValue({showCreateMenu:false})
}