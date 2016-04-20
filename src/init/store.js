import createStore from './create-store'

const store = createStore({
    details: {
        width: 10,
        height: 10
        //backgroundUrl: ""
    },
    viewSettings: {
        cellSize: 20,//50
    },
    cursor: {
        selectedElement: null,
        isDragging: false,
        xStart: null,
        yStart: null,
        xDistance: null,
        yDistance: null,
        lastChosenX: 0,
        lastChosenY: 0,
        showCreateMenu: false
    },
    landscapePlacements: {
        //"xyz12": {
        //    x: 0,
        //    y: 0,
        //    width: 6,
        //    height: 1,
        //    type: null,
        //    skin: {
        //        id: "rectangle",
        //        fill1: "#BD10E0",
        //        fill2: null,
        //        fill3: null,
        //        fill4: null
        //    }
        //},
        "objectA": {
            x: 1,
            y: 3,
            width: 1, //Must be this size
            height: 2, //Must be this size
            type: "structure",
            skin: {
                id: "sidetable",
                fill1: "#8B572A",
                fill2: null,
                fill3: null,
                fill4: null
            }
        },
        //"objectB": {
        //    x: 3,
        //    y: 5,
        //    width: 2, //Must be this size
        //    height: 2, //Must be this size
        //    type: "structure",
        //    skin: {
        //        id: "fulltable",
        //        fill1: "#8B572A",
        //        fill2: null,
        //        fill3: null,
        //        fill4: null
        //    }
        //},
        //"objectC": {
        //    x: 7,
        //    y: 1,
        //    width: 4, //Must be this size
        //    height: 8, //Must be this size
        //    type: "structure",
        //    skin: {
        //        id: "building",
        //        fill1: "rgb(167, 78, 63)",
        //        fill2: null,
        //        fill3: null,
        //        fill4: null
        //    }
        //},
        //"objectD": {
        //    x: 3,
        //    y: 1,
        //    width: 4, //Must be this size
        //    height: 8, //Must be this size
        //    type: "structure",
        //    skin: {
        //        id: "building",
        //        fill1: "rgb(167, 78, 63)",
        //        fill2: null,
        //        fill3: null,
        //        fill4: null
        //    }
        //},
        //"objectE": {
        //    x: 1,
        //    y: 1,
        //    width: 1, //Must be this size
        //    height: 1, //Must be this size
        //    type: "object",
        //    skin: {
        //        id: "coffeeCup",
        //        fill1: "#B27D4D",
        //        fill2: null,
        //        fill3: null,
        //        fill4: null
        //    }
        //},
        //
        //"xyz13": {
        //    x: 2,
        //    y: 1,
        //    width: 4,
        //    height: 3,
        //    type: null,
        //    skin: {
        //        id: "rectangle",
        //        fill1: "#50E3C2",
        //        fill2: null,
        //        fill3: null,
        //        fill4: null
        //    }
        //}
    }
});

export default store;