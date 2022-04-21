import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';

const GlucoMeterScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>GlucoMeterScreen</Text>
      <Button title="Click here" onPress={() => alert('GlucoMeterScreen')} />
    </View>
  );
};

export default GlucoMeterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
