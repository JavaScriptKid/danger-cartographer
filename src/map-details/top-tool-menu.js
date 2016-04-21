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
            selectedCreateTool: newValue,
            selectedElement: null
        })
    }

    render() {
        return (
            <div className="top-tool-menu option-group">
                <a
                   className={`option-group_option ${this.props.selectedCreateTool == "landscape" ? "is-selected" : ""}`}
                   onClick={this.setActive.bind(this, "landscape")}
                >
                    <span className="option-group_label">Landscape</span>
                </a>
                <a
                   className={`option-group_option ${this.props.selectedCreateTool == "structure" ? "is-selected" : ""}`}
                   onClick={this.setActive.bind(this, "structure")}
                >
                    <span className="option-group_label">Structure</span>
                </a>
                <a
                   className={`option-group_option ${this.props.selectedCreateTool == "object" ? "is-selected" : ""}`}
                   onClick={this.setActive.bind(this, "object")}
                >
                    <span className="option-group_label">Object</span>
                </a>
            </div>
        );
    }
}


export default ToolMenu;