import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './navigation/Tabs';
import LoginTabs from './navigation/LoginTabs';
import { ActivityIndicator, View, Text } from 'react-native';
import { AuthContext } from './components/Context';
import AsyncStorage from '@react-native-community/async-storage';

const App = () => {
  // const[isloading, setIsLoading] = React.useState(true);
  // const[userToken, setUserToken] = React.useState(null);

  const intialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':	
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, intialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async(userName, password) => { 
      // setUserToken('secret-token');
      // setIsLoading(false);
      let userToken;
      userToken = null;
      //replace next part with api call
      if (userName == 'admin' && password == 'admin') {
        try {
          userToken = 'admin';
          await AsyncStorage.setItem('userToken', userToken);
        }
        catch (e) {
          console.log(e);
        }
      }	
      console.log('userToken: ', userToken);
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    signOut: async() => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userToken');
      }
      catch (e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
      setUserToken('secret-token');
      setIsLoading(false);
    },
  }), []);


  React.useEffect(() => {
    setTimeout(async() => {
      // setIsLoading(false);
      let userToken;
      userToken = null;	
      try {
        userToken = await AsyncStorage.getItem('userToken');
      }
      catch (e) {
        console.log(e);
      }
      console.log('userToken: ', userToken);
      dispatch({ type: 'REGISTER', token: userToken });
    }, 1000);
  }, []);

  if(loginState.isloading){
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large"/>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        { loginState.userToken != null ? <Tabs /> : <LoginTabs /> }
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
