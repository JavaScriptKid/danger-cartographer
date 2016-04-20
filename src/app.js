import React from 'react'
import { connect } from 'react-redux'
import Canvas from './canvas/canvas'
import CellSizeSlider from './view-settings/cellsize-slider'
import {startLandscapeDragBindings} from './drag-bindings'
import ReduxStateDisplayer from './redux-state-displayer'
import SvgViewer from './svg-viewer/svg-viewer'
import MapSizeControls from './map-details/map-size-controls'
import BottomMenu from './bottom-menu/bottom-menu'

@connect((state, props) => {
    return {
    }
})

class App extends React.Component {


    componentWillMount() {
        startLandscapeDragBindings();
    }

    render() {
        return (
           <div>
               <MapSizeControls />
               <CellSizeSlider />

               <Canvas />
               <BottomMenu />
               {/* <SvgViewer /> */}
           </div>
        );
    }
}

export default App;