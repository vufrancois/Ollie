import React from 'react';
import { StackNavigator } from 'react-navigation';
import { View, Video, WebView, Button,TouchableWithoutFeedback, StyleSheet, Image, Swiper, Dimensions, TouchableHighlight } from 'react-native';
import * as Progress from 'react-native-progress';
import {Text} from 'react-native-elements';

const HOME='home';
const SELECT1='s1';
const CONTENT1='c1';
const HOWTO='instructions';
const SELECT2='s2';
const CONTENT2='c2';
const SELECT3='s3';
const CONTENT3='c3';
const SELECT4='s4';
const CONTENT4='c4';
const CON='congrats';
const SHARE='share';

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
    var widthDev = Dimensions.get('window').width; //full width
    var heightDev = Dimensions.get('window').height; //full height

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

          <View style={{ marginTop: 30, marginBottom: 1, flex: 1}}>
            <View style={{flex: 1}}>
              <View style={{flex: 1}}>
                <TouchableHighlight onPress={() => this.setState({screen: CONTENT1})}>
                  <Image 
                    style={styles.img}
                    source={require('./assets/Screen2/Waymo_in_car_view.gif')}>
                    
                    <View style={styles.backdropView}>
                      <Text style={styles.chooseOne}>Choose One!</Text>
                    </View>
                    
                    </Image>
                </TouchableHighlight>
              </View>

              <View style={{flex: 1}}>
                <TouchableHighlight onPress={() => this.setState({screen: CONTENT1})}>
                  <Image 
                    style={styles.img}
                    source={require('./assets/Screen2/Bottom_Image.png')}
                    resizeMode='stretch'
                    />
                </TouchableHighlight>
              </View>
            </View>
          </View>
        );
        break;

      case CONTENT1:
        return (
          <Image 
              source={require('./assets/Screen_3.png')}
              style={styles.backgroundImage}>
            <View>
              <TouchableHighlight onPress={() => this.setState({screen: SELECT2})}>
                <Image style={{top:167}}
                source={require('./assets/Screen2/Waymo_in_car_view.gif')} />
              </TouchableHighlight>
            </View>
          </Image>
        );
        break;

      case SELECT2:
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
          </View>
        );
        break;

      case CONTENT2:
        return (
          <Image 
              source={require('./assets/img1.jpeg')}
              style={styles.backgroundImage}
              onPress={() => this.setState({screen: SELECT3})} />
        );
        break;

      case SELECT3:
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
                  onPress={() => this.setState({screen: CONTENT3})}/>
              </View>
              <View style={{flex: 1}}>
                <Image 
                  style={styles.img}
                  resizeMode="contain"
                  source={require('./assets/img1.jpeg')}/>
              </View>
            </View>
          </View>
        );
        break;

      case CONTENT3:
        return (
          <Image 
              source={require('./assets/img1.jpeg')}
              style={styles.backgroundImage}
              onPress={() => this.setState({screen: SELECT4})} />
        );
        break;

      case SELECT4:
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
                  onPress={() => this.setState({screen: CONTENT4})}/>
              </View>
              <View style={{flex: 1}}>
                <Image 
                  style={styles.img}
                  resizeMode="contain"
                  source={require('./assets/img1.jpeg')}/>
              </View>
            </View>
          </View>
        );
        break;

      case CONTENT4:
        return (
          <Image 
              source={require('./assets/img1.jpeg')}
              style={styles.backgroundImage}
              onPress={() => this.setState({screen: CONG})} />
        );
        break;

      case CONG:
        return (
          <Image 
              source={require('./assets/img1.jpeg')}
              style={styles.backgroundImage}
              onPress={() => this.setState({screen: SHARE})} />
        );
        break;

      case SHARE:
        return (
          <Image 
              source={require('./assets/img1.jpeg')}
              style={styles.backgroundImage} />
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
    alignItems: 'center'
  },
  img: {
    alignSelf: 'stretch',
    height: (Dimensions.get('window').height-30)/2,
    width: Dimensions.get('window').width
  },
  canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  backdropView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  chooseOne: {
    paddingTop: 370,
    color: 'white',
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
