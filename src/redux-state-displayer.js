import React from 'react';
import { connect } from 'react-redux'

@connect((state, props) => {
    return {
        reduxState: state
    }
})

class ReduxStateDisplayer extends React.Component {

    render() {

        const include = {
          ...this.props.reduxState.landscapePlacements,
          //...this.props.reduxState.cursor,
        };

        return (
            <pre>
                { JSON.stringify(include, null, 2) }
            </pre>
        );
    }
}


export default ReduxStateDisplayer;