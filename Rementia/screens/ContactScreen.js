import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  SectionList,
  SafeAreaView,
  ScrollView,
} from 'react-native';

const UserData = [
  {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
  {
    title: 'J',
    data: [
      'Jackson',
      'James',
      'Jillian',
      'Jimmy',
      'Joel',
      'John',
      'Julie',
      'Joep',
      'Jasper',
      'Jaap',
    ],
  },
];

const ContactScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View>
          <Text style={styles.titletext}> Contacts </Text>
        </View>
        <View style={styles.container}>
          <View style={styles.container}>
            <SectionList
              sections={UserData}
              renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
              renderSectionHeader={({section}) => (
                <Text style={styles.sectionHeader}>{section.title}</Text>
              )}
              keyExtractor={(item, index) => index}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#BDBDBD',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
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
