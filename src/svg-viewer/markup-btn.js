import React from 'react'
import { connect } from 'react-redux'

@connect((state, props) => {
    return {
    }
})

class MarkupBtn extends React.Component {

    handleClick() {
        $('#map-svg').attr("xmlns", "http://www.w3.org/2000/svg");
        $('#map-svg').attr("xml:space", "preserve");
        $('#map-svg').prepend("<style>svg {overflow:visible}</style>");
        console.log(

            $('#map-svg')[0].outerHTML
        )
    }

    render() {
        return (
           <button onClick={::this.handleClick}>Get Markup</button>
        );
    }
}

export default MarkupBtn;