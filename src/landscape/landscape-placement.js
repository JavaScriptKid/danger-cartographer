import React from 'react'
import { connect } from 'react-redux'

import {rectangle, sidetable, fullTable, building, coffeeCup} from '../skins/skins'
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

        /* Dont allow resize for Objects or Structures */
        if (this.props.model.type == "object" || this.props.model.type == "structure") {
            return null;
        }

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

    renderSkin() {
        const width = (this.props.model.width * this.props.cellSize);
        const height = (this.props.model.height * this.props.cellSize);

        if (this.props.model.skin.id == "rectangle") {
            return rectangle(width, height, this.props.model.skin.fill1);
        }

        if (this.props.model.skin.id == "sidetable") {
            return sidetable(this.props.cellSize, width, height, this.props.model.skin.fill1);
        }

        if (this.props.model.skin.id == "fulltable") {
            return fullTable(this.props.cellSize, width, height, this.props.model.skin.fill1);
        }

        if (this.props.model.skin.id == "building") {
            return building(this.props.cellSize, width, height, this.props.model.skin.fill1);
        }

        if (this.props.model.skin.id == "coffeeCup") {
            return coffeeCup(this.props.cellSize, width, height, this.props.model.skin.fill1);
        }
    }

    render() {
        const model = this.props.model;

        const style = {
            position: "absolute",
            pointerEvents: this.props.isDragging ? "none" : "all",
            left: model.x * this.props.cellSize,
            top: model.y * this.props.cellSize
            //width: model.width * this.props.cellSize,
            //height: model.height * this.props.cellSize
            //transform: `translate3d(${this.props.xDistance}px, ${this.props.yDistance}px, 0)`
        };

        const selectedClass = this.props.isSelectedElement ? "selected-placement" : "";
        const structureClass = this.props.model.type == "structure" ? "structure-placement" : "";
        const objectClass = this.props.model.type == "object" ? "object-placement" : "";



        return (
            <div style={style} className={`landscape-placement ${selectedClass} ${objectClass} ${structureClass}`} onMouseDown={::this.handleGrab}>
                {this.renderSkin()}
                {this.renderCorners()}
            </div>
        );
    }
}

export default LandscapePlacement;