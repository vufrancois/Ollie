import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Text} from 'react-native';

export default class ButtonBasics extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.questionContainer}>
          <Text style={styles.bigblue}> Do you believe in Self-Driving Cars?</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Yes"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="No"
            color="#841584"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Maybe"
            color="#555555"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    margin: 20,
    // width: '100%'
  },
  questionContainer: {
   justifyContent: 'center'
  },
  bigblue: {
    textAlign: 'center',
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
  }
})
