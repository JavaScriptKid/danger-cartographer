//import React from 'react'
//
//export function rectangle(width, height, fill1) {
//    return (
//        <svg width={width} height={height}>
//            <g strokeWidth="0" fill="none" fill-rule="evenodd">
//                <rect fill={fill1} x="0" y="0" width={width} height={height}></rect>
//            </g>
//        </svg>
//    )
//}
//
//export function sidetable(cellSize, width, height, fill1) {
//    /* viewBox needs to match the size of the shape... 1x2, 2x2, etc. 16 = 1 cell */
//    return (
//        <svg viewBox="0 0 16 32" width={width} height={height}>
//            <polygon fill={fill1} points="0,0 0, 32 4,32 4,29 12,29 12,32 16,32 16,0"></polygon>
//            <svg y="28">
//                <rect fill="#03547c" opacity="0.5" width="16" height="8"></rect>
//            </svg>
//        </svg>
//    )
//}
//
//export function fullTable(cellSize, width, height, fill1, fill2) {
//    return (
//        <svg viewBox="0 0 32 32"  width={width} height={height}>
//            <polygon fill={fill1} points="0,0 0,32 4,32 4,29 28,29 28,32 32,32 32,0"></polygon>
//            <svg y="28">
//                <rect fill="#03547c" opacity="0.5" width="32" height="8"></rect>
//            </svg>
//        </svg>
//    )
//}
//
//export function building(cellSize, width, height, fill1) {
//    return (
//
//        <svg viewBox="0 0 64 128"  width={width} height={height}>
//            <rect fill={fill1} width="64" height="128"></rect>
//            <rect  x="8" y="64" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
//            <rect  x="16" y="64" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
//            <rect  x="24" y="64" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
//            <rect  x="32" y="64" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
//            <rect  x="40" y="64" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
//            <rect  x="48" y="64" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
//            <rect  x="8" y="80" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
//            <rect  x="16" y="80" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
//            <rect  x="24" y="80" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
//            <rect  x="32" y="80" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
//            <rect  x="40" y="80" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
//            <rect  x="48" y="80" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
//            <rect  x="8" y="96" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
//            <rect  x="16" y="96" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
//            <rect  x="24" y="96" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
//            <rect  x="32" y="96" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
//            <rect  x="40" y="96" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
//            <rect  x="48" y="96" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
//            <rect  x="8" y="112" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
//            <rect  x="16" y="112" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
//            <rect  x="24" y="112" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
//            <rect  x="32" y="112" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
//            <rect  x="40" y="112" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
//            <rect  x="48" y="112" fill="hsla(0,0%,0%,.5)" width="8" height="8" ></rect>
//            <rect  x="0" y="0" fill="hsla(200, 95%, 25%, .5)" width="64" height="64" ></rect>
//        </svg>
//
//    )
//}
//
//export function coffeeCup(cellSize, width, height, fill1) {
//    const style = {
//        position:'relative',
//        transform: `translate3d(${-127.5}px, ${-47.5}px, 0)`
//    };
//    return (
//        <svg viewBox="0 0 16 16" x="0" y="0" width={width} height={height}>
//            <ellipse fill="#EADCCE" cx="8" cy="8" rx="3.3" ry="1.9" ></ellipse>
//            <ellipse fill="#C1B3A7" cx="8" cy="6.6" rx="1.9" ry="0.9" ></ellipse>
//            <ellipse fill="#C1B3A7" cx="8" cy="8" rx="2.5" ry="1.02"></ellipse>
//            <path style={style} fill={fill1} d="M136.7,55.3c0.2,0,0.3,0,0.4-0.1c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0.2-0.3,0.2-0.5c0-0.1,0-0.2-0.1-0.2    c-0.2-0.2-0.3,0.2-0.3,0.3C137,54.9,136.9,55.1,136.7,55.3c-0.1,0.1-0.2,0.3-0.4,0.3c-0.1,0.1-0.3,0.1-0.5,0.2    c-0.3,0.1-0.7,0.1-1,0c-0.1,0-0.2,0-0.3-0.1c-0.1,0-0.2-0.1-0.2-0.2c-0.1-0.1-0.3-0.3-0.4-0.4c-0.1-0.1-0.3-0.3-0.3-0.4    c-0.1-0.2-0.1-0.5-0.1-0.8c0.1,0.3,0.5,0.5,0.7,0.5c0.3,0.1,0.6,0,0.9,0c0.7-0.1,1.5-0.1,2.2-0.2" ></path>
//        </svg>
//    )
//}