import {mergeLandscape, setCursorValue} from '../action-creators/action-creators'
import store from '../init/store'
//import Structure from '../_data/structures'
import Shapes from '../_data/shapes'


export function mergePlacement(options={}, setAsActive=true) {
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
    mergePlacement({
        x: x,
        y: y,
        width: 1,
        height: 1,
        skin: {
            id: "rectangle",
            fill1: "#50E3C2",
        }
    });
    setCursorValue({showCreateMenu:false})
}

export function handleCreateStructure(x,y) {

    //const structure = Structure[store.getState().cursor.useStructure];
    const structure = Shapes.shapes[store.getState().cursor.useStructure]

    if (!structure) {
        console.warn('Structure not found in handleCreateStructure:',store.getState().cursor.useStructure );
        return;
    }

    mergePlacement({
        x: x,
        y: y,
        type: "structure",
        ...structure.shapeDetails
    });
}

export function handleCreateObject(x,y) {
    mergePlacement({
        x: x,
        y: y,
        width: 1,
        height: 1,
        type: "object",
        skin: {
            id: "coffeecup",
            fill1: "#B27D4D",
        }
    });
    setCursorValue({showCreateMenu:false})
}

export default function createPlacement(x,y) {

    const selectedCreateTool = store.getState().cursor.selectedCreateTool

    if (selectedCreateTool == "landscape") {
        handleCreateLandscape(x, y);
    }
    if (selectedCreateTool == "structure") {
        handleCreateStructure(x, y);
    }
    if (selectedCreateTool == "object") {
        handleCreateObject(x, y);
    }
}