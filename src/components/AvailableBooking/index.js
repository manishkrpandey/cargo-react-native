import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import { Icon, Header, Left } from 'native-base';

class AvailableBooking extends Component {
    render() {
        return (
            <View style={StyleSheet.Container}>
                <Header style={styles.topHeader}>
                    <Left>
                        <Icon name="menu" style={{marginTop:-12}} onPress={() => this.props.navigation.openDrawer()} />
                    </Left>
                </Header>
                <View>
                    <Text style={styles.pageTitle}>
                        Available Bookings
                    </Text>
                </View>
            </View>
        )
    }
}
export default AvailableBooking;

const styles = StyleSheet.create({
    Container: {
        flex:1,
    },
    topHeader: {
        backgroundColor:'#fff',
        paddingTop:15,
        paddingLeft:15,
        justifyContent:'flex-start',
    },
    pageTitle: {
        color: '#fff',
        backgroundColor: '#20336b',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        height: 50,
        lineHeight: 50,
    },
});
