import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import Homescreen from '../Homescreen';
import Aboutscreen from '../Aboutscreen';
import Formscreen from '../Formscreen';
import Listscreen from '../Listscreen';
import Userscreen from '../Userscreen';


const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: Homescreen,
        navigationOptions: {
            title: 'Home'
        }
    },
    Form: {
        screen: Formscreen,
        navigationOptions: {
            title: 'Request a Room'
        }
    },
    Bookings: {
        screen: Aboutscreen,
        navigationOptions: {
            title: 'View My Bookings'
        }
    },
    Listings: {
        screen: Listscreen,
        navigationOptions: {
            title: 'View Available Listings'
        }
    },
    Profile: {
        screen: Userscreen,
        navigationOptions: {
            title: 'View My Profile'
        }
    }
})

export default createAppContainer(RootDrawerNavigator);


