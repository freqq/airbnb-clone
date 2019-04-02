import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

class InboxContainer extends Component {
    static navigationOptions = {
        tabBarLabel: 'PROFILE',
        tabBarIcon: ({ tintColor }) => (
            <Icon style={{marginTop: 6}} name="ios-contact" size={22} color={tintColor}/>
        )
    }

    render() {
        return (
            <View>
                <Text>Profile</Text>
            </View>
        )
    }
}

export default InboxContainer