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

        if (!this.props.selectedElement) {
            return null;
        }

        return (
           <div>
               Selected Element: {this.props.selectedElement}
               <div>
                   Fill Color: <FillSelect />
               </div>
           </div>
        );
    }
}



export default Inspector;