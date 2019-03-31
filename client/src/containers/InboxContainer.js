import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

class InboxContainer extends Component {
    static navigationOptions = {
        tabBarLabel: 'INBOX',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-archive" size={22} color={tintColor}/>
        )
    }

    render() {
        return (
            <View>
                <Text>Inbox</Text>
            </View>
        )
    }
}

export default InboxContainer