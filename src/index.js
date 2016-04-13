import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './app'
import store from './init/store'


var RootComponent = React.createClass({
    render() {
        return (
            <Provider store={ store }>
                <App />
            </Provider>
        );
    }
});

var rootInstance = null;

rootInstance = render(<RootComponent store={store} />, document.getElementById('app-root'));

if (module.hot) {
    require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
        getRootInstances: function () {
            // Help React Hot Loader figure out the root component instances on the page:
            return [rootInstance];
        }
    });
}