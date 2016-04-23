/* Shape: door */

var shapeWidth = 1;
var shapeHeight = 1;

export default {
    shapeDetails: {
        width: shapeWidth,
        height: shapeHeight
    },
    shapeMarkup: function(cellSize, width, height, fill1) {
        return (
            <svg viewBox={`0 0 ${16*shapeWidth} ${16*shapeHeight}`}  width={width} height={height}>
                <polygon points="0,0 0,16 2,16 2,2 14,2 14,16" />
                <polygon points="0,0 2,2 14,2 16,0" />
            </svg>

        )
    }
}


/*

 <svg xmlns="http://www.w3.org/2000/svg" x="32" y="112" data-reactid=".0.0.3">
    <polygon points="0,0 0,16 2,16 2,2 14,2 14,16" data-reactid=".0.0.3.0"/>
    <polygon points="0,0 2,2 14,2 16,0" data-reactid=".0.0.3.1"/>
    </svg>
 */