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
                    svg: '<svg></svg>'
                }
            });

            self.setState({
                isLoading: false,
                graphicsList: results
            })
        });
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

        const fakeDataList = [
            {
                id: "234asdajhsdg",
                title: "Some Awesome Project",
                svgPreview: `<svg id="map-svg" x="0" y="0" viewBox="0 0 160 160" data-oldreactid=".0.3.0.0" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"><style>svg {overflow:visible}</style><svg style="position:relative;z-index:9;" x="0" y="0" data-oldreactid=".0.3.0.0.$0-minimap"><svg width="128" height="96" data-oldreactid=".0.3.0.0.$0-minimap.0"><g stroke-width="0" fill="none" data-oldreactid=".0.3.0.0.$0-minimap.0.0"><rect fill="#50E3C2" x="0" y="0" width="128" height="96" data-oldreactid=".0.3.0.0.$0-minimap.0.0.0"></rect></g></svg></svg><svg style="position:relative;z-index:9;" x="48" y="80" data-oldreactid=".0.3.0.0.$1-minimap"><svg viewBox="0 0 32 32" width="32" height="32" data-oldreactid=".0.3.0.0.$1-minimap.0"><polygon fill="#8B572A" points="0,0 0,32 4,32 4,29 28,29 28,32 32,32 32,0" data-oldreactid=".0.3.0.0.$1-minimap.0.0"></polygon><svg y="28" data-oldreactid=".0.3.0.0.$1-minimap.0.1"><rect fill="#03547c" opacity="0.5" width="32" height="8" data-oldreactid=".0.3.0.0.$1-minimap.0.1.0"></rect></svg></svg></svg></svg>`
            },
            {
                id: "2344545",
                title: "Long Hallway",
                svgPreview: `<svg id="map-svg" x="0" y="0" viewBox="0 0 352 160" data-oldreactid=".0.3.0.0" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"><style>svg {overflow:visible}</style><svg style="position:relative;z-index:9;" x="0" y="0" data-oldreactid=".0.3.0.0.$0-minimap"><svg width="352" height="160" data-oldreactid=".0.3.0.0.$0-minimap.0"><g stroke-width="0" fill="none" data-oldreactid=".0.3.0.0.$0-minimap.0.0"><rect fill="#C5A587" x="0" y="0" width="352" height="160" data-oldreactid=".0.3.0.0.$0-minimap.0.0.0"></rect></g></svg></svg><svg style="position:relative;z-index:9;" x="48" y="80" data-oldreactid=".0.3.0.0.$1-minimap"><svg viewBox="0 0 32 32" width="32" height="32" data-oldreactid=".0.3.0.0.$1-minimap.0"><polygon fill="#8B572A" points="0,0 0,32 4,32 4,29 28,29 28,32 32,32 32,0" data-oldreactid=".0.3.0.0.$1-minimap.0.0"></polygon><svg y="28" data-oldreactid=".0.3.0.0.$1-minimap.0.1"><rect fill="#03547c" opacity="0.5" width="32" height="8" data-oldreactid=".0.3.0.0.$1-minimap.0.1.0"></rect></svg></svg></svg><svg style="position:relative;z-index:9;" x="16" y="16" data-oldreactid=".0.3.0.0.$2-minimap"><svg viewBox="0 0 32 32" width="32" height="32" data-oldreactid=".0.3.0.0.$2-minimap.0"><polygon fill="#8F5B56" points="0,0 0,32 4,32 4,29 28,29 28,32 32,32 32,0" data-oldreactid=".0.3.0.0.$2-minimap.0.0"></polygon><svg y="28" data-oldreactid=".0.3.0.0.$2-minimap.0.1"><rect fill="#03547c" opacity="0.5" width="32" height="8" data-oldreactid=".0.3.0.0.$2-minimap.0.1.0"></rect></svg></svg></svg><svg style="position:relative;z-index:9;" x="112" y="48" data-oldreactid=".0.3.0.0.$3-minimap"><svg viewBox="0 0 32 32" width="32" height="32" data-oldreactid=".0.3.0.0.$3-minimap.0"><polygon fill="#4B586A" points="0,0 0,32 4,32 4,29 28,29 28,32 32,32 32,0" data-oldreactid=".0.3.0.0.$3-minimap.0.0"></polygon><svg y="28" data-oldreactid=".0.3.0.0.$3-minimap.0.1"><rect fill="#03547c" opacity="0.5" width="32" height="8" data-oldreactid=".0.3.0.0.$3-minimap.0.1.0"></rect></svg></svg></svg><svg style="position:relative;z-index:9;" x="160" y="16" data-oldreactid=".0.3.0.0.$4-minimap"><svg viewBox="0 0 32 32" width="32" height="32" data-oldreactid=".0.3.0.0.$4-minimap.0"><polygon fill="#8F5B56" points="0,0 0,32 4,32 4,29 28,29 28,32 32,32 32,0" data-oldreactid=".0.3.0.0.$4-minimap.0.0"></polygon><svg y="28" data-oldreactid=".0.3.0.0.$4-minimap.0.1"><rect fill="#03547c" opacity="0.5" width="32" height="8" data-oldreactid=".0.3.0.0.$4-minimap.0.1.0"></rect></svg></svg></svg><svg style="position:relative;z-index:9;" x="256" y="48" data-oldreactid=".0.3.0.0.$5-minimap"><svg viewBox="0 0 32 32" width="32" height="32" data-oldreactid=".0.3.0.0.$5-minimap.0"><polygon fill="#4B586A" points="0,0 0,32 4,32 4,29 28,29 28,32 32,32 32,0" data-oldreactid=".0.3.0.0.$5-minimap.0.0"></polygon><svg y="28" data-oldreactid=".0.3.0.0.$5-minimap.0.1"><rect fill="#03547c" opacity="0.5" width="32" height="8" data-oldreactid=".0.3.0.0.$5-minimap.0.1.0"></rect></svg></svg></svg><svg style="position:relative;z-index:9;" x="208" y="80" data-oldreactid=".0.3.0.0.$6-minimap"><svg viewBox="0 0 32 32" width="32" height="32" data-oldreactid=".0.3.0.0.$6-minimap.0"><polygon fill="#E8DCCD" points="0,0 0,32 4,32 4,29 28,29 28,32 32,32 32,0" data-oldreactid=".0.3.0.0.$6-minimap.0.0"></polygon><svg y="28" data-oldreactid=".0.3.0.0.$6-minimap.0.1"><rect fill="#03547c" opacity="0.5" width="32" height="8" data-oldreactid=".0.3.0.0.$6-minimap.0.1.0"></rect></svg></svg></svg></svg>`
            },
            {
                id: "magtic0",
                title: "Magic Kingdom of Dreams",
                svgPreview: `<svg id="map-svg" x="0" y="0" viewBox="0 0 160 160" data-oldreactid=".0.3.0.0" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"><style>svg {overflow:visible}</style><svg style="position:relative;z-index:9;" x="0" y="0" data-oldreactid=".0.3.0.0.$0-minimap"><svg width="128" height="96" data-oldreactid=".0.3.0.0.$0-minimap.0"><g stroke-width="0" fill="none" data-oldreactid=".0.3.0.0.$0-minimap.0.0"><rect fill="#50E3C2" x="0" y="0" width="128" height="96" data-oldreactid=".0.3.0.0.$0-minimap.0.0.0"></rect></g></svg></svg><svg style="position:relative;z-index:9;" x="48" y="80" data-oldreactid=".0.3.0.0.$1-minimap"><svg viewBox="0 0 32 32" width="32" height="32" data-oldreactid=".0.3.0.0.$1-minimap.0"><polygon fill="#8B572A" points="0,0 0,32 4,32 4,29 28,29 28,32 32,32 32,0" data-oldreactid=".0.3.0.0.$1-minimap.0.0"></polygon><svg y="28" data-oldreactid=".0.3.0.0.$1-minimap.0.1"><rect fill="#03547c" opacity="0.5" width="32" height="8" data-oldreactid=".0.3.0.0.$1-minimap.0.1.0"></rect></svg></svg></svg></svg>`
            },
            {
                id: "king-beyond-wall",
                title: "Magic Kingdom of Dreams",
                svgPreview: `<svg id="map-svg" x="0" y="0" viewBox="0 0 160 160" data-oldreactid=".0.3.0.0" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"><style>svg {overflow:visible}</style><svg style="position:relative;z-index:9;" x="0" y="0" data-oldreactid=".0.3.0.0.$0-minimap"><svg width="128" height="96" data-oldreactid=".0.3.0.0.$0-minimap.0"><g stroke-width="0" fill="none" data-oldreactid=".0.3.0.0.$0-minimap.0.0"><rect fill="#50E3C2" x="0" y="0" width="128" height="96" data-oldreactid=".0.3.0.0.$0-minimap.0.0.0"></rect></g></svg></svg><svg style="position:relative;z-index:9;" x="48" y="80" data-oldreactid=".0.3.0.0.$1-minimap"><svg viewBox="0 0 32 32" width="32" height="32" data-oldreactid=".0.3.0.0.$1-minimap.0"><polygon fill="#8B572A" points="0,0 0,32 4,32 4,29 28,29 28,32 32,32 32,0" data-oldreactid=".0.3.0.0.$1-minimap.0.0"></polygon><svg y="28" data-oldreactid=".0.3.0.0.$1-minimap.0.1"><rect fill="#03547c" opacity="0.5" width="32" height="8" data-oldreactid=".0.3.0.0.$1-minimap.0.1.0"></rect></svg></svg></svg></svg>`
            },
        ];

        const results = this.state.graphicsList.map(result => {
            return <GraphicResult key={result.id} id={result.id} title={result.title} svgPreview={result.svgPreview} />
        });

        return (
            <div>
                <div className="top-area">
                    <div className="map-title">LIST OF GRAPHICS</div>
                    <button>NEW GRAPHIC</button>
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