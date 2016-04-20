import React from 'react'
import { connect } from 'react-redux'
import MapTitle from './map-title'
import MapSizeControls from '../map-details/map-size-controls'
import MarkupBtn from '../svg-viewer/markup-btn'

@connect((state, props) => {
    return {
    }
})

class TopTitleArea extends React.Component {

    render() {
        return (
           <div className="top-area">
               <MapTitle />
               <MapSizeControls />
               <div>
                    <MarkupBtn />
               </div>
           </div>
        );
    }
}

export default TopTitleArea;