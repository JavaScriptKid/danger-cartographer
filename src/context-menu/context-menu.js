import React from 'react'
import { connect } from 'react-redux'
import DeselectBtn from '../inspector/deselect-btn'
import FillSelect from './fill-select'
import TypeMenu from './context-type-menu'
import SkinDropdown from './skin-dropdown'

@connect((state, props) => {
    return {
        selectedElement: state.cursor.selectedElement,
        landscapePlacements: state.landscapePlacements,

        mapWidth: state.details.width,
        mapHeight: state.details.height,
        cellSize: state.viewSettings.cellSize,
    }
})

class ContextMenu extends React.Component {

    getIdClass(type) {
        if (type == "object") {
            return "_color-pink"
        }
        if (type == "structure") {
            return "_color-green"
        }
        if (!type) {
            return "_color-blue"
        }

        return ""
    }

    getPlacementType(type) {
        if (type == "object") {
            return "Object"
        }
        if (type == "structure") {
            return "Structure"
        }
        if (!type) {
            return "Landscape"
        }

        return "unknown"
    }


    renderContextControls(model) {

        if (model.type == "structure") { /* This should be renamed ASAP to Structure */

            const options = [
                {value: "sidetable", label: "Side Table", width: 1, height: 2},
                {value: "fulltable", label: "Full Table", width: 2, height: 2},
                {value: "building", label: "Building", width: 4, height: 8} /* It would be better if it didnt have to manually know these numbers */
            ];

            return (
                <div>
                    <SkinDropdown options={options} />
                    <FillSelect />
                </div>
            )
        }

        if (model.type == "object") {

            const options = [
                {value: "coffeeCup", label: "Coffee Cup"}
            ];

            //TODO: limited colors prop for FillSelect
            return (
                <div>
                    <div>TODO SKIN:</div>
                    <div>NUDGE LEFT:</div>
                    <div>NUDGE TOP:</div>
                    <FillSelect />
                </div>
            )
        }


        /* Default to landscape */
        return (
            <div>
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

        const model = this.props.landscapePlacements[this.props.selectedElement];

        const style = {
            position: "absolute",
            zIndex:100,
            left: model.x * this.props.cellSize + this.props.cellSize/2,
            top: (model.y + model.height) * this.props.cellSize,
            transform: `translateX(-50%) translateY(${this.props.cellSize/4 + 14}px)`,

            //transform: `translate3d(-50%, ${this.props.cellSize + this.props.cellSize/2}px, 0)`,
        };


        return (
           <div style={style} className="context-menu">
               <DeselectBtn />
               <div className="context-menu_title">{this.getPlacementType(model.type)}</div>
               <div className={`context-menu_selected-id ${this.getIdClass(model.type)}`}>{this.props.selectedElement}</div>



               {/*<TypeMenu />*/}
               {this.renderContextControls(model)}
           </div>
        );
    }
}

export default ContextMenu;