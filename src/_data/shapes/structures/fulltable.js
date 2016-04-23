// fulltable
export default {
    shapeDetails: {
        width: 2,
        height: 2,
    },
    shapeMarkup: function(cellSize, width, height, fill1) {
        return (
            <svg viewBox="0 0 32 32"  width={width} height={height}>
                <polygon fill={fill1} points="0,0 0,32 4,32 4,29 28,29 28,32 32,32 32,0"></polygon>
                <svg y="28">
                    <rect fill="#03547c" opacity="0.5" width="32" height="8"></rect>
                </svg>
            </svg>
        )
    }
}
