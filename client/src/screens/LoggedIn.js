import React, {Component} from 'react'
import transparentHeaderStyle from '../styles/navigation'
import LoggedInTabNavigator from '../navigators/LoggedInTabNavigator'

class LoggedIn extends Component {
    static navigationOptions = () => ({header: null, headerStyle: transparentHeaderStyle, headerTransparent: true, gesturesEnabled: false})

    render() {
        return (<LoggedInTabNavigator/>)
    }
}

export default LoggedIn