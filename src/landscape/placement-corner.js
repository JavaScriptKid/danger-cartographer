import React from 'react'
import { connect } from 'react-redux'
import { setCursorValue } from '../action-creators/action-creators'

@connect((state, props) => {
    return {
        cellSize: state.viewSettings.cellSize,
        draggingId: state.cursor.draggingId
    }
})

class PlacementCorner extends React.Component {

    handleMouseDown(e) {
        setCursorValue({
            isDragging: true,
            draggingId: this.props.placementId,
            dragCorner: this.props.corner
        })
    }

    render() {
        const cornerStyle = {
            width: this.props.cellSize / 2,
            height: this.props.cellSize / 2,
            opacity: (this.props.placementId == this.props.draggingId) ? 1 : 0
        };
        return (
            <div style={cornerStyle} className={this.props.class} onMouseDown={::this.handleMouseDown}></div>
        );
    }
}

export default PlacementCorner;