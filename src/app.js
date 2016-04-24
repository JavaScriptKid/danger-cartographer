import React from 'react'
import { connect } from 'react-redux'
import {startLandscapeDragBindings} from './drag-bindings'
import ReduxStateDisplayer from './redux-state-displayer'
import LoginForm from './user/login-form'
import {setUserValue} from './action-creators/action-creators'
import getGraphicIdFromUrl from './user/get-graphic-id-from-url'
import GraphicsList from './graphics-list/graphics-list'
import EditorApp from './editor-app'


@connect((state, props) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        firebaseUrl: state.user.firebaseUrl
    }
})

class App extends React.Component {


    constructor() {
        super();
        this.state = {
            isLoading: true
        }
        this.graphicId = getGraphicIdFromUrl(window.location.search)
    }

    componentWillMount() {

        /* Bind window level mouse interactions */
        startLandscapeDragBindings();

        /* Check firebase for Auth */
        //this.setState({
        //    isLoading: false
        //});

        var ref = new Firebase(this.props.firebaseUrl);
        var auth = ref.getAuth();

        if (auth) {
            setUserValue({
                isLoggedIn: true,
                userEmail: auth.password.email
            })
        } else {
            setUserValue({
                isLoggedIn: false,
                userEmail: null
            })
        }
        this.setState({ isLoading: false });
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

    renderListApp() {
        return (
            <div>
                <GraphicsList />
            </div>
        );
    }

    renderEditorApp() {
        return (
            <EditorApp graphicId={this.graphicId} />
        );
    }

    render() {
        if (this.state.isLoading) {
            return this.renderLoading()
        }
        if (this.props.isLoggedIn) {
            if (this.graphicId) {
                return this.renderEditorApp()
            } else {
                return this.renderListApp()
            }
        } else {
            return this.renderLoginWall()
        }
    }
}

export default App;