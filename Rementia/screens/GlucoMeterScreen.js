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
          <Text style={styles.titletext}> Glucose Meter </Text>
        </View>
        <View style={styles.container}>
          <View style={styles.innercontainer}>
            <Text style={styles.headertext}>Welcome!</Text>
            <Text style={styles.text}>
              This is the glucose meter screen of our first application, this
              will have many new features coming soon ;)
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
    backgroundColor: '#efefef',
    flex: 1,
    borderRadius: 5,
    padding: 10,
  },
});
