import React, {Component} from 'react'
import PropTypes from 'prop-types'
import transparentHeaderStyle from '../styles/navigation'
import colors from '../styles/colors'
import Icon from 'react-native-vector-icons/FontAwesome'
import {NavigationActions} from 'react-navigation'
import {View, Text, TouchableHighlight} from 'react-native'
import styles from './styles/TurnOnNotifications'

const navigateToTabsAction = NavigationActions.navigate({
    routeName: 'LoggedIn'
})

class TurnOnNotifications extends Component {
    static navigationOptions = () => ({headerLeft: null, headerStyle: transparentHeaderStyle, headerTransparent: true, headerTintColor: colors.white, gesturesEnabled: false})

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.content}>
                    <Icon name="comments-o" size={46} style={styles.icon}/>
                    <Text style={styles.title}>Turn on notifications ?</Text>
                    <Text style={styles.description}>We can let you know when someone messages you,
                        or notify you about other important account activity</Text>
                    <TouchableHighlight 
                        style={styles.notifyButton} 
                        onPress={() => this.props.navigation.dispatch(navigateToTabsAction)}
                        underlayColor={colors.green02}>
                        <Text style={styles.notifyText}>Yes, notify me</Text>
                    </TouchableHighlight>
                    <TouchableHighlight 
                        style={styles.skipButton} 
                        onPress={() => this.props.navigation.dispatch(navigateToTabsAction)}
                        underlayColor={colors.gray01}>
                        <Text style={styles.skipText}>Skip</Text>
                    </TouchableHighlight>

                </View>
            </View>
        )
    }
}

TurnOnNotifications.propTypes = {
    navigation: PropTypes.shape({
        dispatch: PropTypes.func
    })
}

export default TurnOnNotifications