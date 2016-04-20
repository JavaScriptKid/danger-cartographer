import React from 'react'
import { connect } from 'react-redux'
import Canvas from './canvas/canvas'
import {startLandscapeDragBindings} from './drag-bindings'
import ReduxStateDisplayer from './redux-state-displayer'
import SvgViewer from './svg-viewer/svg-viewer'
import BottomMenu from './bottom-menu/bottom-menu'
import TopTitleArea from './map-details/top-title-area'

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
                <TopTitleArea />


               <Canvas />
               <BottomMenu />
               <SvgViewer />
           </div>
        );
    }
}

export default App;