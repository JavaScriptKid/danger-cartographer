/* Shape: building */

var shapeWidth = 4;
var shapeHeight = 4;

export default {
    shapeDetails: {
        width: shapeWidth,
        height: shapeHeight
    },
    shapeMarkup: function(cellSize, width, height, fill1) {
        return (
            <svg viewBox={`0 0 ${16*shapeWidth} ${16*shapeHeight}`}  width={width} height={height}>
                <rect fill={fill1} width="64" height="64"></rect>
                <rect x="0" y="0" fill={"#4B586A"} width="64" height="32"></rect>
                <rect  x="4" y="48" fill="hsla(0,0%,0%,.5)" width="26" height="12" ></rect>
                <rect  x="34" y="48" fill="hsla(0,0%,0%,.5)" width="26" height="12" ></rect>
            </svg>
        )
    }
}