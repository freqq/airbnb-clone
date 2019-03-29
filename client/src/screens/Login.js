import React, {Component} from 'react'
import colors from '../styles/colors'
import InputField from '../components/form/InputField'
import NextArrowButton from '../components/buttons/NextArrowButton'
import Notification from '../components/Notification'
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    KeyboardAvoidingView
} from 'react-native'

export default class Login extends Component {
    state = {
        formValid: false
    }

    handleNextButton = () => {
        alert('next button')
    }

    handleCloseNotification = () => {
        this.setState({formValid: true})
    }

    render() {
        const { formValid } = this.state
        const showNotificaion = formValid ? false : true
        const background = formValid ? colors.green01 : colors.darkOrange

        return (
            <KeyboardAvoidingView 
                style={[{backgroundColor: background}, styles.wrapper]}
                behavior="padding">
                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.loginHeader}>Log In</Text>
                        <InputField 
                            labelText="Email Adress"
                            labelTextSize={14}
                            labelColor={colors.white} 
                            textColor={colors.white}
                            borderBottomColor={colors.white}
                            inputType="email" 
                            customStyle={{marginBottom: 30}} />
                        <InputField 
                            labelText="Password"
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor={colors.white}  
                            borderBottomColor={colors.white}
                            inputType="password" 
                            customStyle={{marginBottom: 30}} />
                    </ScrollView>
                    <View style={styles.nextButton}>
                        <NextArrowButton 
                            handleNextButton={this.handleNextButton}
                        />
                    </View>
                    <View>
                        <Notification 
                            type="Error"
                            firstLine="Those credentials don't look right."
                            secondLine="Please try again."
                            showNotificaion={showNotificaion}
                            handleCloseNotification={this.handleCloseNotification}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flex: 1
    },
    scrollViewWrapper: {
        marginTop: 70,
        flex: 1
    },
    loginHeader: {
        fontSize: 28,
        color: colors.white,
        fontWeight: '300',
        marginBottom: 40
    },
    scrollView: {
        paddingTop: 30,
        paddingRight: 30,
        paddingLeft: 30,
        flex: 1
    },
    nextButton: {
        alignItems: 'flex-end',
        right: 20,
        bottom: 30
    }
})