/* Shape: building */

var shapeWidth = 4;
var shapeHeight = 8;

export default {
    shapeDetails: {
        width: shapeWidth,
        height: shapeHeight
    },
    shapeMarkup: function(cellSize, width, height, fill1) {
        return (
            <svg viewBox={`0 0 ${16*shapeWidth} ${16*shapeHeight}`}  width={width} height={height}>
                <rect fill={fill1} width="64" height="128"></rect>
                <rect  x="8" y="64" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
                <rect  x="16" y="64" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
                <rect  x="24" y="64" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
                <rect  x="32" y="64" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
                <rect  x="40" y="64" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
                <rect  x="48" y="64" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
                <rect  x="8" y="80" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
                <rect  x="16" y="80" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
                <rect  x="24" y="80" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
                <rect  x="32" y="80" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
                <rect  x="40" y="80" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
                <rect  x="48" y="80" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
                <rect  x="8" y="96" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
                <rect  x="16" y="96" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
                <rect  x="24" y="96" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
                <rect  x="32" y="96" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
                <rect  x="40" y="96" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
                <rect  x="48" y="96" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
                <rect  x="8" y="112" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
                <rect  x="16" y="112" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
                <rect  x="24" y="112" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
                <rect  x="32" y="112" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
                <rect  x="40" y="112" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
                <rect  x="48" y="112" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
                <rect  x="0" y="0" fill="hsla(200, 95%, 25%, .5)" width="64" height="64" ></rect>
            </svg>
        )
    }
}