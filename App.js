// // /**
// //  * Sample React Native App
// //  * https://github.com/facebook/react-native
// //  *
// //  * @format
// //  * @flow
// //  */

// // import React, {Component} from 'react';
// // import {Platform, StyleSheet, Text, View} from 'react-native';
// // import ViewPagerPage from './pager';

// // const instructions = Platform.select({
// //   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
// //   android:
// //     'Double tap R on your keyboard to reload,\n' +
// //     'Shake or press menu button for dev menu',
// // });

// // type Props = {};
// // export default class App extends Component<Props> {
// //   render() {
// //     return (
// //       <View style={styles.container}>
// //         <ViewPagerPage></ViewPagerPage>
// //       </View>
// //     );
// //   }
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#F5FCFF',
// //   },
// //   welcome: {
// //     fontSize: 20,
// //     textAlign: 'center',
// //     margin: 10,
// //   },
// //   instructions: {
// //     textAlign: 'center',
// //     color: '#333333',
// //     marginBottom: 5,
// //   },
// // });


// import {StyleSheet, View, Text} from 'react-native';
// import React, {Component} from 'react';
// import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';

// export default class ViewPagerPage extends Component {
//     render() {
//         return (
//             <View style={{flex:1}}>
//                 {/* <IndicatorViewPager
//                     style={{height:200}}
//                     indicator={this._renderDotIndicator()}
//                 >
//                     <View style={{backgroundColor:'cadetblue'}}>
//                         <Text>page one</Text>
//                     </View>
//                     <View style={{backgroundColor:'cornflowerblue'}}>
//                         <Text>page two</Text>
//                     </View>
//                     <View style={{backgroundColor:'#1AA094'}}>
//                         <Text>page three</Text>
//                     </View>
//                 </IndicatorViewPager> */}
// {/* 
//                 <IndicatorViewPager
// 					style={{flex:1, paddingTop:20, backgroundColor:'white'}}
//                     indicator={this._renderTitleIndicator()}
//                 >
//                     <View style={{backgroundColor:'cadetblue'}}>
//                         <Text>page one</Text>
//                     </View>
//                     <View style={{backgroundColor:'cornflowerblue'}}>
//                         <Text>page two</Text>
//                     </View>
//                     <View style={{backgroundColor:'#1AA094'}}>
//                         <Text>page three</Text>
//                     </View>
//                 </IndicatorViewPager> */}
                
//                 <IndicatorViewPager
// 					style={{flex:1, paddingTop:20, backgroundColor:'white'}}
//                     indicator={this._renderTabIndicator()}
//                 >
//                     <View style={{backgroundColor:'cadetblue'}}>
//                         <Text>page one</Text>
//                     </View>
//                     <View style={{backgroundColor:'cornflowerblue'}}>
//                         <Text>page two</Text>
//                     </View>
//                     <View style={{backgroundColor:'#1AA094'}}>
//                         <Text>page three</Text>
//                     </View>
//                 </IndicatorViewPager>
//             </View>
//         );
//     }

//     _renderTitleIndicator() {
//         return <PagerTitleIndicator titles={['one', 'two', 'three']} />;
//     }

//     _renderDotIndicator() {
//         return <PagerDotIndicator pageCount={3} />;
//     }
    
//     _renderTabIndicator() {
//         let tabs = [{
//                 text: 'Home',
//                 iconSource: require('./img/manish.png'),
//                 selectedIconSource: require('./img/manish2.png')
//             },{
//                 text: 'Message',
//                 iconSource: require('./img/manish.png'),
//                 selectedIconSource: require('./img/manish2.png')
//             },{
//                 text: 'Profile',
//                 iconSource: require('./img/manish.png'),
//                 selectedIconSource: require('./img/manish2.png')
//         }];
//         return <PagerTabIndicator tabs={tabs} />;
//     }

// }

import React from 'react';
import { Button, View, Text, StyleSheet,ActivityIndicator, ImageBackground ,Image} from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import  LoginFormScreen  from './src/components/Auth/LoginForm/index';
import RegisterFormScreen  from './src/components/Auth/RegisterForm/index';
import WelcomeScreen from './src/components/WelcomeScreen/index';
import ForgotPassword from  './src/components/Auth/ForgotPassword'



const styles = StyleSheet.create({
  btnView : {
    marginBottom:10,
    height:50,
    width: '90%',
    borderRadius: 5,
  },
  primaryBtn:{
    paddingTop:10,
    paddingBottom:10,
  },
  container: {
    flex: 1,
  },
});

class HomeScreen extends React.Component {
  // static navigationOptions = {  
  //   header: null
  // }

  state={
    isloading:true
  }

// async componentDidMount() {
//   await Font.loadAsync({
//     'Roboto': require('native-base/Fonts/Roboto.ttf'),
//     'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
//     'FontAwesome': require('./assets/Fonts/FontAwesome5_Regular.ttf'),
//     ...Ionicons.font,
//   });
//   this.setState({
//     isloading:false
//   })
// }

  render() {
    // if(this.state.isloading){
    //   return(
    //     <View style={[styles.container]}>
    //       <ImageBackground
    //         style={{width: '100%', height: '100%'}}
    //         source={require('./assets/start-bg.jpg')}
    //       >
    //         <ActivityIndicator size="large" color="#10d4f4" style={{margin:150}}/>

    //       </ImageBackground>
    //   </View>
    //   )
    // }
    return (
      <ImageBackground
            style={{width: '100%', height: '100%'}}
            source={require('./assets/user-bg.jpg')}
          >
        <View style={{ alignItems:'center', paddingTop: 100 }}>
          <Text style={{fontSize:18, color:'#20336b'}}>
            Welcome to
          </Text>
        </View>

        <View style={{ alignItems:'center', marginBottom: 80 }}>
          <Text style={{fontSize:28, fontWeight: 'bold', color:'#20336b'}}>
            Kargo Driver App
          </Text>
        </View>

      <View style={{ flex: 1, alignItems:'center'}}>
        <View style={styles.btnView}>
          <Button
            title="LOG IN "      
            style={styles.primaryBtn}
            color="#20336b"
            onPress={() => this.props.navigation.navigate('Login')}
          />
        </View>

        <View style={styles.btnView}>
          <Button
            title="REGISTER"
            color="#10d4f4"
            style={styles.primaryBtn}
            onPress={() => this.props.navigation.navigate('Register')}
          />
        </View>
      </View>
      </ImageBackground>
    );
  }
}
const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
    Login: LoginFormScreen,
    Register:RegisterFormScreen,
    WelcomeScreen:{
      screen: WelcomeScreen,
      navigationOptions: {
        header: null,
      },
    },
    ForgotPassword:ForgotPassword
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

class App extends React.Component {
  render() {
    return (
      <AppContainer />
    )
  }
}

export default App;


