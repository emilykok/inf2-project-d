import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

var curr = new Date(); // get current date
var first = curr.getDate() - curr.getDay() + 1; // First day is the day of the month - the day of the week + 1 to set on monday
var last = first + 6; // last day is the first day + 6

var today = curr.toUTCString();
var firstday = new Date(curr.setDate(first)).toUTCString();
var lastday = new Date(curr.setDate(last)).toUTCString();

console.log('firstday = ' + firstday);
console.log('lastday = ' + lastday);
console.log('curr = ' + curr);
console.log('today = ' + today);

export default class CalenderScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.background}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View>
            <Text style={styles.titletext}> Calender </Text>
          </View>

          <View style={styles.container}>
            <View>
              <View style={styles.dayselect}>
                <Text style={styles.headertext}> Calender </Text>
              </View>
            </View>
            <View style={styles.innercontainer}>
              <Text style={styles.headertext}>Welcome!</Text>
              <Text style={styles.text}>
                This is the calender screen of our first application, this will
                have many new features coming soon ;
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

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
  dayselect: {
    borderBottomWidth: 10,
    borderColor: '#BDBDBD',
    borderRadius: 5,
  },
});
