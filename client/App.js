import React, {Component} from 'react';
import {Provider} from 'react-redux'
import store from './src/redux/store'
import {Root, configureStore} from './src/navigators/AppNavigator'
import Login from './src/screens/Login'

class App extends Component {
    render() {
        return (
            <Provider store={configureStore()}>
                <Root />
            </Provider>
        );
    }
}

export default App