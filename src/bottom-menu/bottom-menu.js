import React from 'react'
import { connect } from 'react-redux'
import ToolMenu from './tool-menu'
import CellSizeSlider from '../view-settings/cellsize-slider'
import ContextMenu from '../context-menu/context-menu'

@connect((state, props) => {
    return {
        cellSize: state.viewSettings.cellSize
    }
})
class BottomMenu extends React.Component {

    render() {
        return (
           <div className="bottom-menu">
               <div className="bottom-menu_left-area">
                   <div className="bottom-menu_areagroup">
                       <div className="bottom-menu_label">PLACEMENT TYPE</div>
                       <ToolMenu />
                   </div>
                   <div className="bottom-menu_areagroup">
                       <div className="bottom-menu_label">
                               CELL SIZE <span className="_color-green">{this.props.cellSize}px</span>
                       </div>
                       <div>
                           <CellSizeSlider />
                       </div>
                   </div>
               </div>
               <div className="bottom-menu_right-area">
                   <ContextMenu />
               </div>
           </div>
        );
    }
}




export default BottomMenu;