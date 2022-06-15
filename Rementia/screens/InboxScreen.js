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

var curr = new Date(); // get current date
var yesterday = new Date(curr.setDate(curr.getDate() - 1))
  .toUTCString()
  .slice(0, 16);

const InboxScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View>
          <Text style={styles.titletext}> Inbox </Text>
        </View>
        <View style={styles.container}>
          <View style={styles.inboxMessage}>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
              }}>
              <Text style={styles.headertext}>Alert: hoog</Text>
              <Text style={styles.smalltext}>Markeren als gelezen</Text>
            </View>
            <Text style={styles.text}>
              Emily haar glucosewaardes waren op {yesterday} om 9:00 te hoog.
            </Text>
          </View>
          <View style={styles.inboxMessageRead}>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
              }}>
              <Text style={styles.headertext}>Alert: laag</Text>
              <Text style={styles.smalltext}>Markeren als ongelezen</Text>
            </View>
            <Text style={styles.text}>
              Emily haar glucosewaardes waren op {yesterday} om 12:00 te laag.
            </Text>
          </View>
          <View style={styles.inboxMessageRead}>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
              }}>
              <Text style={styles.headertext}>Alert: laag</Text>
              <Text style={styles.smalltext}>Markeren als ongelezen</Text>
            </View>
            <Text style={styles.text}>
              Emily haar glucosewaardes waren op {yesterday} om 15:00 te laag.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InboxScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#008a8a',
  },
  inboxMessage: {
    backgroundColor: '#A2DCDD',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  inboxMessageRead: {
    backgroundColor: '#E4E4E4',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
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
  smalltext: {
    fontSize: 10,
    textAlign: 'right',
    color: '#008A8A',
  },

  container: {
    backgroundColor: '#efefef',
    flex: 1,
    borderRadius: 5,
    padding: 10,
  },
});
