import React from 'react'
import { connect } from 'react-redux'

import {rectangle} from '../skins/skins'
import PlacementCorner from './placement-corner'

import {setCursorValue, mergeLandscape} from '../action-creators/action-creators'

@connect((state, props) => {
    return {
        cellSize: state.viewSettings.cellSize,
        isSelected: state.cursor.draggingId == props.id,
        dragCellX: state.cursor.dragCellX,
        dragCellY: state.cursor.dragCellY,
        dragCorner: state.cursor.dragCorner
    }
})

class LandscapePlacement extends React.Component {


    componentWillReceiveProps(newProps) {
        if (newProps.isSelected) {
            if (newProps.dragCellX != this.props.dragCellX || newProps.dragCellY != this.props.dragCellY) {

                const x = this.props.model.x;
                const y = this.props.model.y;
                const cellsBeforeX = x-1;
                const cellsBeforeY = y-1;
                const newDestX = newProps.dragCellX;
                const newDestY = newProps.dragCellY;


                if (this.props.dragCorner.indexOf('right') > -1) {
                    const newW = newDestX - (x - cellsBeforeX);
                    mergeLandscape(this.props.id, {
                        width: newW,
                    })
                }

                if (this.props.dragCorner.indexOf('bottom') > -1) {
                    const newH = newDestY - (y - cellsBeforeY);
                    mergeLandscape(this.props.id, {
                        height: newH,
                    })
                }

            }
        }
    }

    renderCorners() {
        return (
            <div className="placement-corners-container">
                <PlacementCorner placementId={this.props.id} corner={["top", "left"]} class="js-placement-corner placement-corner-top-left" />
                <PlacementCorner placementId={this.props.id} corner={["top", "right"]} class="js-placement-corner placement-corner-top-right" />
                <PlacementCorner placementId={this.props.id} corner={["bottom", "left"]} class="js-placement-corner placement-corner-bottom-left" />
                <PlacementCorner placementId={this.props.id} corner={["bottom", "right"]} class="js-placement-corner placement-corner-bottom-right" />
            </div>
        )
    }

    render() {
        const model = this.props.model;

        const style = {
            position: "absolute",
            left: model.x * this.props.cellSize,
            top: model.y * this.props.cellSize
        };
        const width = (model.width * this.props.cellSize);
        const height = (model.height * this.props.cellSize);
        return (
            <div style={style} className="landscape-placement">
                {rectangle(width, height, model.skin.fill1)}
                {this.renderCorners()}
            </div>
        );
    }
}

export default LandscapePlacement;