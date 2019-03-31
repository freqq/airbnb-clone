import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

class InboxContainer extends Component {
    static navigationOptions = {
        tabBarLabel: 'SAVED',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-heart" size={22} color={tintColor}/>
        )
    }

    render() {
        return (
            <View>
                <Text>Saved</Text>
            </View>
        )
    }
}

export default InboxContainer