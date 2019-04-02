import React, {Component} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import NoResults from '../components/saved/NoResults'
import colors from '../styles/colors';

class InboxContainer extends Component {
    static navigationOptions = {
        tabBarLabel: 'SAVED',
        tabBarIcon: ({tintColor}) => (<Icon style={{marginTop: 6}} name="ios-heart" size={22} color={tintColor}/>)
    }

    render() {
        return (
            <View style={styles.wrapper}>
                    <NoResults/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        backgroundColor: colors.white
    }
})

export default InboxContainer