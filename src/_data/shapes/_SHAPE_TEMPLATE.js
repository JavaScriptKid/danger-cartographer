/*
    1. Copy the contents of this file, paste in a new file "{{shape}}.js" within the `structures` or `objects` directory.
        Structure -> tables, buildings, etc
        Objects -> Usually hand drawn. Coffee cups, cash registers, etc
    2. Fill out the correct values for shapeWidth and shapeHeight
    3. Paste the contents of your SVG, not including the top level SVG tag
    4. Inject variables into the SVG
        - Replace fill="whatever" to `fill={fill1}`
        - Do not add any comments in your SVG, because React will turn them into <spans> and the export won't work right.
        - Remove any react-ids in your SVG
    5. Delete this block of comments
 */

/* Shape: **{STEP 1. __NAME_GOES__HERE}** */

var shapeWidth = 1; /* STEP 2. Width in Cells */
var shapeHeight = 1; /* STEP 2. Width in Cells */

export default {
    shapeDetails: {
        width: shapeWidth,
        height: shapeHeight
    },
    shapeMarkup: function(cellSize, width, height, fill1) {
        return (
            <svg viewBox={`0 0 ${16*shapeWidth} ${16*shapeHeight}`}  width={width} height={height}>
                {/* STEPS 3 & 4 ---> REPLACE THIS LINE WITH SVG CONTENT, not including the top level SVG tag <---- */}
            </svg>
        )
    }
}