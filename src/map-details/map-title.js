import React from 'react'
import { connect } from 'react-redux'

@connect((state, props) => {
    return {
    }
})

class MapTitle extends React.Component {

    render() {
        return (
           <div className="map-title">Some Cool New Map</div>
        );
    }
}

export default MapTitle;