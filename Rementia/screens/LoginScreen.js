import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  TextInputBase,
  TextInput,
} from 'react-native';

import { AuthContext } from '../components/Context';

const LoginScreen = ({navigation}) => {

  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const { signIn } = React.useContext(AuthContext);

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const loginHandle = (username, password) => {
    console.log(username + " " + password);
    signIn(username, password);
  };

  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <TextInput
        placeholder="Username"
        placeholderTextColor="#666666"
        autoCapitalize="none"
        onChangeText={(val) => textInputChange(val)}
      />
      <Button title="Click here" onPress={() => loginHandle(data.username, data.password) } />
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
