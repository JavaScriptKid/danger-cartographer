import React from 'react'
import { connect } from 'react-redux'

import {rectangle} from '../skins/skins'

@connect((state, props) => {
    return {
        cellSize: state.viewSettings.cellSize
    }
})

class LandscapePlacement extends React.Component {


    renderCorners() {
        const cornerStyle = {
            width: this.props.cellSize / 2,
            height: this.props.cellSize / 2
        }
        return (
            <div className="placement-corners-container">
                <div style={cornerStyle} className="placement-corner-top-left"></div>
                <div style={cornerStyle} className="placement-corner-top-right"></div>
                <div style={cornerStyle} className="placement-corner-bottom-left"></div>
                <div style={cornerStyle} className="placement-corner-bottom-right"></div>
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