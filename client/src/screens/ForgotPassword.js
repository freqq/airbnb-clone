import React, {Component} from 'react'
import colors from '../styles/colors'
import InputField from '../components/form/InputField'
import Notification from '../components/Notification'
import NextArrowButton from '../components/buttons/NextArrowButton'
import Loader from '../components/Loader'
import {View, Text, KeyboardAvoidingView, StyleSheet} from 'react-native'

class ForgotPassword extends Component {
    state = {
        validEmail: false,
        emailAdress: '',
        formValid: true,
        loadingVisible: false
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


    toggleNextButtonState = () => {
        const { validEmail } = this.state
        if (validEmail) 
            return false
        return true
    }

    goToNextStep = () => {
        this.setState({loadingVisible: true})

        setTimeout(() => {
            if (this.state.emailAdress === 'wrong@email.com') {
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

    render() {
        const { validEmail, loadingVisible, formValid } = this.state
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
            <KeyboardAvoidingView style={[
                {
                    backgroundColor: background
                },
                styles.wrapper
            ]} 
            behavior="padding">
                <View style={styles.form}>
                    <Text style={styles.forgotPasswordHeading}>Forgot your password?</Text>
                    <Text style={styles.forgotPasswordSubheading}>Enter yout email to find your account</Text>
                    <InputField
                            labelText="Email adress"
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
                </View>
                <View style={styles.nextButton}>
                    <NextArrowButton
                        handleNextButton={this.goToNextStep}
                        disabled={this.toggleNextButtonState()}
                            style={[
                            styles.notificationWrapper, {
                                marginTop: notificationMarginTop
                            } ]}
                    />
                </View>
                <View
                        style={[
                        styles.notificationWrapper, {
                            marginTop: notificationMarginTop
                        }
                    ]}>
                        <Notification
                            type="Error"
                            firstLine="No account exists for the requested"
                            secondLine="email address."
                            showNotificaion={showNotificaion}
                            handleCloseNotification={this.handleCloseNotification}/>
                    </View>
                <Loader 
                    modalVisible={loadingVisible}
                    animationType="fade"
                />
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flex: 1
    },
    forgotPasswordHeading: {
        color: colors.white,
        fontSize: 28,
        fontWeight: '300'
    },
    forgotPasswordSubheading: {
        color: colors.white,
        fontWeight: '600',
        fontSize: 15,
        marginTop: 10,
        marginBottom: 60
    },
    form: {
        marginTop: 90,
        paddingLeft: 20,
        paddingRight: 20
    },
    notificationWrapper: {
        position: 'absolute',
        bottom: 0
    },
    nextButton: {
        alignItems: 'flex-end',
        position: 'absolute',
        right: 20,
        bottom: 20
    }
})

export default ForgotPassword
