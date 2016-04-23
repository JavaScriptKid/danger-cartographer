/* Shape: sidetable */

var shapeWidth = 1;
var shapeHeight = 2;

export default {
    shapeDetails: {
        width: shapeWidth,
        height: shapeHeight
    },
    shapeMarkup: function(cellSize, width, height, fill1) {
        return (
            <svg viewBox={`0 0 ${16*shapeWidth} ${16*shapeHeight}`}  width={width} height={height}>
                <polygon fill={fill1} points="0,0 0, 32 4,32 4,29 12,29 12,32 16,32 16,0"></polygon>
                <svg y="28">
                    <rect fill="#03547c" opacity="0.5" width="16" height="8"></rect>
                </svg>
            </svg>
        )
    }
}