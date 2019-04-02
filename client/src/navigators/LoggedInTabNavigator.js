import {createBottomTabNavigator, StackNavigator} from 'react-navigation'
import ExploreContainer from '../containers/ExploreContainer'
import ProfileContainer from '../containers/ProfileContainer'
import InboxContainer from '../containers/InboxContainer'
import TripsContainer from '../containers/TripsContainer'
import SavedContainer from '../containers/SavedContainer'
import CreateList from '../screens/CreateList'
import colors from '../styles/colors'

export const ExploreTab = StackNavigator({
    ExploreContainer: {
        screen: ExploreContainer,
        navigationOptions: {
            header: null
        }
    },
    CreateList: {
        screen: CreateList
    }
}, {mode: 'modal'})

ExploreTab.navigationOptions = ({navigation}) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {tabBarVisible};
};

const CustomTabBarIcon = (name, size) => {
    const icon = ({tintColor}) => (<Icon name={name} size={size} color={tintColor}/>);

    icon.propTypes = {
        tintColor: PropTypes.string.isRequired
    };

    return icon;
};

const LoggedInTabNavigator = createBottomTabNavigator({
    Explore: {
        screen: ExploreTab
    },
    Saved: {
        screen: SavedContainer
    },
    Trips: {
        screen: TripsContainer
    },
    Inbox: {
        screen: InboxContainer
    },
    Profile: {
        screen: ProfileContainer
    }
}, {
    tabBarOptions: {
        labelStyle: {
            fontWeight: '600',
            marginBottom: 5
        },
        activeTintColor: colors.pink
    }
})

export default LoggedInTabNavigator
