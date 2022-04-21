import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';

const ContactScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>ContactScreen</Text>
      <Button title="Click here" onPress={() => alert('ContactScreen')} />
    </View>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
