import React from 'react'
import { connect } from 'react-redux'
import {mergeLandscape} from '../action-creators/action-creators'

@connect((state, props) => {
    return {
        landscapePlacements: state.landscapePlacements
    }
})

class NumberInput extends React.Component {

    handleChange() {
        var changes = {};
        changes[this.props.property] = this.refs.input.value;
        mergeLandscape(this.props.id, {
            ...changes
        })
    }

    render() {

        const model = this.props.landscapePlacements[this.props.id];

        return (
            <input onChange={::this.handleChange} value={model[this.props.property]} type="number" ref="input" min={this.props.useMin} />
        );
    }
}

NumberInput.defaultProps = {
    useMin: null
};

export default NumberInput;