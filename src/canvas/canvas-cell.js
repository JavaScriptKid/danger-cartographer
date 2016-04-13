import React from 'react'
import { connect } from 'react-redux'

@connect((state, props) => {
    return {
        cellSize: state.viewSettings.cellSize
    }
})
class Cell extends React.Component {

    render() {
        const cellStyle = {
            background: '#ddd',
            width: this.props.cellSize,
            height: this.props.cellSize,
            left: ((this.props.x-1) * this.props.cellSize),
            top: ((this.props.y-1) * this.props.cellSize),
            position: 'absolute',
            borderRight: '1px solid #ccc',
            borderBottom: '1px solid #ccc',
        };
        return (
            <div style={cellStyle}></div>
        );
    }
}

Cell.defaultProps = {
    x: 0,
    y: 0
};

export default Cell;