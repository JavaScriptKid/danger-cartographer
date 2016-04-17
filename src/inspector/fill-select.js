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
               <option value="#8B5B55">1</option>
               <option value="#4B586A">2</option>
               <option value="#5994B1">3</option>
               <option value="#574ACB">4</option>
               <option value="#E8DCCD">5</option>
               <option value="#B27D4D">Bronze Mug</option>
               <option value="#647D82">Coffee Floor</option>
               <option value="#8F5B56">Coffee Counter</option>
               <option value="#C5A587">Coffee Floor</option>
               <option value="#C2BBC0">Coffee Door Mat</option>
               <option value="#BDC2C3">Street Gray</option>
               <option value="#FBDC51">Roadblock Yellow</option>
               <option value="#1B547E">Roof Dark Blue</option>
               <option value="#AA6A69">Building Brick</option>
               <option value="#3A8A54">The Hole Green</option>
               <option value="#1D462B">The Hole Green (Dark)</option>
               <option value="#A145DF">The Hole Text Purple</option>
               <option value="#FFFFFF">SouthNorth White</option>
               <option value="#808080">SouthNorth Window Gray</option>
               <option value="#F0368A">SouthNorth Text Pink</option>
           </select>
        );
    }
}

export default FillSelect;