import React from 'react'
import { connect } from 'react-redux'
import { mergeLandscape } from '../action-creators/action-creators'


@connect((state, props) => {
    return {
        selectedElement: state.cursor.selectedElement,
        selectedLandscapePlacement: state.landscapePlacements[state.cursor.selectedElement]

    }
})

class FillSelect extends React.Component {

    handleChange() {
        mergeLandscape(this.props.selectedElement, {
            skin: {
                fill1:this.refs.colorselect.value
            }
        })
    }

    render() {

        const currentFillColor = this.props.selectedLandscapePlacement ? this.props.selectedLandscapePlacement.skin.fill1 : null;

        return (
           <select value={currentFillColor} ref="colorselect" onChange={::this.handleChange}>
               <option value="#D0021B">red</option>
               <option value="#4A90E2">blue</option>
               <option value="#50E3C2">green</option>
               <option value="#BD10E0">purple</option>
           </select>
        );
    }
}

export default FillSelect;