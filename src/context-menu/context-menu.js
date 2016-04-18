import React from 'react'
import { connect } from 'react-redux'
import Inspector from '../inspector/inspector'
import DeselectBtn from '../inspector/deselect-btn'
import FillSelect from '../inspector/fill-select'
import TypeMenu from './context-type-menu'

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
            return (
                <div>
                    Structure form
                    <div>SKIN:</div>
                    <FillSelect />
                </div>
            )
        }

        if (model.type == "object") {
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