import React from 'react'
import { connect } from 'react-redux'
import LandscapePlacement from '../landscape/landscape-placement'

@connect((state, props) => {
    return {
        landscapePlacements: state.landscapePlacements
    }
})

class CanvasLandscapesContainer extends React.Component {

    render() {

        const placements = Object.keys(this.props.landscapePlacements).map(p => {
            const model = this.props.landscapePlacements[p];
            return (
                <LandscapePlacement key={p} model={model} />
            )
        });
        const containerStyle = {
            position:'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        };

        return (
           <div style={containerStyle}>
               {placements}
           </div>
        );
    }
}

//CanvasLandscapesContainer.propTypes = {
//    /*someRequiredProp: React.PropTypes.string.isRequired*/
//}
//
//CanvasLandscapesContainer.defaultProps = {
//}



export default CanvasLandscapesContainer;