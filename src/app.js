import React from 'react'
import { connect } from 'react-redux'
import Canvas from './canvas/canvas'
import CellSizeSlider from './view-settings/cellsize-slider'

@connect((state, props) => {
    return {
    }
})

class App extends React.Component {

    render() {
        return (
           <div>
                <CellSizeSlider />
                <Canvas />
           </div>
        );
    }
}

export default App;