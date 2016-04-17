import React from 'react'
import { connect } from 'react-redux'

import {rectangle} from '../skins/skins'
import PlacementCorner from './placement-corner'

import {setCursorValue, mergeLandscape} from '../action-creators/action-creators'

@connect((state, props) => {
    return {
        cellSize: state.viewSettings.cellSize,
        isSelectedDragging: state.cursor.draggingId == props.id,
        dragCellX: state.cursor.dragCellX,
        dragCellY: state.cursor.dragCellY,
        dragCorner: state.cursor.dragCorner,
        isDragging: state.cursor.isDragging,

        xDistance: state.cursor.xDistance,
        yDistance: state.cursor.yDistance,

        xStart: state.cursor.xStart,
        yStart: state.cursor.yStart,

        isSelectedElement: state.cursor.selectedElement == props.id
    }
})

class LandscapePlacement extends React.Component {


    componentWillReceiveProps(newProps) {
        if (newProps.isSelectedDragging) {


            /* THIS IS A GRAB */
            if (!newProps.dragCorner.length) {

                if (newProps.xDistance >= this.props.cellSize) {
                    setCursorValue({ xDistance: 0, xStart: newProps.xStart + newProps.xDistance });
                    mergeLandscape(this.props.id, {
                        x: newProps.model.x+1
                    });
                    return;
                }

                if (newProps.xDistance <= -this.props.cellSize) {
                    setCursorValue({ xDistance: 0, xStart: newProps.xStart + newProps.xDistance });
                    mergeLandscape(this.props.id, {
                        x: (newProps.model.x>0) ? newProps.model.x-1: 0
                    });
                    return;
                }

                if (newProps.yDistance >= this.props.cellSize) {
                    setCursorValue({ yDistance: 0, yStart: newProps.yStart + newProps.yDistance });
                    mergeLandscape(this.props.id, {
                        y: newProps.model.y+1
                    });
                    return;
                }

                if (newProps.yDistance <= -this.props.cellSize) {
                    setCursorValue({ yDistance: 0, yStart: newProps.yStart + newProps.yDistance });
                    mergeLandscape(this.props.id, {
                        y: (newProps.model.y>0) ? newProps.model.y-1 : 0
                    });
                    return;
                }

                return;
            }


            if (newProps.dragCellX != this.props.dragCellX || newProps.dragCellY != this.props.dragCellY) {

                const x = newProps.model.x;
                const y = newProps.model.y;
                const newDestX = newProps.dragCellX;
                const newDestY = newProps.dragCellY;

                //console.log(newDestX, newDestY)

                /* THIS IS A CORNER DRAG */

                if (this.props.dragCorner.indexOf('right') > -1) {

                    const newW = newDestX - x+1;
                    const newH = newDestY - y+1;


                    mergeLandscape(this.props.id, {
                        width: (newW > 1) ? newW : 1,
                        height: (newH > 1) ? newH : 1
                    })
                }

            }
        }
    }

    handleGrab() {

        /* select placement */
        setCursorValue({
            selectedElement: this.props.id,

            isDragging: true,
            draggingId: this.props.id,
            dragCorner: []
        })
    }

    handleDoubleClick() {
        console.log('click')
    }


    renderCorners() {
        //OTHER CORNERS ARE `NICE TO HAVE`
        return (
            <div className="placement-corners-container">
                {/*<PlacementCorner placementId={this.props.id} corner={["top", "left"]} class="js-placement-corner placement-corner-top-left" />*/}
                {/*<PlacementCorner placementId={this.props.id} corner={["top", "right"]} class="js-placement-corner placement-corner-top-right" />*/}
                {/*<PlacementCorner placementId={this.props.id} corner={["bottom", "left"]} class="js-placement-corner placement-corner-bottom-left" />*/}
                <PlacementCorner placementId={this.props.id} corner={["bottom", "right"]} class="js-placement-corner placement-corner-bottom-right" />
            </div>
        )
    }

    render() {
        const model = this.props.model;

        const style = {
            position: "absolute",
            pointerEvents: this.props.isDragging ? "none" : "all",
            left: model.x * this.props.cellSize,
            top: model.y * this.props.cellSize
            //transform: `translate3d(${this.props.xDistance}px, ${this.props.yDistance}px, 0)`
        };
        const width = (model.width * this.props.cellSize);
        const height = (model.height * this.props.cellSize);
        const selectedClass = this.props.isSelectedElement ? "selected-placement" : "";

        return (
            <div style={style} className={`landscape-placement ${selectedClass}`} onMouseDown={::this.handleGrab}>
                {rectangle(width, height, model.skin.fill1)}
                {this.renderCorners()}
            </div>
        );
    }
}

export default LandscapePlacement;