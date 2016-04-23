
/* initial Rectangle shape */
const initialShapes = {
    rectangle: {
        shapeDetails: {
            width: 1,
            height: 1,
        },
        shapeMarkup: function(cellSize, width, height, fill1) {
            return (
                <svg width={width} height={height}>
                    <g strokeWidth="0" fill="none" fill-rule="evenodd">
                        <rect fill={fill1} x="0" y="0" width={width} height={height}></rect>
                    </g>
                </svg>
            )
        }
    }
};


/* Shapes module */
var Shapes = {
    shapes: {...initialShapes},

    getStructures: function() {
        var structures = {};
        for (var i in Shapes.shapes) {
            if (Shapes.shapes[i].type == "structure") {
                structures[i] = {...Shapes.shapes[i]}
            }
        }
        return structures;
    },

    getObjects: function() {
        var objects = {};
        for (var i in Shapes.shapes) {
            if (Shapes.shapes[i].type == "object") {
                objects[i] = {...Shapes.shapes[i]}
            }
        }
        return objects;
    }

};



/* Populate Shapes with stuff from the directories */
var req = require.context("./structures", true, /^(.*\.(js$))[^.]*$/igm);
req.keys().forEach(function(key){

    const structure = req(key);
    const keyName = key.replace('./', '').replace('.js', '');

    Shapes.shapes[keyName] = {
        shapeDetails: {
            width: 0,
            height: 0,
            ...structure.shapeDetails, /* Merge in the real values */

            skin: {
                id: keyName,
                fill1: "red"
            }
        },
        shapeMarkup: structure.shapeMarkup,
        type: "structure"
    };
});

export default Shapes