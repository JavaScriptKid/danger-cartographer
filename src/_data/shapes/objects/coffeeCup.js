/* Shape: coffeecup */

var shapeWidth = 1;
var shapeHeight = 1;
    const style = {
        position:'relative',
        transform: `translate3d(${-127.5}px, ${-47.5}px, 0)`
    };

export default {
    shapeDetails: {
        width: shapeWidth,
        height: shapeHeight
    },
    shapeMarkup: function(cellSize, width, height, fill1) {
        return (
            <svg viewBox={`0 0 ${16*shapeWidth} ${16*shapeHeight}`}  width={width} height={height}>
                <ellipse fill="#EADCCE" cx="8" cy="8" rx="3.3" ry="1.9" ></ellipse>
                <ellipse fill="#C1B3A7" cx="8" cy="6.6" rx="1.9" ry="0.9" ></ellipse>
                <ellipse fill="#C1B3A7" cx="8" cy="8" rx="2.5" ry="1.02"></ellipse>
                <path style={style} fill={fill1} d="M136.7,55.3c0.2,0,0.3,0,0.4-0.1c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0.2-0.3,0.2-0.5c0-0.1,0-0.2-0.1-0.2    c-0.2-0.2-0.3,0.2-0.3,0.3C137,54.9,136.9,55.1,136.7,55.3c-0.1,0.1-0.2,0.3-0.4,0.3c-0.1,0.1-0.3,0.1-0.5,0.2    c-0.3,0.1-0.7,0.1-1,0c-0.1,0-0.2,0-0.3-0.1c-0.1,0-0.2-0.1-0.2-0.2c-0.1-0.1-0.3-0.3-0.4-0.4c-0.1-0.1-0.3-0.3-0.3-0.4    c-0.1-0.2-0.1-0.5-0.1-0.8c0.1,0.3,0.5,0.5,0.7,0.5c0.3,0.1,0.6,0,0.9,0c0.7-0.1,1.5-0.1,2.2-0.2" ></path>
            </svg>
        )
    }
}