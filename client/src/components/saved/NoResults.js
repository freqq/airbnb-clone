import React, {Component} from 'react'
import {View, Text, ScrollView, TouchableHighlight, StyleSheet} from 'react-native'
import colors from '../../styles/colors'

class NoResults extends Component {
    render() {
        return (
            <View>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.heading}>Saved</Text>
                    <Text style={styles.description}>Not every day is filled with adventures, but
                        you can start planning for the next one.
                    </Text>
                    <Text style={styles.description}>Tap the heart on any home to start saving your favourites here.</Text>
                </ScrollView>
                <View style={styles.footer}>
                    <TouchableHighlight style={styles.findButton}>
                        <Text style={styles.findButtonText}>Find homes</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 30,
        fontWeight: '600',
        marginBottom: 40,
        color: colors.gray04,
        marginTop: 70,
        paddingLeft: 20,
        paddingRight: 20
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: colors.gray04,
        paddingLeft: 20,
        paddingRight: 20
    },
    scrollView: {
        height: '100%'
    },
    footer: {
        position: 'absolute',
        width: '100%',
        height: 80,
        bottom: 0,
        borderTopWidth: 1,
        borderTopColor: colors.gray05,
        paddingLeft: 20,
        paddingRight: 20
    },
    findButton: {
        backgroundColor: colors.pink,
        paddingBottom: 15,
        paddingTop: 15,
        marginTop: 15,
        borderRadius: 3
    },
    findButtonText: {
        color: colors.white,
        textAlign: 'center',
        fontWeight: '600'
    }
})

export default NoResults
