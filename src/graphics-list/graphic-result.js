import React from 'react'
import { connect } from 'react-redux'

@connect((state, props) => {
    return {
    }
})
class GraphicResult extends React.Component {

    render() {
        return (
           <a className="graphics-list_result" href={`/?graphic=${this.props.id}`}>
               <div style={styles.svgPreview} dangerouslySetInnerHTML={{ __html: this.props.svgPreview}} />
               <div className="graphics-list_meta">
                   <div className="graphics-list_resulttitle">{this.props.title}</div>
                   <div className="graphics-list_id">{this.props.id}</div>
               </div>
           </a>
        );
    }
}


const styles = {
    svgPreview: {
        maxWidth:'100%',
        height:100,
        background: '#ddd'
    }
};

export default GraphicResult;