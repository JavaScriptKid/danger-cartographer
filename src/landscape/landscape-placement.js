import React from 'react'
import { connect } from 'react-redux'

import {rectangle} from '../skins/skins'

@connect((state, props) => {
    return {
        cellSize: state.viewSettings.cellSize
    }
})

class LandscapePlacement extends React.Component {

    render() {
        console.log(this.props.model)
        const model = this.props.model;

        const style = {
            position: "absolute",
            left: model.x * this.props.cellSize,
            top: model.y * this.props.cellSize
        };
        const width = (model.width * this.props.cellSize);
        const height = (model.height * this.props.cellSize);
        return (
           <div style={style}>
               {rectangle(width, height, model.skin.fill1)}
           </div>
        );
    }
}

export default LandscapePlacement;