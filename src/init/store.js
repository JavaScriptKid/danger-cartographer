import createStore from './create-store'

const store = createStore({
    details: {
        width: 13,
        height: 7
        //backgroundUrl: ""
    },
    viewSettings: {
        cellSize: 50
    },
    cursor: {
        isDragging: false,
        xStart: null,
        yStart: null,
        xDistance: null,
        yDistance: null
    },
    landscapePlacements: {
        "xyz12": {
            x: 0,
            y: 0,
            width: 6,
            height: 1,
            skin: {
                id: "rectangle",
                fill1: "#ff00ff",
                fill2: null,
                fill3: null,
                fill4: null
            }
        },
        "xyz13": {
            x: 2,
            y: 1,
            width: 4,
            height: 3,
            skin: {
                id: "rectangle",
                fill1: "#50E3C2",
                fill2: null,
                fill3: null,
                fill4: null
            }
        }
    }
    //objects: {
    //    "2x1": {
    //        skin: "colorBlock",
    //        width: 2,
    //        height: 2,
    //        backgroundColor: "#6A808B"
    //    }
    //}
    //cells: {
    //    "2x2": {},
    //    "2x3": {},
    //    "2x4": {},
    //    "5x2": {}
    //},
    /* Let any of these be placeable! */
    //objects: {
    //    wall: {
    //
    //    }
    //}
});

export default store;