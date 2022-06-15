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
          <Text style={styles.titletext}> Contacten </Text>
        </View>
        <View style={styles.container}>
          <View style={styles.concactBox}>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
              }}>
              <View>
                <Image
                  style={styles.image}
                  source={require('../assets/henk.jpg')}
                />
              </View>
              <View>
                <Text style={styles.headertext}>Henk</Text>

                <Text style={styles.text}>Telefoonnummer: 06-12345678</Text>
                <Text style={styles.text}>Email: henk@gmail.com</Text>
              </View>
            </View>
          </View>

          <View style={styles.concactBox}>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
              }}>
              <View>
                <Image
                  style={styles.image}
                  source={require('../assets/nugs.jpg')}
                />
              </View>
              <View>
                <Text style={styles.headertext}>Sara</Text>

                <Text style={styles.text}>Telefoonnummer: 06-12345678</Text>
                <Text style={styles.text}>Email: wasbever@gmail.com</Text>
              </View>
            </View>
          </View>
          <View style={styles.concactBox}>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
              }}>
              <View>
                <Image
                  style={styles.image}
                  source={require('../assets/harrie.jpg')}
                />
              </View>
              <View>
                <Text style={styles.headertext}>Harrie</Text>
                <Text style={styles.text}>Telefoonnummer: 06-12345678</Text>
                <Text style={styles.text}>Email: harrieee@gmail.com</Text>
              </View>
            </View>
          </View>
          <View style={styles.concactBox}>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
              }}>
              <View>
                <Image
                  style={styles.image}
                  source={require('../assets/hutao.jpg')}
                />
              </View>
              <View>
                <Text style={styles.headertext}>Hu-Tao</Text>

                <Text style={styles.text}>Telefoonnummer: 06-12345678</Text>
                <Text style={styles.text}>Email: yahoo@gmail.com</Text>
              </View>
            </View>
          </View>
          <View style={styles.concactBox}>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
              }}>
              <View>
                <Image
                  style={styles.image}
                  source={require('../assets/emma.jpg')}
                />
              </View>
              <View>
                <Text style={styles.headertext}>Emma</Text>

                <Text style={styles.text}>Telefoonnummer: 06-12345678</Text>
                <Text style={styles.text}>Email: emmer@gmail.com</Text>
              </View>
            </View>
          </View>
          <View style={styles.concactBox}>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
              }}>
              <View>
                <Image
                  style={styles.image}
                  source={require('../assets/frogpfp.jpg')}
                />
              </View>
              <View>
                <Text style={styles.headertext}>Lauren</Text>

                <Text style={styles.text}>Telefoonnummer: 06-12345678</Text>
                <Text style={styles.text}>Email: kikkers@gmail.com</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#008a8a',
    marginBottom: 50,
  },
  concactBox: {
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
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
});
