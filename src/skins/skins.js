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