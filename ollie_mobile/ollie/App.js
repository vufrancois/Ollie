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
const CONG='congrats';
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
              source={require('./assets/Screen1.jpg')}
              style={styles.backgroundImage}>
            <View style={{flex: 1, alignItems: 'center', marginTop: 500}}>
              
              
              <TouchableWithoutFeedback onPress={goToS1}>
                <Image
                  // style={styles.buttonVu}
                  style={{width: widthDev, height: 70}}
                  source={require('./assets/Yes_Button.png')}
                />
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={goToS1}>
                <Image
                  // style={styles.buttonVu}
                  style={{width: widthDev, height: 70}}
                  source={require('./assets/Maybe_Button_Tap.png')}
                />
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={goToS1}>
                <Image
                  // style={styles.buttonVu}
                  style={{width: widthDev, height: 70}}
                  source={require('./assets/No_Button.png')}
                />
              </TouchableWithoutFeedback>

              

            </View>
          </Image>
        );
        break;

      case SELECT1:
        return (
          <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableHighlight onPress={() => this.setState({screen: CONTENT1})}>
              <Image 
                  source={require('./assets/Screen2.jpg')}
                  style={{width: widthDev, height: heightDev}}>
              </Image>
            </TouchableHighlight>
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
          <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableHighlight onPress={() => this.setState({screen: CONTENT2})}>
              <Image 
                  source={require('./assets/Screen4.jpg')}
                  style={{width: widthDev, height: heightDev}}>
              </Image>
            </TouchableHighlight>
          </View>
        );
        break;

      case CONTENT2:
        return (
          <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableHighlight onPress={() => this.setState({screen: SELECT4})}>
              <Image 
                  source={require('./assets/Screen5.jpg')}
                  style={{width: widthDev, height: heightDev}}>
              </Image>
            </TouchableHighlight>
          </View>
        );
        break;

      case SELECT3:
        return (
          <View style={{flex: 1, backgroundColor: 'black'}}>
            <View style={{flex: 1, marginTop: 30}}>
              <View style={{flex: 1}}>
                <TouchableHighlight onPress={() => this.setState({screen: CONTENT3})}>
                  <Image 
                    style={styles.img}
                    source={require('./assets/Screen6_Top.png')}>
                    </Image>
                </TouchableHighlight>
              </View>

              <View style={{flex: 1}}>
                <TouchableHighlight onPress={() => this.setState({screen: CONTENT3})}>
                  <Image 
                    style={styles.img}
                    source={require('./assets/GIF_2.gif')}
                    />
                </TouchableHighlight>
              </View>
            </View>
          </View>
        );
        break;

      case CONTENT3:
        return (
          <Image 
              source={require('./assets/Screen7.jpg')}
              style={styles.backgroundImage}>
            <View>
              <TouchableHighlight onPress={() => this.setState({screen: CONG})}>
                <Image style={{top:167}}
                source={require('./assets/GIF_2.gif')} />
              </TouchableHighlight>
            </View>
          </Image>
        );
        break;

      case SELECT4:
        return (
          <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableHighlight onPress={() => this.setState({screen: CONTENT4})}>
              <Image 
                  source={require('./assets/Screen8.jpg')}
                  style={{width: widthDev, height: heightDev}}>
              </Image>
            </TouchableHighlight>
          </View>
        );
        break;

      case CONTENT4:
        return (
          <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableHighlight onPress={() => this.setState({screen: SELECT3})}>
              <Image 
                  source={require('./assets/Screen9.jpg')}
                  style={{width: widthDev, height: heightDev}}>
              </Image>
            </TouchableHighlight>
          </View>
        );
        break;

      case CONG:
        return (
          <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableHighlight onPress={() => this.setState({screen: SHARE})}>
              <Image 
                  source={require('./assets/Screen10.jpg')}
                  style={{width: widthDev, height: heightDev}}>
              </Image>
            </TouchableHighlight>
          </View>
        );
        break;

      case SHARE:
        return (
          <Image 
              source={require('./assets/Screen11.jpg')}
              style={styles.backgroundImage}>
            <View style={{flex: 1, alignItems: 'center', marginTop: 500}}>
              
              
              <TouchableWithoutFeedback>
                <Image
                  style={{width: 270, height: 70, borderRadius: 10}}
                  source={require('./assets/fb.png')}
                />
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback>
                <Image
                  // style={styles.buttonVu}
                  style={{width: 270, height: 70, borderRadius: 10}}
                  source={require('./assets/twitter.png')}
                />
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback>
                <Image
                  // style={styles.buttonVu}
                  style={{width: 270, height: 70, borderRadius: 10}}
                  source={require('./assets/msg.png')}
                />
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.setState({screen: HOME})}>
                <Image
                  // style={styles.buttonVu}
                  style={{width: 55, height: 15, marginTop: 20}}
                  resizeMode="stretch"
                  source={require('./assets/skip.png')}
                />
              </TouchableWithoutFeedback>
              

            </View>
          </Image>
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
  chooseOneTop: {
    paddingTop: 370,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 60
  },
  chooseOneBottom: {
    marginTop: -34,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 60
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
