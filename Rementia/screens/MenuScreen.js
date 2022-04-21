import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';

const MenuScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>MenuScreen</Text>
      <Button title="Click here" onPress={() => alert('MenuScreen')} />
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
