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

export function sidetable(cellSize, width, height, fill1) {
    //return (
    //    <svg width={width} height={height}>
    //        <polygon points="0,0 0, 32 4,32 4,29 12,29 12,32 16,32 16,0"></polygon>
    //        <svg y="28">
    //            <rect class="shadow" width="16" height="8"></rect>
    //        </svg>
    //    </svg>
    //)
    const sixteen = cellSize ;
    const thirtytwo = cellSize * 2;
    const four = cellSize * 0.25;
    const twelve = cellSize * 0.75;
    const twentynine = cellSize * 1.81;
    const twentyeight = cellSize * 1.75;
    return (
        <svg width={width} height={height + (cellSize / 4)}>
            <polygon fill={fill1} points={`0,0  0,${thirtytwo}  ${four},${thirtytwo}  ${four},${twentynine}  ${twelve},${twentynine}  ${twelve},${thirtytwo}  ${sixteen},${thirtytwo}  ${sixteen},0`}></polygon>
            <svg y={twentyeight}>
                <rect fill="#03547c" opacity="0.5" width={cellSize} height={cellSize/2}></rect>
            </svg>
        </svg>
    )
}

export function fullTable(cellSize, width, height, fill1, fill2) {
    //return (
    //<svg class="table" x="32" y="80" data-reactid=".0.0.8">
    //    <polygon class="table" points="0,0 0,32 4,32 4,29 28,29 28,32 32,32 32,0" data-reactid=".0.0.8.0"></polygon>
    //    <svg y="28" data-reactid=".0.0.8.1">
    //        <rect class="shadow" width="32" height="8" data-reactid=".0.0.8.1.0"></rect>
    //    </svg>
    //</svg>
    //)
    //const sixteen = width ;
    //const thirtytwo = cellSize * 2;
    //const four = cellSize * 0.25;
    //const twelve = cellSize * 0.75;
    //const twentynine = cellSize * 1.81;
    //const twentyeight = cellSize * 1.75;
    return (
        <svg width={width}>
            <polygon fill={fill1} points={`0,0  0,${thirtytwo}  ${four},${thirtytwo}  ${four},${twentynine}  ${twelve},${twentynine}  ${twelve},${thirtytwo}  ${sixteen},${thirtytwo}  ${sixteen},0`}></polygon>
            <svg y={twentyeight}>
                <rect fill="#03547c" opacity="0.5" width={cellSize} height={cellSize/2}></rect>
            </svg>
        </svg>
    )
}