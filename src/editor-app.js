import React from 'react'
import { connect } from 'react-redux'

import SvgViewer from './svg-viewer/svg-viewer'
import BottomMenu from './bottom-menu/bottom-menu'
import TopTitleArea from './map-details/top-title-area'
import Canvas from './canvas/canvas'
import {setUserValue} from './action-creators/action-creators'
import applyUpdateFromFirebase from './firebase/apply-update-from-firebase'


@connect((state, props) => {
    return {
        firebaseUrl: state.user.firebaseUrl
    }
})
class EditorApp extends React.Component {

    constructor() {
        super();
        this.state = {
            isLoading: true
        }
    }

    componentWillMount() {
        setUserValue({
            viewingGraphic: this.props.graphicId
        });

        var self = this;
        /* Listen for changes from Firebase */
        const firebaseRef = this.props.firebaseUrl + '/graphics/' + this.props.graphicId;
        var graphicRef = new Firebase(firebaseRef);
        graphicRef.on('value', function(snapshot) {
            applyUpdateFromFirebase(snapshot.val());
            self.setState({
                isLoading:false
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

        return (
            <div className="js-deselect-click">
                <TopTitleArea />
                <Canvas />
                <BottomMenu />
                <SvgViewer />
            </div>
        );
    }
}




export default EditorApp;