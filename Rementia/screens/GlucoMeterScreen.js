import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';

const GlucoMeterScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View>
          <Text style={styles.titletext}> Glucosemeter </Text>
        </View>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('../assets/glucochart.png')}
          />
          <View style={styles.innercontainer}>
            <Text style={styles.headertext}>Gezond!</Text>
            <Text style={styles.text}>
              De huidige glucosewaardes van het bloedgehalte van de
              geselecteerde patient is goed
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GlucoMeterScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#008a8a',
  },
  innercontainer: {
    backgroundColor: '#7edc6b',
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
    backgroundColor: '#efefef',
    flex: 1,
    borderRadius: 5,
    padding: 10,
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
    height: '50%',
  },
});
