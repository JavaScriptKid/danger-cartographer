import React from 'react'
import { connect } from 'react-redux'
import {setCursorValue} from '../action-creators/action-creators'

@connect((state, props) => {
    return {
    }
})

class DeselectBtn extends React.Component {

    handleClick() {
        setCursorValue({
            selectedElement: null
        })
    }


    render() {
        return (
           <button onClick={::this.handleClick}>Deselect</button>
        );
    }
}




export default DeselectBtn;