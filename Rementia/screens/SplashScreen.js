import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
//background, text logo

const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.background}>
      <Image
        style={styles.image}
        alignSelf="center"
        source={require('../assets/RementiaLogo.png')}
      />
      <Text style={styles.text}>Rementia</Text>

      <ActivityIndicator
        style={styles.activityIndicator}
        size="large"
        color="#fff"
      />
    </View>
  );
};

export default SplashScreen;

// stylesheet
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#008a8a',
  },
  text: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
  image: {
    width: '50%',
    height: '50%',
    marginTop: '25%',
    resizeMode: 'contain',
  },
  activityIndicator: {
    marginTop: 50,
  },
});
