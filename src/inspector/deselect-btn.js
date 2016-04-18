import React from 'react'
import { connect } from 'react-redux'
import {setCursorValue} from '../action-creators/action-creators'

@connect((state, props) => {
    return {
    }
})

class DeselectBtn extends React.Component {

    handleClick(e) {
        e.preventDefault()
        setCursorValue({
            selectedElement: null
        })
    }


    render() {
        return (
           <a className="context-menu_close" href="#" onClick={::this.handleClick}>&times;</a>
        );
    }
}




export default DeselectBtn;