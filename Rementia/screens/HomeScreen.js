import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
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
var date = new Date(curr.setDate(curr.getDate())).toUTCString().slice(0, 16);

const HomeScreen = ({navigation}) => {
  const [name, setName] = React.useState('Emily');
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View>
          <Text style={styles.titletext}> Home </Text>
        </View>
        <View style={styles.container}>
          <View style={[styles.innercontainer]}>
            <Text style={styles.headertext}>Goedendag Melissa</Text>
            <Text style={styles.text}>
              Je bekijkt momenteel de gegevens van:
            </Text>
            <View style={styles.pickercontainer}>
              <Picker
                selectedValue={name}
                onValueChange={(value, index) => setName(value)}
                mode="dropdown" // Android only
                style={styles.picker}>
                <Picker.Item label="Selecteer een patient" value="Unknown" />
                <Picker.Item label="Emily" value="Emily" />
                <Picker.Item label="Viktor" value="Viktor" />
                <Picker.Item label="Rick" value="Rick" />
                <Picker.Item label="Henk" value="Henk" />
                <Picker.Item label="Harrie" value="Harrie" />
              </Picker>
            </View>
          </View>
          <View style={[styles.innercontainer]}>
            <Text style={styles.headertext}>Aankomende afspraken</Text>
            <View style={styles.pickercontainer}>
              <Text style={styles.smalltext}> {date} | 13:15 - 14:15</Text>
              <Text style={styles.text}>Koffie drinken met Hu Tao</Text>
            </View>
            <View style={styles.pickercontainer}>
              <Text style={styles.smalltext}> {date} | 15:35 - 16:00 </Text>
              <Text style={styles.text}>Insuline pomp hervullen</Text>
            </View>
            <Text style={styles.smalltextright}>Meer afspraken...</Text>
          </View>
          <View style={[styles.innercontainer]}>
            <Text style={styles.headertext}>Alerts</Text>

            <View style={styles.alertcontainer}>
              <Text style={styles.headertext}>Gezond!</Text>
            </View>
            <Text style={styles.smalltextright}>Meer meldingen...</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#008a8a',
    marginBottom: 50,
  },
  innercontainer: {
    backgroundColor: '#A2DCDD',
    padding: 20,
    borderRadius: 10,
    marginBottom: 5,
  },
  pickercontainer: {
    backgroundColor: '#E4E4E4',
    borderRadius: 10,
    padding: 10,
    marginBottom: 5,
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
  smalltext: {
    fontSize: 10,
    color: '#008A8A',
  },
  smalltextright: {
    fontSize: 10,
    color: '#008A8A',
    textAlign: 'right',
  },
  alertcontainer: {
    backgroundColor: '#7edc6b',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  picker: {},
});
