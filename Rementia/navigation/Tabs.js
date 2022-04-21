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

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="GlucoMeter" component={GlucoMeterScreen} />
      <Tab.Screen name="Calender" component={CalenderScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="Inbox" component={InboxScreen} />
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default Tabs;
