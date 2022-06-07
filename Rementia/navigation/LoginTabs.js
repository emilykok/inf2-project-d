import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const AuthTab = createBottomTabNavigator();
const LoginName = 'Login';
const RegisterName = 'Register';

const LoginTabs = () => {
  return (
  <AuthTab.Navigator 
    initialRouteName={LoginName}
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
    <AuthTab.Screen
      name={LoginName}
      component={LoginScreen}
      options={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={require('../assets/login.png')}
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

    <AuthTab.Screen
      name={RegisterName}
      component={RegisterScreen}
      options={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={require('../assets/register.png')}
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
  </AuthTab.Navigator>
);
};

export default LoginTabs;