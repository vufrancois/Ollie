import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MapView from 'react-native-maps';
import MyMap from './MyMap';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.map}>
          <MyMap/>
        </View>
        <View style={{flex: 3}}>
          <Text>Other Components to go here</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
