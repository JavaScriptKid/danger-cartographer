import React from 'react'
import { connect } from 'react-redux'
import {setDetailsValue} from '../action-creators/action-creators'

@connect((state, props) => {
    return {
        width: state.details.width,
        height: state.details.height
    }
})

class MapSizeControls extends React.Component {

    handleChangeWidth() {
        setDetailsValue({
            width: parseInt(this.refs.widthinput.value)
        })
    }
    handleChangeHeight() {
        setDetailsValue({
            height: parseInt(this.refs.heightinput.value)
        })
    }

    render() {
        return (
            <div className="map-size-controls">
                <label>Width</label>
                <input onChange={::this.handleChangeWidth} value={this.props.width} type="number" ref="widthinput" min={1} />
                <label>Height</label>
                <input onChange={::this.handleChangeHeight} value={this.props.height} type="number" ref="heightinput" min={1} />
            </div>
        );
    }
}


export default MapSizeControls;