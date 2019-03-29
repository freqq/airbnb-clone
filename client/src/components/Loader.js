import React, {Component} from 'react'
import {PropTypes} from 'prop-types'
import colors from '../styles/colors'
import {View, Image, Modal, Text, StyleSheet} from 'react-native'

class Loader extends Component {
    render() {
        const {animationType, modalVisible} = this.props

        return (
            <Modal visible={modalVisible} transparent={true} animationType={animationType}>
                <View style={styles.wrapper}>
                    <View style={styles.loaderContainer}>
                    <Image style={styles.loaderImage} source={require('../img/whiteLoader.gif')} />
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        zIndex: 9,
        backgroundColor: 'rgba(0,0,0,0.6)',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0
    },
    loaderImage: {
        width: 90,
        height: 90,
        borderRadius: 15
    },
    loaderContainer: {
        width: 90,
        height: 90,
        borderRadius: 15,
        position: 'absolute',
        left: '50%',
        top: '50%',
        marginLeft: -45,
        marginTop: -45
    }
})

Loader.propTypes = {
    animationType: PropTypes.string.isRequired,
    modalVisible: PropTypes.bool.isRequired
}

export default Loader
