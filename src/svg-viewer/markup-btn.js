import React from 'react'
import { connect } from 'react-redux'
import getSvgMarkup from './get-svg-markup'

@connect((state, props) => {
    return {
    }
})

class MarkupBtn extends React.Component {

    handleClick() {

        var w = window.open();
        var html = getSvgMarkup();
        $(w.document.body).text(html);

    }

    render() {
        return (
           <button onClick={::this.handleClick}>Get Markup</button>
        );
    }
}

export default MarkupBtn;