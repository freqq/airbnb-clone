import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import colors from '../styles/colors'
import RoundedButton from '../components/buttons/RoundedButton'
import Icon from 'react-native-vector-icons/FontAwesome'
import transparentHeaderStyle from '../styles/navigation'
import NavBarButton from '../components/buttons/NavBarButton'

export default class App extends Component {
    static navigationOptions = ({navigation}) => ({
        headerRight: <NavBarButton handleButtonPress={() => navigation.navigate('Login')} location="right" color={colors.white} text="Log In"/>,
        headerStyle: transparentHeaderStyle,
        headerTransparent: true,
        headerTintColor: colors.white
    })

    onFacebookPress() {
        alert('Facebook')
    }

    onCreateAccountPress() {
        alert('Account')
    }

    onMoreOptionsPress() {
        alert('More options')
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.welcomeWrapper}>
                    <Image source={require('../img/airbnb-logo.png')} style={styles.logo}/>
                    <Text style={styles.welcomeText}>Welcome to Airbnb.</Text>
                    <RoundedButton
                        text="Continue with Facebook"
                        textColor={colors.green01}
                        background={colors.white}
                        icon={< Icon name = "facebook" size = {
                        20
                    }
                    style = {
                        styles.facebookButtonIcon
                    } />}
                        handleOnPress={this.onFacebookPress}/>

                    <RoundedButton
                        text="Create account"
                        textColor={colors.white}
                        handleOnPress={this.onCreateAccountPress}/>

                    <TouchableHighlight 
                        style={styles.moreOptionsButton}
                        onPress={this.onMoreOptionsPress}>
                        <Text style={styles.moreOptionsButtonText}>More options</Text>
                    </TouchableHighlight>

                    <View style={styles.termsAndConditions}>
                        <Text style={styles.termsText}>
                            Bt tapping Continute, Create Account or More options, I agree to Airbnb's 
                             <Text style={styles.underlineText}> Terms of Service</Text>, <Text style={styles.underlineText}> Payments Terms of Service</Text>, 
                             <Text style={styles.underlineText}> Privacy Policy</Text>, and <Text style={styles.underlineText}> Nondiscrimination Policy</Text>.
                        </Text>
                    </View>
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
    },
    facebookButtonIcon: {
        color: colors.green01,
        position: 'relative',
        left: 20,
        zIndex: 8
    },
    moreOptionsButton: {
        marginTop: 10
    },
    moreOptionsButtonText: {
        color: colors.white,
        fontSize: 16
    },
    termsText: {
        color: colors.white,
        fontSize: 12,
        fontWeight: '600'
    },
    termsAndConditions: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginTop: 30
    },
    underlineText: {
        textDecorationLine: 'underline'
    }
})