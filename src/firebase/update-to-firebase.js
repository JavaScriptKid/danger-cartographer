/* Gather latest state of the current project, send to firebase */
import store from '../init/store'
import getSvgMarkup from '../svg-viewer/get-svg-markup'

export default function() {
    const viewingGraphic = store.getState().user.viewingGraphic;

    if (!viewingGraphic) {
        return null;
    }
    const firebaseRef = store.getState().user.firebaseUrl + '/graphics';

    var graphicsRef = new Firebase(firebaseRef);


    const graphicSnapshot = {
        svgPreview: getSvgMarkup(),
        details: {...store.getState().details},
        canvas: {...store.getState().canvas}, //This might always be old / always blank?
        landscapePlacements: {...store.getState().landscapePlacements}
    };

    graphicsRef.child(viewingGraphic).set({
        ...graphicSnapshot
    })
}