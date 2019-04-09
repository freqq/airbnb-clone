import {StyleSheet} from 'react-native';
import colors from '../../styles/colors'

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

export default styles;