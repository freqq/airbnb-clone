import React, {Component} from 'react'
import {PropTypes} from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'
import {View, TouchableOpacity, StyleSheet} from 'react-native'
import colors from '../../styles/colors';

class HeartButton extends Component {
    state = {
        addedToFavourite: false
    }

    addToFavourite = () => {
        this.setState({
            addedToFavourite: !this.state.addedToFavourite
        })
    }

    render() {
        const {addedToFavourite} = this.state
        const {color, selectedColor} = this.props

        return (
            <TouchableOpacity
                onPress={this.addToFavourite}
                style={StyleSheet.favouriteButton}>
                <View>
                    <Icon
                        size={18}
                        color={addedToFavourite
                        ? selectedColor
                        : color}
                        size={18}
                        name={addedToFavourite
                        ? 'heart'
                        : 'heart-o'}/>
                    <Icon 
                        name='heart-o'
                        size={18}
                        color={color}
                        style = {[
                            {display: addedToFavourite ? 'flex' : 'none'},
                            styles.selectedColor
                        ]}
                    />
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    selectedColor: {
        position: 'absolute',
        left: 0,
        top: 0
    }
})

HeartButton.propTypes = {
    color: PropTypes.string.isRequired,
    selectedColor: PropTypes.string.isRequired,
    itemId: PropTypes.number.isRequired
}

export default HeartButton