import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//import screens
import HomeScreen from '../screens/HomeScreen';
import GlucoMeterScreen from '../screens/GlucoMeterScreen';
import CalenderScreen from '../screens/CalenderScreen';
import ContactScreen from '../screens/ContactScreen';
import InboxScreen from '../screens/InboxScreen';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const HomeName = 'Home';
const GlucoMeterName = 'GlucoMeter';
const CalenderName = 'Calender';
const ContactName = 'Contact';
const InboxName = 'Inbox';
const ProfileName = 'Profile';
const LoginName = 'Login';

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={HomeName}
      screenOptions={({route}) => ({
        tabBarShowLabel: false
      })}>
      <Tab.Screen name={HomeName} component={HomeScreen} />
      <Tab.Screen name={GlucoMeterName} component={GlucoMeterScreen} />
      <Tab.Screen name={CalenderName} component={CalenderScreen} />
      <Tab.Screen name={ContactName} component={ContactScreen} />
      <Tab.Screen name={InboxName} component={InboxScreen} />
      <Tab.Screen name={LoginName} component={LoginScreen} />
      <Tab.Screen name={ProfileName} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default Tabs;