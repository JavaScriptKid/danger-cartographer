import React from 'react'
import { connect } from 'react-redux'


//Lets get ugly for a second
import {rectangle, sidetable, fullTable, building} from '../skins/skins'


@connect((state, props) => {
    return {
        landscapePlacements: state.landscapePlacements,
        mapWidthInPx: state.details.width * 16,
        mapHeightInPx: state.details.height * 16,
    }
})

class SvgViewer extends React.Component {

    render() {

        /* Sort by Objects and Rectangles */
        const models = Object.keys(this.props.landscapePlacements).map(p => {
            return this.props.landscapePlacements[p];
        });

        const rectangles = models.filter(model => {
            return (model.type != "object") /* This should maybe be more specific if making more than 2 groups later */
        }) ;
        const objects = models.filter(model => {
            return (model.type == "object") /* This should maybe be more specific if making more than 2 groups later */
        });





        const placements = [...rectangles, ...objects].map((model, i) => {


            const width = model.width * 16;
            const height = model.height * 16;


            var skinSvg = null;
            if (model.skin.id == "rectangle") {
                skinSvg = rectangle(width, height, model.skin.fill1);
            }

            if (model.skin.id == "sidetable") {
                skinSvg = sidetable(16, width, height, model.skin.fill1);
            }

            if (model.skin.id == "fulltable") {
                skinSvg = fullTable(16, width, height, model.skin.fill1);
            }

            //if (model.skin.id == "building") {
            //    skinSvg = building(16, width, height, model.skin.fill1);
            //}

            const style = {
                position: 'relative',
                zIndex: model.type == "object" ? 10 : 9
            };

            return (
                <svg style={style} x={model.x * 16} y={model.y * 16} key={i+"-minimap"}>
                    {skinSvg}
                </svg>
            )

        });

        return (
            <div className="svg-viewer-container">
               <svg  width={this.props.mapWidthInPx} height={this.props.mapHeightInPx}>
                   {placements}
               </svg>
            </div>
        );
    }
}




export default SvgViewer;