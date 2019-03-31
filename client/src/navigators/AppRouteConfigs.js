import {
    createStackNavigator,
  } from 'react-navigation';
  import LoggedOut from '../screens/LoggedOut';
  import Login from '../screens/Login';
  import ForgotPassword from '../screens/ForgotPassword';
  
  const AppRouteConfigs = createStackNavigator({
    LoggedOut: { screen: LoggedOut },
    Login: { screen: Login },
    ForgotPassword: { screen: ForgotPassword }
  });
  
  export default AppRouteConfigs;