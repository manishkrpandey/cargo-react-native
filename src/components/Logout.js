import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

 class Logout extends Component {
     //router = RootStack.router;

     componentDidMount(){
        console.log('THIS.PROPS',this.props.navigation.getScreenProps())
     }
    render() {
        return (
            <View style={StyleSheet.Container}> 

            </View>
        )
    }
}
export default  Logout;

const styles = StyleSheet.create({
    Container: {
        flex:1,
    }
})
