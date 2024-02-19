import { createDrawerNavigator } from '@react-navigation/drawer';

import { Feather } from '@expo/vector-icons';
import Seed from '../screens/Seed';
import Profile from '../screens/Profile';
import Home from '../screens/Home';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { ScreenStackHeaderRightView } from 'react-native-screens';
import { Image } from 'react-native';
const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (

    <Drawer.Navigator screenOptions={{
      title: '',
      /* drawerIcon: () => (
 
         <Image source={require('../../assets/menuIcon.png')}></Image>
       ),*/
       
    }} >
     <Drawer.Screen
        name="home"
        component={Home}
        options={{ drawerLabel: 'Home' }}
        
      />
      <Drawer.Screen
        name="seed"
        component={Seed}
        options={{ drawerLabel: 'Seed' }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ drawerLabel: 'Profile' }}
      />
      
    </Drawer.Navigator>
  )
}

