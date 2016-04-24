import React from 'react'
import { connect } from 'react-redux'
import Canvas from './canvas/canvas'
import {startLandscapeDragBindings} from './drag-bindings'
import ReduxStateDisplayer from './redux-state-displayer'
import SvgViewer from './svg-viewer/svg-viewer'
import BottomMenu from './bottom-menu/bottom-menu'
import TopTitleArea from './map-details/top-title-area'
import LoginForm from './user/login-form'

@connect((state, props) => {
    return {
        isLoggedIn: state.user.isLoggedIn
    }
})

class App extends React.Component {


    constructor() {
        super();
        this.state = {
            isLoading: true
        }
    }

    componentWillMount() {
        /* Bind window level mouse interactions */
        startLandscapeDragBindings();

        /* Check firebase for Auth */
        this.setState({
            isLoading: false
        })
    }

    renderLoading() {
        return (
            <div>Loading...</div>
        )
    }

    renderLoginWall() {
        return (
            <div>
                <LoginForm />
            </div>
        );
    }

    renderApp() {
        return (
            <div className="js-deselect-click">
                <TopTitleArea />
                <Canvas />
                <BottomMenu />
                <SvgViewer />
            </div>
        );
    }

    render() {
        if (this.state.isLoading) {
            return this.renderLoading()
        }
        if (this.props.isLoggedIn) {
            return this.renderApp()
        } else {
            return this.renderLoginWall()
        }
    }
}

export default App;