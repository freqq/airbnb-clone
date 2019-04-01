import React, {Component} from 'react'
import PropTypes from 'prop-types'
import transparentHeaderStyle from '../styles/navigation'
import colors from '../styles/colors'
import Icon from 'react-native-vector-icons/FontAwesome'
import {NavigationActions} from 'react-navigation'
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native'

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

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: colors.white
    },
    content: {
        marginTop: 80,
        paddingLeft: 20,
        paddingRight: 20
    },
    icon: {
        color: colors.green01,
        marginBottom: 15
    },
    title: {
        fontSize: 28,
        color: colors.black,
        fontWeight: '600'
    },
    description: {
        fontSize: 16,
        paddingRight: 30,
        marginTop: 15,
        lineHeight: 22
    },
    notifyButton: {
        width: 160,
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: 3,
        marginTop: 40,
        backgroundColor: colors.green01
    },
    notifyText: {
        color: colors.white,
        fontSize: 18,
        fontWeight: '600',
        alignSelf: 'center'
    },
    skipButton: {
        width: 100,
        borderColor: colors.green01,
        borderWidth: 2,
        borderRadius: 3,
        paddingTop: 12,
        paddingBottom: 12,
        marginTop: 15
    },
    skipText: {
        color: colors.green01,
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: '600'
    }
})

TurnOnNotifications.propTypes = {
    navigation: PropTypes.shape({
        dispatch: PropTypes.func
    })
}

export default TurnOnNotifications