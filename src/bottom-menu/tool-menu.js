import React from 'react'
import { connect } from 'react-redux'

@connect((state, props) => {
    return {
    }
})

class ToolMenu extends React.Component {

    render() {
        return (
           <div>
               <a href="#" className="tool-option is-selected">
                   <span className="tool-option_bubble"></span>
                   <span className="tool-option_label">Landscape</span>
               </a>
               <a href="#" className="tool-option">
                   <span className="tool-option_bubble"></span>
                   <span className="tool-option_label">Structure</span>
               </a>
               <a href="#" className="tool-option">
                   <span className="tool-option_bubble"></span>
                   <span className="tool-option_label">Object</span>
               </a>
           </div>
        );
    }
}


export default ToolMenu;