import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import colors from '../styles/colors'
import RoundedButton from '../components/buttons/RoundedButton'

export default class App extends Component {
  render() {
     return (
         <View style={styles.wrapper}>
            <View style={styles.welcomeWrapper}>
             <Image 
                source={require('../img/airbnb-logo.png')}
                style={styles.logo}
            />
            <Text style={styles.welcomeText}>Welcome to Airbnb.</Text>
            <RoundedButton text="Continue with Facebook"/>
            </View>
         </View>
     )
  }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        display: 'flex',
        backgroundColor: colors.green01
    },
    welcomeWrapper: {
        flex: 1,
        display: 'flex',
        marginTop: 30,
        padding: 20
    },
    logo: {
        width: 50,
        height: 50,
        marginTop: 30,
        marginBottom: 40
    },
    welcomeText: {
        fontSize: 30,
        color: colors.white,
        fontWeight: '300',
        marginBottom: 40
    }
})