import createStore from './create-store'

const store = createStore({
    details: {
        width: 13,
        height: 7
        //backgroundUrl: ""
    },
    viewSettings: {
        cellSize: 50
    }
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