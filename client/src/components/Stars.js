import React, {Component} from 'react'
import {PropTypes} from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'
import colros from '../styles/colors'
import {View, Text, StyleSheet} from 'react-native'
import colors from '../styles/colors';

class Stars extends Component {
    get stars(){
        const { votes, size, color, id } = this.props
        const starsNumber = parseInt(votes)
        const starElements = []
        for(let i=0; i<5; i++){
            starElements.push(
                <Icon 
                    key={id}
                    name="star" 
                    size={size} 
                    style={styles.star}
                    color={starsNumber > i ? color : colors.gray02} />
            )
        } 
        return starElements
    }

    render() {
        const { votes } = this.props
        
        if(votes === '0'){
            return <View></View>
        }

        return (
            <View style={styles.wrapper}>
                <View style={styles.stars}>
                    {this.stars}
                    {votes ? <Text style={styles.votesNumber}>{votes}</Text> : null}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    star: {
        marginRight: 1
    },
    stars: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    votesNumber: {
        fontSize: 11,
        fontWeight: '600',
        marginTop: 2,
        marginLeft: 3
    }
})

export default Stars
