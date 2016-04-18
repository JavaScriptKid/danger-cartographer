import React from 'react'
import { connect } from 'react-redux'
import Inspector from '../inspector/inspector'
import DeselectBtn from '../inspector/deselect-btn'
import FillSelect from './fill-select'
import TypeMenu from './context-type-menu'
import SkinDropdown from './skin-dropdown'

@connect((state, props) => {
    return {
        selectedElement: state.cursor.selectedElement,
        landscapePlacements: state.landscapePlacements
    }
})

class ContextMenu extends React.Component {

    renderContextControls() {

        const model = this.props.landscapePlacements[this.props.selectedElement];

        if (model.type == "structure") { /* This should be renamed ASAP to Structure */

            const options = [
                {value: "sidetable", label: "Side Table", width: 1, height: 2},
                {value: "fulltable", label: "Full Table", width: 2, height: 2},
                {value: "building", label: "Building", width: 4, height: 8} /* It would be better if it didnt have to manually know these numbers */
            ]

            return (
                <div>
                    Structure form
                    <SkinDropdown options={options} />
                    <FillSelect />
                </div>
            )
        }

        if (model.type == "object") {

            const options = [
                {value: "coffeeCup", label: "Coffee Cup"}
            ]

            //TODO: limited colors prop for FillSelect
            return (
                <div>
                    Object form
                    <div>SKIN:</div>
                    <div>NUDGE LEFT:</div>
                    <div>NUDGE TOP:</div>
                    <FillSelect />
                </div>
            )
        }


        /* Default to landscape */
        return (
            <div>
                Landscape form
                <div>WIDTH: </div>
                <div>HEIGHT: </div>
                <FillSelect />
            </div>
        )





    }

    render() {

        if (!this.props.selectedElement) {
            return null;
        }

        return (
           <div>
               <Inspector />
               <DeselectBtn />
               <TypeMenu />
               {this.renderContextControls()}
           </div>
        );
    }
}

export default ContextMenu;