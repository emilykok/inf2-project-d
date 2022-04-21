import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  SectionList,
} from 'react-native';

const UserData = [
  {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
  {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
];

const ContactScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
    <SectionList
      sections={UserData}
      renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
      renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
      keyExtractor={(item, index) => index}
    />
  </View>
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
});
