import React from 'react'
import { connect } from 'react-redux'
import {setCursorValue} from '../action-creators/action-creators'

@connect((state, props) => {
    return {
        selectedCreateTool: state.cursor.selectedCreateTool
    }
})

class ToolMenu extends React.Component {


    setActive(newValue) {
        setCursorValue({
            selectedCreateTool: newValue
        })
    }

    render() {
        return (
           <div>
               <a href="#"
                  className={`tool-option ${this.props.selectedCreateTool == "landscape" ? "is-selected" : ""}`}
                  onClick={this.setActive.bind(this, "landscape")}
               >
                   <span className="tool-option_bubble"></span>
                   <span className="tool-option_label">Landscape</span>
               </a>
               <a href="#"
                  className={`tool-option ${this.props.selectedCreateTool == "structure" ? "is-selected" : ""}`}
                  onClick={this.setActive.bind(this, "structure")}
               >
                   <span className="tool-option_bubble"></span>
                   <span className="tool-option_label">Structure</span>
               </a>
               <a href="#"
                  className={`tool-option ${this.props.selectedCreateTool == "object" ? "is-selected" : ""}`}
                  onClick={this.setActive.bind(this, "object")}
               >
                   <span className="tool-option_bubble"></span>
                   <span className="tool-option_label">Object</span>
               </a>
           </div>
        );
    }
}


export default ToolMenu;