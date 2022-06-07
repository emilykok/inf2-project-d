import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './navigation/Tabs';
import LoginTabs from './navigation/LoginTabs';
import { ActivityIndicator, View, Text } from 'react-native';
import { AuthContext } from './components/Context';

const App = () => {
  const[isloading, setIsLoading] = React.useState(true);
  const[userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => ({
    signIn: () => { 
      setUserToken('secret-token');
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('secret-token');
      setIsLoading(false);
    },
  }), []);


  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if(isloading){
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
        { userToken != null ? <Tabs /> : <LoginTabs /> }
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
