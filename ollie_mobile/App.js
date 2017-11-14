import React from 'react';
import { StackNavigator } from 'react-navigation';
import { View, Text, Video, WebView, Button,TouchableWithoutFeedback, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    
    <Text>Do you believe in Self-Driving Cars?</Text>

    <TouchableWithoutFeedback onPress={() => navigation.navigate('Content1')}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Yes!</Text>
      </View>
    </TouchableWithoutFeedback>

    <TouchableWithoutFeedback onPress={() => navigation.navigate('Content1')}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>No!</Text>
      </View>
    </TouchableWithoutFeedback>

    <TouchableWithoutFeedback onPress={() => navigation.navigate('Content1')}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Maybe</Text>
      </View>
    </TouchableWithoutFeedback>

  </View>
);



const styles = StyleSheet.create({
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
})


const Content1 = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <WebView
        style={{flex:1}}
        javaScriptEnabled={true}
        source={{uri: 'https://www.youtube.com/embed/ZZ5LpwO-An4?rel=0&autoplay=0&showinfo=0&controls=0'}}
    /> 
  </View>
);

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
      headerStyle: { marginTop: 24 },
    },
  },

  Content1: {
    screen: Content1,
    navigationOptions: {
      headerTitle: 'Content1',
      headerStyle: { marginTop: 24 },
    },
  },

  // Content2: {
  //   screen: Content2,
  //   navigationOptions: {
  //     headerTitle: 'Content2',
  //     headerStyle: { marginTop: 24 },
  //   },
  // },

});

export default RootNavigator;

