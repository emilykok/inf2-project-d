import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';

const InboxScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>InboxScreen</Text>
      <Button title="Click here" onPress={() => alert('InboxScreen')} />
    </View>
  );
};

export default InboxScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
