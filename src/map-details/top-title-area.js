import React from 'react'
import { connect } from 'react-redux'
import MapTitle from './map-title'
import MapSizeControls from '../map-details/map-size-controls'
import MarkupBtn from '../svg-viewer/markup-btn'
import TopToolMenu from './top-tool-menu'

@connect((state, props) => {
    return {
    }
})

class TopTitleArea extends React.Component {

    render() {

        const backHref = `http://${window.location.host}${window.location.pathname}`

        return (
           <div className="top-area">
               <a href={backHref}>Back</a>
               <MapTitle />
               <MapSizeControls />
               <TopToolMenu />
               <div>
                    <MarkupBtn />
               </div>
           </div>
        );
    }
}

export default TopTitleArea;