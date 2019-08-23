import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Dimensions, Image ,Button} from 'react-native';
import { Content, Icon } from 'native-base';
import { createDrawerNavigator, createAppContainer, DrawerItems } from 'react-navigation';
import YourVehicles from '../AddNewVehicle'
import UserDetails from '../UserProfile/UserDetails';
import Help from '../Help';
import AvailableBooking from '../AvailableBooking';
import RequestForServices from '../RequestForServices';
import { Root } from "native-base";

class WelcomeScreen extends Component {
    render() {
        return (
          <Root>
              <DrawerContainer />
          </Root>  
        );
    }
}

const CustomDrawerComponent = (props) => (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.headerLogo}>
            <Icon name="person" style={{ color: "#10d4f4", fontSize: 50, paddingBottom: 10, paddingTop: 15 }} />
        </View>
        <View style={{ alignItems: 'center' }}>
            <Text style={{ color: '#20336b', fontWeight: '600', fontSize: 18, paddingBottom: 10 }}>Manish Pandey</Text>
            <Text style={{ color: '#20336b', fontWeight: '600', fontSize: 16, paddingBottom: 20 }}>driver.manish@gmail.com</Text>
        </View>
        <ScrollView >
            <DrawerItems {...props} />
        </ScrollView>
    </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator({
    'Available Bookings': AvailableBooking,
    'Request For Services': RequestForServices,
    'Your Vehicles': YourVehicles,
    'Account Details': UserDetails,
    'Help': Help,
}, {
        contentComponent: CustomDrawerComponent
    })

const DrawerContainer = createAppContainer(AppDrawerNavigator);

export default WelcomeScreen;

const styles = StyleSheet.create({
    headerLogo: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10
    }
})
