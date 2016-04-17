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
    /* viewBox needs to match the size of the shape... 1x2, 2x2, etc. 16 = 1 cell */
    return (
        <svg viewBox="0 0 16 32" width={width} height={height}>
            <polygon fill={fill1} points="0,0 0, 32 4,32 4,29 12,29 12,32 16,32 16,0"></polygon>
            <svg y="28">
                <rect fill="#03547c" opacity="0.5" width="16" height="8"></rect>
            </svg>
        </svg>
    )
}

export function fullTable(cellSize, width, height, fill1, fill2) {
    return (
        <svg viewBox="0 0 32 32"  width={width} height={height}>
            <polygon fill={fill1} points="0,0 0,32 4,32 4,29 28,29 28,32 32,32 32,0"></polygon>
            <svg y="28">
                <rect fill="#03547c" opacity="0.5" width="32" height="8"></rect>
            </svg>
        </svg>
    )
}