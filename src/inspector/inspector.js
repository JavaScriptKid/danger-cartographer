import React from 'react'
import { connect } from 'react-redux'
import FillSelect from './fill-select'

@connect((state, props) => {
    return {
        selectedElement: state.cursor.selectedElement
    }
})

class Inspector extends React.Component {


    render() {

        /*
         <div>
         Fill Color: <FillSelect />
         </div>
         */

        return (
           <div>
               Selected Element: {this.props.selectedElement}
           </div>
        );
    }
}



export default Inspector;