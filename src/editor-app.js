import React from 'react'
import { connect } from 'react-redux'

import SvgViewer from './svg-viewer/svg-viewer'
import BottomMenu from './bottom-menu/bottom-menu'
import TopTitleArea from './map-details/top-title-area'
import Canvas from './canvas/canvas'

class EditorApp extends React.Component {

    render() {
        return (
            <div className="js-deselect-click">
                <TopTitleArea />
                <Canvas />
                <BottomMenu />
                <SvgViewer />
            </div>
        );
    }
}




export default EditorApp;