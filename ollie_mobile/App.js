import React from 'react';
import { StackNavigator } from 'react-navigation';
import { View, Video, WebView, Button,TouchableWithoutFeedback, StyleSheet, Image, Swiper, Dimensions } from 'react-native';
import * as Progress from 'react-native-progress';
import {Text} from 'react-native-elements';

const HOME='home';
const SELECT1='s1';
const CONTENT1='c1';

export default class App extends React.Component {
  constructor(props) {
    super(props);  

    this.state = {
      screen: HOME,
      progress: 0
    }
  }

  render() {
    const {screen} = this.state; 

    switch(screen) {
      case HOME:
        updateIndex = (index) => {
          this.setState({index})
        }

        goToS1 = () => {
          this.setState({screen: SELECT1})
        }

        return (
          <Image 
              source={require('./assets/img1.jpeg')}
              style={styles.backgroundImage}>
            <View style={styles.container}>
              
              <Text style={{ marginTop: 34, marginBottom: 1}}>Progress Bar Towards the Free Ride!</Text>
              <Progress.Bar progress={this.state.progress} width={300} height={30} color='pink'/>

              <Text style={{marginTop: 150, marginBottom: 40, color: 'white'}} h4>Do you believe in Self-Driving Cars?</Text>

              <TouchableWithoutFeedback onPress={goToS1}>
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
          </Image>
        );
        break;

      case SELECT1:
        return (
          <View style={styles.container}>
            <Text style={{ marginTop: 34, marginBottom: 1}}>Progress Bar Towards the Free Ride!</Text>
            <Progress.Bar progress={this.state.progress} width={300} height={30} color='pink'/>
            <View style={{flex: 1}}>
              <View style={{flex: 1}}>
                <Image 
                  style={styles.img}
                  resizeMode="contain"
                  source={require('./assets/img1.jpeg')}
                  onPress={() => this.setState({screen: CONTENT1})}/>
              </View>
              <View style={{flex: 1}}>
                <Image 
                  style={styles.img}
                  resizeMode="contain"
                  source={require('./assets/img1.jpeg')}/>
              </View>
            </View>
            <Button title='back'
            onPress={() => this.setState({screen: HOME, progress: 0.25})}/>
          </View>
        );
        break;

      case CONTENT1:
        return (
          <View style={styles.container}>
            <Button title='back'
            onPress={() => this.setState({screen: HOME, progress: 0.5})}/>
          </View>
        );
        break;
    }
  }
}

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
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null
  },
  container: { 
    flex: 1, 
    alignItems: 'center', 
    backgroundColor:'rgba(0,0,0,.3)'
  },
  img: {
    alignSelf: 'center',
    height: 300,
    width: 500
  }
});

/*
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
*/
