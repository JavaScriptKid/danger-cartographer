import React from 'react'
import { connect } from 'react-redux'
import DeselectBtn from '../inspector/deselect-btn'
import FillSelectList from './fill-select'
import TypeMenu from './context-type-menu'
import SkinDropdown from './skin-dropdown'
import NumberInput from './number-input'


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
                    <div className="content-menu_row flex-side-by-side-row">
                        <span>
                            Skin
                        </span>
                        <span className="mini-input-container">
                            <SkinDropdown options={options} />
                        </span>
                    </div>
                    <div className="content-menu_row">
                        <div>Fill</div>
                        <FillSelectList />
                    </div>
                </div>
            )
        }

        if (model.type == "object") {

            const options = [
                {value: "coffeeCup", label: "Coffee Cup"}
            ];

            //TODO: limited colors prop for FillSelectList
            return (
                <div>
                    {/*<div>TODO SKIN:</div>
                    <div>NUDGE LEFT:</div>
                    <div>NUDGE TOP:</div>*/}
                    <FillSelectList />
                </div>
            )
        }


        /* Default to landscape */
        return (
            <div>
                <div className="content-menu_row flex-side-by-side-row">
                    <span>
                        Width
                    </span>
                    <span className="mini-input-container">
                        <NumberInput id={this.props.selectedElement} property="width" useMin={1} />
                    </span>
                </div>
                <div className="content-menu_row flex-side-by-side-row">
                    <span>
                        Height
                    </span>
                    <span className="mini-input-container">
                        <NumberInput id={this.props.selectedElement} property="height" useMin={1} />
                    </span>
                </div>
                <div className="content-menu_row">
                    <div>Fill</div>
                    <FillSelectList />
                </div>
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
            top: (model.y*this.props.cellSize + model.height*this.props.cellSize),
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