import store from './init/store'
import {setCursorValue} from './action-creators/action-creators'

export function startLandscapeDragBindings() {

    $('body').on('mousedown', '.js-placement-corner', function(e) {
        setCursorValue({
            xStart: e.clientX,
            yStart: e.clientY
        });
    });

    const $window = $(window);
    $window.on('mousemove.landscape-drag-bindings', function (e) {
        const cursor = store.getState().cursor;
        if (cursor.isDragging) {
            //console.log('moving')
            setCursorValue({
                //xDistance: e.clientX - cursor.xStart,
                //yDistance: e.clientY - cursor.yStart
            });
        }
    });

    $window.on('mouseup.landscape-drag-bindings', function (e) {
        if (store.getState().cursor.isDragging) {
            setCursorValue({
                isDragging: false,
                draggingId: null,
                dragCellX: null,
                dragCellY: null,
                dragCorner: []
                //xDistance: null,
                //yDistance: null
            })
        }
    });
}

export function removeLandscapeDragBindings() {
    $(window).off('landscape-drag-bindings');
}