import React from 'react'
import { connect } from 'react-redux'
import { setCursorValue } from '../action-creators/action-creators'

@connect((state, props) => {
    return {
        cellSize: state.viewSettings.cellSize
    }
})

class PlacementCorner extends React.Component {

    handleMouseDown(e) {
        setCursorValue({
            isDragging: true,
            draggingId: this.props.placementId
        })
    }

    render() {
        const cornerStyle = {
            width: this.props.cellSize / 2,
            height: this.props.cellSize / 2
        };
        return (
            <div style={cornerStyle} className={this.props.class} onMouseDown={::this.handleMouseDown}></div>
        );
    }
}

export default PlacementCorner;