import React from 'react'
import { connect } from 'react-redux'
import { setCursorValue } from '../action-creators/action-creators'
import createPlacement from '../landscape/create-placement'



@connect((state, props) => {
    return {
        cellSize: state.viewSettings.cellSize,
        isDragging: state.cursor.isDragging,
        selectedCreateTool: state.cursor.selectedCreateTool
    }
})
class Cell extends React.Component {

    handleMouseOver() {
        if (this.props.isDragging) {
            /* You are dragging and on these coords */
            setCursorValue({
                dragCellX: this.props.x,
                dragCellY: this.props.y,
            })
        }
    }

    handleDoubleClick() {
        createPlacement(this.props.x, this.props.y)
    }
    render() {
        const cellStyle = {
            width: this.props.cellSize,
            height: this.props.cellSize,
            left: ((this.props.x) * this.props.cellSize),
            top: ((this.props.y) * this.props.cellSize),
            position: 'absolute',
            borderRight: '1px solid #ccc',
            borderBottom: '1px solid #ccc',
        };
        return (
            <div style={cellStyle} onMouseEnter={::this.handleMouseOver} onDoubleClick={::this.handleDoubleClick}></div>
        );
    }
}

Cell.defaultProps = {
    x: 0,
    y: 0
};

export default Cell;