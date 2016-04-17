import React from 'react'

export function rectangle(width, height, fill1) {
    return (
        <svg width={width} height={height}>
            <g strokeWidth="0" fill="none" fill-rule="evenodd">
                <rect fill={fill1} x="0" y="0" width={width} height={height}></rect>
            </g>
        </svg>
    )
}

export function table(cellSize, width, height, fill1, fill2) {
    //return (
    //    <svg width={width} height={height}>
    //        <polygon points="0,0 0, 32 4,32 4,29 12,29 12,32 16,32 16,0"></polygon>
    //        <svg y="28">
    //            <rect class="shadow" width="16" height="8"></rect>
    //        </svg>
    //    </svg>
    //)
    const half = cellSize / 2;
    const four = cellSize * 0.125;
    const twelve = cellSize * 0.375;
    const twentynine = cellSize * 0.906;
    const twentyeight = cellSize * 0.875;
    return (
        <svg width={width} height={height}>
            <polygon fill={fill1} points={`0,0  0,${cellSize}  ${four},${cellSize}  ${four},${twentynine}  ${twelve},${twentynine}  ${twelve},${cellSize}  ${half},${cellSize}  ${half},0`}></polygon>
            <svg y={twentyeight}>
                <rect fill="#03547c" opacity="0.5" width={width/2} height={width/4}></rect>
            </svg>
        </svg>
    )
}