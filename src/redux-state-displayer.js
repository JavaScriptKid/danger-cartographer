import React from 'react';
import { connect } from 'react-redux'

@connect((state, props) => {
    return {
        reduxState: state
    }
})

class ReduxStateDisplayer extends React.Component {

    render() {
        return (
            <pre>
                { JSON.stringify(this.props.reduxState.cursor, null, 2) }
            </pre>
        );
    }
}


export default ReduxStateDisplayer;