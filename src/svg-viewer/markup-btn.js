import React from 'react'
import { connect } from 'react-redux'

@connect((state, props) => {
    return {
    }
})

class MarkupBtn extends React.Component {

    handleClick() {

        var $markup = $('#map-svg').clone();
        $markup.attr("xmlns", "http://www.w3.org/2000/svg");
        $markup.attr("xml:space", "preserve");
        $markup.prepend("<style>svg {overflow:visible}</style>");

        var w = window.open();
        var html = String($markup[0].outerHTML);
        $(w.document.body).text(html);


        //$('#map-svg').attr("xmlns", "http://www.w3.org/2000/svg");
        //$('#map-svg').attr("xml:space", "preserve");
        //$('#map-svg').prepend("<style>svg {overflow:visible}</style>");
        //console.log(
        //
        //    $('#map-svg')[0].outerHTML
        //)
    }

    render() {
        return (
           <button onClick={::this.handleClick}>Get Markup</button>
        );
    }
}

export default MarkupBtn;