import React from 'react'
import { connect } from 'react-redux'

import {rectangle} from '../skins/skins'
import PlacementCorner from './placement-corner'

import {setCursorValue} from '../action-creators/action-creators'

@connect((state, props) => {
    return {
        cellSize: state.viewSettings.cellSize,
        xDistance: state.cursor.xDistance,
        yDistance: state.cursor.yDistance,
        //xStart: state.cursor.xStart,
        //yStart: state.cursor.yStart
    }
})

class LandscapePlacement extends React.Component {


    componentWillUpdate(newProps) {
        if (this.props.xDistance != newProps.xDistance || this.props.yDistance != newProps.yDistance) {
            if (newProps.xDistance > this.props.cellSize / 2) {
                console.log('increase width')
            }
            if (newProps.xDistance < this.props.cellSize / -2) {
                console.log('decrease width')
            }
            if (newProps.yDistance > this.props.cellSize / 2) {
                console.log('increase height')
            }
            if (newProps.yDistance < this.props.cellSize / -2) {
                console.log('decrease height')
            }
        }
    }

    renderCorners() {
        return (
            <div className="placement-corners-container">
                <PlacementCorner placementId={this.props.id} class="js-placement-corner placement-corner-top-left" />
                <PlacementCorner placementId={this.props.id} class="js-placement-corner placement-corner-top-right" />
                <PlacementCorner placementId={this.props.id} class="js-placement-corner placement-corner-bottom-left" />
                <PlacementCorner placementId={this.props.id} class="js-placement-corner placement-corner-bottom-right" />
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