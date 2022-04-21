import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
      <Button title="Click here" onPress={() => alert('ProfileScreen')} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
