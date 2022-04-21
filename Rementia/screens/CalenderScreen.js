import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';

const CalenderScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>CalenderScreen</Text>
      <Button title="Click here" onPress={() => alert('CalenderScreen')} />
    </View>
  );
};

export default CalenderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
