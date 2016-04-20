import store from './init/store'
import {setCursorValue, deletePlacement} from './action-creators/action-creators'

export function startLandscapeDragBindings() {

    $('body').on('mousedown', '.placement-corners-container', function(e) {
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
                xDistance: e.clientX - cursor.xStart,
                yDistance: e.clientY - cursor.yStart
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
                dragCorner: [],
                xDistance: 0,
                yDistance: 0
            })
        }
    });

    $(document).on('keydown', function(e) {
        /* ESC - Backspace - delete a placement */
        if (e.keyCode == 8) {

            if ($('input').is(':focus')) {
                return;
            }

            e.preventDefault();
            const elementIdToDelete = store.getState().cursor.selectedElement;
            setCursorValue( {selectedElement: null });
            deletePlacement( elementIdToDelete )
        }

        /* ESC - deselect a placement */
        if (e.keyCode == 27) {
            e.preventDefault();
            setCursorValue( {selectedElement: null });
        }

    })

    $(document).on('click', function(e) {
        if ( $(e.target).hasClass('js-deselect-click')) {
            setCursorValue( {selectedElement: null });
        }
    });

}

export function removeLandscapeDragBindings() {
    $(window).off('landscape-drag-bindings');
}