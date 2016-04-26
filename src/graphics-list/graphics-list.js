import React from 'react'
import { connect } from 'react-redux'
import GraphicResult from './graphic-result'

@connect((state, props) => {
    return {
        firebaseUrl: state.user.firebaseUrl
    }
})

class GraphicsList extends React.Component {

    constructor() {
        super();

        this.state = {
            graphicsList: [],
            isLoading: true
        }
    }

    componentWillMount() {
        var self = this;
        const firebaseRef = this.props.firebaseUrl + '/graphics';
        var graphicRef = new Firebase(firebaseRef);
        graphicRef.once('value', function(snapshot) {

            const graphics = snapshot.val();
            const results = Object.keys( graphics ).map(graphicId => {
                const model = graphics[graphicId];
                return {
                    id: graphicId,
                    title: model.details.title,
                    svgPreview: model.svgPreview || '<svg></svg>'
                }
            });

            self.setState({
                isLoading: false,
                graphicsList: results
            })
        });
    }

    handleNewMap(e) {
        e.preventDefault();
        const newGraphicPath = window.location.protocol + "//" + window.location.host + window.location.pathname + "?graphic=graphic_" + Date.now();
        console.log(newGraphicPath)
        window.location = newGraphicPath;
    }

    renderLoading() {
        return (
            <div>LOADING FROM FIREBASE</div>
        )
    }

    render() {

        if (this.state.isLoading) {
            return this.renderLoading()
        }

        const results = this.state.graphicsList.map(result => {
            return <GraphicResult key={result.id} id={result.id} title={result.title} svgPreview={result.svgPreview} />
        });


        return (
            <div>
                <div className="top-area">
                    <div className="map-title">LIST OF GRAPHICS</div>
                    <a href="#" onClick={::this.handleNewMap}>NEW GRAPHIC</a>
                </div>
                <div>
                </div>
                <div className="graphics-list_container">
                    {results}
                </div>
            </div>
        );
    }
}


export default GraphicsList;