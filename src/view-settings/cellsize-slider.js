import React from 'react'
import { connect } from 'react-redux'
import {setViewSettingsValue} from '../action-creators/action-creators'

@connect((state, props) => {
    return {
        cellSize: state.viewSettings.cellSize
    }
})

class CellSizeSlider extends React.Component {

    handleChange() {
        setViewSettingsValue({
            cellSize: parseInt(this.refs.slider.value)
        })

    }

    render() {
        return (
           <div>
               <input type="range" ref="slider" value={this.props.cellSize} onChange={::this.handleChange} max={100} min={16} step={2} />
               {this.props.cellSize}
           </div>
        );
    }
}

export default CellSizeSlider;