import React from 'react'
import { connect } from 'react-redux'
import Cell from './canvas-cell'
import LandscapeContainer from './canvas-landscapes-container'

@connect((state, props) => {
    return {
        width: state.details.width,
        height: state.details.height,
        cellSize: state.viewSettings.cellSize
    }
})

class Canvas extends React.Component {

    render() {

        var cells = [];
        for (var y=0; y<=this.props.height; y++) {
            for (var x = 0; x <= this.props.width; x++) {
                cells.push(<Cell key={`${x}x${y}`} x={x} y={y}/>)
            }
        }

        const canvasStyle = {
            width: this.props.width * this.props.cellSize,
            height: this.props.height * this.props.cellSize,
            position:"relative",
            margin: "0 auto"
        };

        return (
           <div style={canvasStyle}>
               <LandscapeContainer />
               {cells}
           </div>
        );
    }
}

export default Canvas;