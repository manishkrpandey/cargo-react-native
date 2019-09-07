import React from 'react';
import { Root } from "native-base";
import { Button, View, Text, StyleSheet,ActivityIndicator, ImageBackground ,Image} from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import  LoginFormScreen  from './src/components/Auth/LoginForm/index';
import RegisterFormScreen  from './src/components/Auth/RegisterForm/index';
import WelcomeScreen from './src/components/WelcomeScreen/index';
import ForgotPassword from  './src/components/Auth/ForgotPassword'
import Tutorial from './src/components/Tutorial';



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

  state={
    isloading:true
  }

  render() {
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
            title="LOG IN"
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
        <Tutorial />
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
    <Root>
      <AppContainer />
    </Root>  
    )
  }
}

export default App;
