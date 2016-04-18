import React from 'react'
import { connect } from 'react-redux'
import {mergeLandscape} from '../action-creators/action-creators'

@connect((state, props) => {
    return {
        selectedElement: state.cursor.selectedElement,
        landscapePlacements: state.landscapePlacements
    }
})

class TypeMenu extends React.Component {


    getDefaultSkin(value) {

        const model = this.props.landscapePlacements[this.props.selectedElement];

        if (value == "structure") {
            return {
                type: value,
                width: 1,
                height: 2,
                skin: {
                    ...model.skin,
                    id: "sidetable",
                    fill1: "#8B572A"
                }
            }
        }
        if (value == "object") {
            return {
                type: value,
                width: 1,
                height: 1,
                skin: {
                    ...model.skin,
                    id: "coffeeCup",
                    fill1: "#8B572A"
                }
            }
        }

        return {
            type: null,
            skin: {
                ...model.skin,
                id: "rectangle",
                fill1: "#8B572A"
            }
        }
    }

    handleChange(newValue) {

        const model = this.props.landscapePlacements[this.props.selectedElement];
        if (newValue == model.type) {
            return false;
        }

        mergeLandscape(this.props.selectedElement, {
            ...this.getDefaultSkin(newValue)
        })

    }

    render() {

        if (!this.props.selectedElement) {
            return null
        }

        const model = this.props.landscapePlacements[this.props.selectedElement];
        const currentValue = model.type ? model.type : "landscape";

        return (
           <form>
               <input onChange={this.handleChange.bind(this, null)} checked={currentValue=="landscape"} type="radio" name="placement-type" id="placement-type-landscape" />
               <label htmlFor="placement-type-landscape">Landscape</label>

               <input onChange={this.handleChange.bind(this, "structure")} checked={currentValue=="structure"} type="radio" name="placement-type" id="placement-type-structure" />
               <label htmlFor="placement-type-structure">Structure</label>

               <input onChange={this.handleChange.bind(this, "object")} checked={currentValue=="object"} type="radio" name="placement-type" id="placement-type-object" />
               <label htmlFor="placement-type-object">Object</label>

           </form>
        );
    }
}

export default TypeMenu;