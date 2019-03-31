import {
    createStackNavigator,
  } from 'react-navigation';
  import LoggedOut from '../screens/LoggedOut';
  import LoggedIn from '../screens/LoggedIn';
  import Login from '../screens/Login';
  import ForgotPassword from '../screens/ForgotPassword';
  
  const AppRouteConfigs = createStackNavigator({
    LoggedOut: { screen: LoggedOut },
    LoggedIn: { screen: LoggedIn },
    Login: { screen: Login },
    ForgotPassword: { screen: ForgotPassword }
  });
  
  export default AppRouteConfigs;