import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const RootStack = createStackNavigator(
    {
        LoginForm: LoginForm,
        RegisterForm: RegisterForm,
        Auth:Auth
    },
    {
      initialRouteName: 'Auth',
    }
  );
  
  const AppContainer = createAppContainer(RootStack);

export default class Auth extends Component {
    render() {
        return (
          <View style={{ flex: 1, alignItems:'center' }}>
            <Text>Kargo App</Text>
            <View style={styles.btnView}>
              <Button
                title="LOG IN "      
                onPress={() => this.props.navigation.navigate('Login')}
              />
            </View>
    
            <View style={styles.btnView}>
              <Button
                title="REGISTER"
                onPress={() => this.props.navigation.navigate('Register')}
              />
            </View>
          </View>
        );
      }
}