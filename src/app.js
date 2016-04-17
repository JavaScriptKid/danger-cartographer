import React from 'react'
import { connect } from 'react-redux'
import Canvas from './canvas/canvas'
import Inspector from './inspector/inspector'
import CellSizeSlider from './view-settings/cellsize-slider'
import {startLandscapeDragBindings} from './drag-bindings'
import ReduxStateDisplayer from './redux-state-displayer'
import DeselectBtn from './inspector/deselect-btn'

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
               <CellSizeSlider />
               <Canvas />
               <Inspector />
               <DeselectBtn />

               <ReduxStateDisplayer />
           </div>
        );
    }
}

export default App;