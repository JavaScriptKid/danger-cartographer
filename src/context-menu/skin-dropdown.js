import React from 'react'
import { connect } from 'react-redux'
import { mergeLandscape, setCursorValue } from '../action-creators/action-creators'

@connect((state, props) => {
    return {
        selectedCreateTool: state.cursor.selectedCreateTool,
        selectedElement: state.cursor.selectedElement,
        selectedLandscapePlacement: state.landscapePlacements[state.cursor.selectedElement]
    }
})

class FillSelect extends React.Component {

    handleChange() {
        const optionModel = this.props.options.find(option => option.value == this.refs.skinselect.value);

        mergeLandscape(this.props.selectedElement, {
            height: optionModel.height,
            width: optionModel.width,
            skin: {
                id: optionModel.value
            }
        });

        ///* Remember this structure */
        if (this.props.selectedCreateTool == "structure") {
            setCursorValue({
                useStructure: optionModel.value
            })
        }
        /* Needs to remember whole object */

    }


    renderOptions() {

        return this.props.options.map((option, i) => {
            return (
                <option key={i} value={option.value}>
                    {option.label}
                </option>
            )
        })
    }

    render() {

        const currentSkinId = this.props.selectedLandscapePlacement ? this.props.selectedLandscapePlacement.skin.id : null;

        return (
            <select value={currentSkinId} ref="skinselect" onChange={::this.handleChange}>
                {this.renderOptions()}
            </select>
        );
    }
}

export default FillSelect;