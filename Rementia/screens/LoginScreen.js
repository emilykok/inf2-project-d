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
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AuthContext} from '../components/Context';

const LoginScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const {signIn} = React.useContext(AuthContext);

  const textInputChange = val => {
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = val => {
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

  const loginHandle = (email, password) => {
    console.log(email + ' ' + password);
    signIn(email, password);
  };

  return (
    <SafeAreaView style={styles.background}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled">
        <View>
          <Text style={styles.titletext}> Inloggen </Text>
        </View>
        <View style={styles.container}>
          <View style={styles.action}>
            <Image
              source={require('../assets/email.png')}
              style={styles.image}
              resizeMode="contain"
            />
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              placeholderTextColor="#666666"
              autoCapitalize="none"
              onChangeText={val => textInputChange(val)}
            />
          </View>
          <View style={styles.action}>
            <Image
              source={require('../assets/padlock.png')}
              style={styles.image}
              resizeMode="contain"
            />
            <TextInput
              style={styles.textInput}
              placeholder="Wachtwoord"
              placeholderTextColor="#666666"
              autoCapitalize="none"
              secureTextEntry={data.secureTextEntry ? true : false}
              onChangeText={val => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Image
                  source={require('../assets/hide.png')}
                  style={styles.image}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  source={require('../assets/view.png')}
                  style={styles.image}
                  resizeMode="contain"
                />
              )}
            </TouchableOpacity>
          </View>
          <Button
            style={styles.button}
            title="Inloggen"
            onPress={() => loginHandle(data.email, data.password)}
            color="#008a8a"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export var IsSignedIn;
export default LoginScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#008a8a',
  },
  innercontainer: {
    backgroundColor: '#A2DCDD',
    padding: 20,
    borderRadius: 10,
  },
  headertext: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  titletext: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    padding: 20,
  },
  text: {
    fontSize: 15,
    textAlign: 'left',
  },
  container: {
    marginTop: 50,
    backgroundColor: '#efefef',
    borderRadius: 5,
    padding: 10,
  },
  textInput: {
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  image: {
    width: 25,
    height: 25,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
});
