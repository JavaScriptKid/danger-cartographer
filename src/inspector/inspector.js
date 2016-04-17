import React from 'react'
import { connect } from 'react-redux'

@connect((state, props) => {
    return {
        selectedElement: state.cursor.selectedElement
    }
})

class Inspector extends React.Component {

    render() {
        return (
           <div>Selected Element: {this.props.selectedElement}</div>
        );
    }
}



export default Inspector;