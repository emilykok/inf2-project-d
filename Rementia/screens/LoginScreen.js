import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';

import { AuthContext } from '../components/Context';

const LoginScreen = ({navigation}) => {

  const { signIn } = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <Button title="Click here" onPress={() => signIn() } />
    </View>
  );
};

export var IsSignedIn; 
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
