import React, {Component} from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import {
    View,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    ScrollView,
    StyleSheet
} from 'react-native'
import InputField from '../components/form/InputField'
import colors from '../styles/colors'
import RadioInput from '../components/form/RadioInput'

class CreateList extends Component {
    static navigationOptions = ({navigation}) => ({headerLeft: (
            <TouchableOpacity
                style={styles.closeButton}
                onPress={() => navigation.goBack()}>
                <Icon name="md-close" size={30} color={colors.lightBlack}/>
            </TouchableOpacity>
        ), headerStyle: styles.headerStyle});
    
    state = {
        privacyOption: 'private'
    }

    selectPrivacyOption = (privacyOption) => {
        this.setState({privacyOption: privacyOption})
    }

    onTitleChange = (title) => {

    }

    render() {
        const { privacyOption } = this.state

        return (
            <View style={styles.wrapper}>
                <ScrollView>
                    <Text style={styles.heading}>Create a list</Text>
                    <View style={styles.content}>
                        <View style={styles.inputWrapper}>
                            <InputField
                                labelTextSize={16}
                                labelColor={colors.lightBlack}
                                inputType="text"
                                borderBottomColor={colors.gray06}
                                inputStyle={styles.inputStyle}
                                textColor={colors.lightBlack}
                                labelTextWeight="400"
                                placeholder="Some text..."
                                showCheckmark={false}
                                autoFocus={true}
                                labelText="Title"/>
                        </View>
                        <View style={styles.privacyOptions}>
                            <Text style={styles.privacyHeading}>Privacy</Text>
                            <TouchableHighlight
                                underlayColor={colors.gray01}
                                onPress={() => this.selectPrivacyOption('public')}
                                style={styles.privacyOptionItem}>
                                <View>
                                    <Text style={styles.privacyOptionTitle}>Public</Text>
                                    <Text style={styles.privacyOptionDescription}>Visible to everyone and included on your public Airbnb profile.</Text>
                                    <View style={styles.privacyRadioInput}>
                                        <RadioInput
                                            backgroundColor={colors.gray07}
                                            borderColor={colors.gray05}
                                            selectedBackgroundColor={colors.green01}
                                            selectedBorderColor={colors.green01}
                                            selected={privacyOption === 'public'}
                                            iconColor={colors.white}/>
                                    </View>
                                </View>
                            </TouchableHighlight>
                            <View style={styles.divider}></View>
                            <TouchableHighlight
                                underlayColor={colors.gray01}
                                onPress={() => this.selectPrivacyOption('private')}
                                style={styles.privacyOptionItem}>
                                <View>
                                    <Text style={styles.privacyOptionTitle}>Private</Text>
                                    <Text style={styles.privacyOptionDescription}>Visible only to you and your friends you invite.</Text>
                                    <View style={styles.privacyRadioInput}>
                                        <RadioInput
                                            backgroundColor={colors.gray07}
                                            borderColor={colors.gray05}
                                            selectedBackgroundColor={colors.green01}
                                            selected={privacyOption === 'private'}
                                            selectedBorderColor={colors.green01}
                                            iconColor={colors.white}/>
                                    </View>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: colors.white,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0
    },
    closeButton: {
        position: 'absolute',
        left: 20
    },
    headerStyle: {
        backgroundColor: colors.white,
        borderBottomWidth: 0
    },
    heading: {
        fontSize: 26,
        fontWeight: '800',
        color: colors.lightBlack,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 15
    },
    content: {
        paddingTop: 50
    },
    inputWrapper: {
        paddingLeft: 20,
        paddingRight: 20
    },
    inputStyle: {
        fontSize: 20,
        fontWeight: '400',
        paddingBottom: 30
    },
    privacyOptions: {
        marginTop: 40
    },
    privacyHeading: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.lightBlack,
        marginBottom: 5,
        paddingLeft: 20,
        paddingRight: 20
    },
    privacyOptionTitle: {
        fontSize: 16,
        fontWeight: '200',
        color: colors.lightBlack
    },
    privacyOptionItem: {
        flex: 1,
        padding: 20
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: colors.gray06,
        height: 1,
        marginLeft: 20,
        marginRight: 20
    },
    privacyRadioInput: {
        position: 'absolute',
        top: 15,
        right: 0
    },
    privacyOptionDescription: {
        fontSize: 14,
        fontWeight: '200',
        color: colors.lightBlack,
        marginTop: 10,
        paddingRight: 90
    }
})

export default CreateList