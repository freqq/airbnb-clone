import AppRouteConfigs from '../../navigators/AppRouteConfigs';

const firstAction = AppRouteConfigs.router.getActionForPathAndParams('LoggedIn')
const initialNavState = AppRouteConfigs.router.getStateForAction(firstAction)

export const nav = (state = initialNavState, action) => {
    let nextState = AppRouteConfigs.router.getStateForAction(action, state)
    return nextState || state
}