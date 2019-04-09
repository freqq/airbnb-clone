import { StyleSheet } from 'react-native';
import colors from '../../styles/colors'

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

export default styles;