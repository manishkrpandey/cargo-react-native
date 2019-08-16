import React, { Component } from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView, Dimensions, Image} from 'react-native';
import { Content, Icon} from 'native-base';
import { createDrawerNavigator , createAppContainer, DrawerItems } from 'react-navigation';
import YourVehicles from '../AddNewVehicle'
import UserDetails from '../UserProfile/UserDetails';
import About from './../About';

class WelcomeScreen extends Component {
    render() {
        return (
            <DrawerContainer />
        );
    }
}

const CustomDrawerComponent = (props) => (
    <SafeAreaView style={{flex: 1}}>
        <View style={styles.headerLogo}>
            <Icon name="person" style={{color:"#10d4f4", fontSize:50, paddingBottom: 10, paddingTop:15}} />
        </View>
        <View style={{alignItems:'center'}}>
            <Text style={{color:'#20336b', fontWeight:'600', fontSize:18, paddingBottom:10}}>Manish Pandey</Text>
            <Text style={{color:'#20336b', fontWeight:'600', fontSize:16, paddingBottom:20}}>driver.manish@gmail.com</Text>
        </View>
        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
    </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator({
    'Your Vehicles': YourVehicles,
    User:  UserDetails,
    About: About, 
  }, {
      contentComponent: CustomDrawerComponent
  })

const DrawerContainer =  createAppContainer(AppDrawerNavigator);

export default WelcomeScreen;

const styles = StyleSheet.create({
    headerLogo : {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10
    }
})
