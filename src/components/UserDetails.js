import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import { Icon, Button, Container, Header, Content, Left, Right} from 'native-base';

  class UserDetails extends Component {
    render() {
        return (
            <Container>
                <Header style={{backgroundColor:'#fff', paddingTop:15, paddingLeft:15, justifyContent:'flex-start'}}>
                    <Left>
                        <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
                    </Left>
                </Header>
                <View>
                    <Text style={{textAlign:'center', fontSize:18, paddingTop:50, color:'#f00'}}>  
                        User Details
                    </Text>
               </View>
            </Container>
        )
    }
}
export default UserDetails; 