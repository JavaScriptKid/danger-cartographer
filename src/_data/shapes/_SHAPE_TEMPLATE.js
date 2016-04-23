/*
    1. Copy the contents of this file
    2. Paste in a new file named "yourshape.js" within the `structures` or `objects` directory.
        Structure -> tables, buildings,
        Objects -> Usually hand drawn. Coffee cups, cash registers, etc
    3. Paste the contents of your SVG, not including the top level SVG tag
    4. Replace fill="whatever" to `fill={fill1}`
 */

/* Shape: {NAME OF SHAPE} */

var shapeWidth = 1;
var shapeHeight = 1;

export default {
    shapeDetails: {
        width: shapeWidth,
        height: shapeHeight
    },
    shapeMarkup: function(cellSize, width, height, fill1) {
        //Do not add comments in the SVG JSX. React will make them <spans>
        return (
            <svg viewBox={`0 0 ${16*shapeWidth} ${16*shapeHeight}`}  width={width} height={height}>
                /* ---> REPLACE THIS LINE WITH SVG CONTENT, not including the top level SVG tag <---- */
            </svg>
        )
    }
}