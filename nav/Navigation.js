import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Home from '../screens/Home'
import Address from '../screens/Address'

const WholeNav = createStackNavigator({
    HomeScreen: Home,
    AddressScreen: Address
}, {
    defaultNavigationOptions: {
        headerTitle: "Simple GPS"
    }
})

export default createAppContainer(WholeNav)
