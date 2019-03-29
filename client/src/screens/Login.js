import React, {Component} from 'react'
import colors from '../styles/colors'
import InputField from '../components/form/InputField'
import NextArrowButton from '../components/buttons/NextArrowButton'
import Notification from '../components/Notification'
import Loader from '../components/Loader'
import {View, Text, ScrollView, StyleSheet, KeyboardAvoidingView} from 'react-native'

export default class Login extends Component {
    state = {
        formValid: true,
        validEmail: false,
        emailAdress: '',
        validPassword: false,
        password: '',
        loadingVisible: false
    }

    handleNextButton = () => {
        this.setState({loadingVisible: true})
        setTimeout(() => {
            if (this.state.emailAdress === 'hello@imandy.ie' && this.state.validPassword) {
                this.setState({formValid: true})
            } else {
                this.setState({formValid: false})
            }
            this.setState({loadingVisible: false})
        }, 2000)

    }

    handleCloseNotification = () => {
        this.setState({formValid: true})
    }

    handleEmailChange = (email) => {
        const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const {validEmail} = this.state;
        this.setState({emailAddress: email});
        if (!validEmail) {
            if (emailCheckRegex.test(email)) {
                this.setState({validEmail: true});
            }
        } else if (!emailCheckRegex.test(email)) {
            this.setState({validEmail: false});
        }
    }

    handlePasswordChange = (password) => {
        const {validPassword} = this.state;
        this.setState({password});

        if (!validPassword) {
            if (password.length > 4) {
                this.setState({validPassword: true});
            }
        } else if (password <= 4) {
            this.setState({validPassword: false});
        }
    }

    toggleNextButtonState = () => {
        const {validEmail, validPassword} = this.state
        if (validEmail && validPassword) 
            return false
        return true
    }

    render() {
        const { formValid, loadingVisible, validEmail, validPassword } = this.state
        const showNotificaion = formValid
            ? false
            : true
        const background = formValid
            ? colors.green01
            : colors.darkOrange
        const notificationMarginTop = showNotificaion
            ? 10
            : 0

        return (
            <KeyboardAvoidingView
                style={[
                {
                    backgroundColor: background
                },
                styles.wrapper
            ]}
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
                            onChangeText={this.handleEmailChange}
                            showCheckmark={validEmail}
                            autoFocus={true}
                            customStyle={{
                            marginBottom: 30
                        }}/>
                        <InputField
                            labelText="Password"
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor={colors.white}
                            borderBottomColor={colors.white}
                            inputType="password"
                            onChangeText={this.handlePasswordChange}
                            showCheckmark={validPassword}
                            customStyle={{
                            marginBottom: 30
                        }}/>
                    </ScrollView>
                    <View style={styles.nextButton}>
                        <NextArrowButton
                            handleNextButton={this.handleNextButton}
                            disabled={this.toggleNextButtonState()}
                            style={[
                            styles.notificationWrapper, {
                                marginTop: notificationMarginTop
                            }
                        ]}/>
                    </View>
                    <View
                        style={[
                        styles.notificationWrapper, {
                            marginTop: notificationMarginTop
                        }
                    ]}>
                        <Notification
                            type="Error"
                            firstLine="Those credentials don't look right."
                            secondLine="Please try again."
                            showNotificaion={showNotificaion}
                            handleCloseNotification={this.handleCloseNotification}/>
                    </View>
                </View>
                <Loader animationType="fade" modalVisible={loadingVisible}/>
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
        bottom: 20
    },
    notificationWrapper: {
        position: 'absolute',
        bottom: 0
    }
})