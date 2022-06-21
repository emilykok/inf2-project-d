import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';

//import screens
import HomeScreen from '../screens/HomeScreen';
import GlucoMeterScreen from '../screens/GlucoMeterScreen';
import CalenderScreen from '../screens/CalenderScreen';
import ContactScreen from '../screens/ContactScreen';
import InboxScreen from '../screens/InboxScreen';
import MenuScreen from '../screens/MenuScreen';

import {AuthContext} from '../components/Context';

const Tab = createBottomTabNavigator();
const HomeName = 'Home';
const GlucoMeterName = 'GlucoMeter';
const CalenderName = 'Calender';
const ContactName = 'Contact';
const InboxName = 'Inbox';
const MenuName = 'Menu';

const Tabs = () => {
  const {signOut} = React.useContext(AuthContext);
  const [showBox, setShowBox] = useState(true);

  const showConfirmDialog = () => {
    return Alert.alert(
      'Weet je het zeker?',
      'Je staat op het punt om uit te loggen',
      [
        // The "Yes" button
        {
          text: 'Ja',
          onPress: () => {
            setShowBox(false);
            signOut();
          },
        },
        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        {
          text: 'Nee',
        },
      ],
    );
  };
  return (
    <Tab.Navigator
      initialRouteName={HomeName}
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          backgroundColor: '#FFFFFF',
        },
        //tabBarActiveTintColor: '#008A8A',
      })}>
      <Tab.Screen
        name={HomeName}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/home.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#008A8A' : '#BDBDBD',
                }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name={GlucoMeterName}
        component={GlucoMeterScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/chart-histogram.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#008A8A' : '#BDBDBD',
                }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name={CalenderName}
        component={CalenderScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/calendar.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#008A8A' : '#BDBDBD',
                }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name={ContactName}
        component={ContactScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/address-book.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#008A8A' : '#BDBDBD',
                }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name={InboxName}
        component={InboxScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/envelope.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#008A8A' : '#BDBDBD',
                }}
              />
            </View>
          ),
        }}
      />

      {/* <Tab.Screen
        name={MenuName}
        component={MenuScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/menu-burger.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#008A8A' : '#BDBDBD',
                }}
              />
            </View>
          ),
        }}
      /> */}

      <Tab.Screen
        name="Logout"
        component={MenuScreen}
        listeners={({navigation}) => ({
          tabPress: event => {
            event.preventDefault();
            showConfirmDialog();
          },
        })}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/logout.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#008A8A' : '#BDBDBD',
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
