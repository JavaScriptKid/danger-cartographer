import React from 'react'
import { connect } from 'react-redux'
import Cell from './canvas-cell'
import LandscapeContainer from './canvas-landscapes-container'
import ContextMenu from '../context-menu/context-menu'
import CreatePlacementMenu from '../context-menu/create-placement-menu'

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
        for (var y=0; y<=this.props.height-1; y++) {
            for (var x = 0; x <= this.props.width-1; x++) {
                cells.push(<Cell key={`${x}x${y}`} x={x} y={y}/>)
            }
        }

        const canvasStyle = {
            width: this.props.width * this.props.cellSize,
            height: this.props.height * this.props.cellSize,
            position:"relative",
            margin: "0 auto",
            borderLeft: "1px solid rgb(204, 204, 204)",
            borderTop: "1px solid rgb(204, 204, 204)"
        };

        return (
           <div style={canvasStyle}>
               <LandscapeContainer />
               {cells}
               <ContextMenu />
               <CreatePlacementMenu />
           </div>
        );
    }
}

export default Canvas;