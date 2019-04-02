import React, {Component} from 'react'
import {
    ScrollView,
    StyleSheet,
    TouchableHighlight,
    Image,
    View,
    Text
} from 'react-native'
import colors from '../../styles/colors';

class Categories extends Component {
    constructor(props){
        super(props)

    }
    get Categories() {
        const { categories } = this.props
        return categories.map((category, index) => {
            return (
                <TouchableHighlight key={index} style={styles.card}>
                    <Image style={styles.image} source={category.photo}/>
                </TouchableHighlight>
            )
        })
    }

    render() {
        return (
            <ScrollView 
                contentContainerStyle={styles.wrapper} 
                showsHorizontalScrollIndicator={false}
                horizontal={true}>
                {this.Categories}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        width: 100,
        height: 100,
        marginRight: 8,
        marginLeft: 8
    },
    image: {
        flex: 1,
        width: undefined,
        height: undefined
    }
})

export default Categories
