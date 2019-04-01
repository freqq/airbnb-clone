import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../../styles/colors'

class SearchBar extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.searchContainer}>
                <Icon name="ios-search" size={20} color={colors.gray02} style={styles.searchIcon}/>
                    <Text style={styles.textInput}>Try "Cape Town"</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 80,
        zIndex: 99,
        backgroundColor: colors.white
    },
    searchContainer: {
        display: 'flex',
        borderWidth: 1,
        borderColor: colors.gray03,
        backgroundColor: colors.white,
        shadowColor: 'rgba(0,0,0,.1)',
        shadowOffset: {width: 1, height: 5},
        shadowOpacity: 0.7,
        shadowRadius: 10,
        borderRadius: 3,
        height: 40,
        marginTop: 28,
        marginRight: 21,
        marginLeft: 21
    },
    textInput: {
        display: 'flex',
        marginTop: 11,
        marginLeft: 44,
        color: colors.gray02
    },
    searchIcon: {
        position: 'absolute',
        left: 18,
        top: 9
    }
})

export default SearchBar
