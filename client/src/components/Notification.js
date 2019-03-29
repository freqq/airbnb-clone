import React, {Component} from 'react'
import { PropTypes } from 'prop-types'
import colors from '../styles/colors'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Easing,
    Animated
} from 'react-native'

class Notification extends Component {
    state = {
        positionValue: new Animated.Value(-80)
    }

    animateNotification = (value) => {
        const { positionValue } = this.state
        Animated.timing(
            positionValue,
            {
                toValue: value,
                duration: 300,
                velocity: 3,
                tension: 2,
                friction: 8,
                easing: Easing.easeOutBack
            }
        ).start()
    }

    closeNotification = () => {
        this.props.handleCloseNotification();
    }

    render() {
        const { type, firstLine, secondLine, showNotificaion } = this.props
        const { positionValue } = this.state
        showNotificaion ? this.animateNotification(0) : this.animateNotification(-80)

        return (
            <Animated.View style={[{marginBottom: positionValue}, styles.wrapper]}>
                <View style={styles.notificationContent}>
                    <Text style={styles.notificationType}>{type}</Text>
                    <Text style={styles.notificationMessage}>{firstLine}</Text>
                    <Text>{secondLine}</Text>
                </View>
                <TouchableOpacity 
                    style={styles.closeButton}
                    onPress={this.closeNotification}>
                    <Icon name="times" size={20} color={colors.lightGray}/>
                </TouchableOpacity>
            </Animated.View>
        )
    }
}

Notification.propTypes = {
    type: PropTypes.string.isRequired,
    firstLine: PropTypes.string,
    secondLine: PropTypes.string,
    handleCloseNotification: PropTypes.func,
    showNotificaion: PropTypes.bool.isRequired
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: colors.white,
        height: 80,
        width: '100%',
        padding: 10
    },
    notificationContent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    notificationType: {
        color: colors.darkOrange,
        marginRight: 5,
        fontSize: 14,
        marginBottom: 2
    },
    notificationMessage: {
        marginBottom: 2,
        fontSize: 14
    },
    closeButton: {
        position: 'absolute',
        right: 10,
        top: 10
    }
})

export default Notification
