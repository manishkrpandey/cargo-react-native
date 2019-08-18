import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import { Icon, Button, Container, Header, Content, Left } from 'native-base';

 class About extends Component {
    render() {
        return (
            <View style={StyleSheet.Container}> 
                <Header style={{backgroundColor:'#fff', paddingTop:15, paddingLeft:15, justifyContent:'flex-start'}}>
                    <Left>
                        <Icon name="menu" style={{marginTop:-12}} onPress={() => this.props.navigation.openDrawer()} />
                    </Left>
                </Header>
                <View>
                    <Text style={{textAlign:'center', fontSize:18, paddingTop:50, color:'#f00'}}>  
                        About Me!
                    </Text>
               </View>
            </View>
        )
    }
}
export default  About;

const styles = StyleSheet.create({
    Container: {
        flex:1,
    }
})
