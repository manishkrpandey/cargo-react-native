import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import {Icon, Button, Container, Header, Content, Left, Right, Label, Input, Item} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

  class UserDetails extends Component {
      state = {
          username: '',
          phone: '',
          address: '',
          isEdit:false
      };

      handleUsername = (text) => {
          this.setState({ username: text })
      };

      handlePhoneNo = (text) => {
          this.setState({ phone: text })
      };

      handleAddress = (text) => {
          this.setState({ address: text })
      };

      openEditFields() {
          console.log('hello');
          this.setState({
              isEdit: !this.state.isEdit
          })
      };

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

                    <View style={{textAlign:'right', paddingTop:30, paddingRight:30}}>
                        <Text style={styles.editLink} onPress={this.openEditFields}>
                            Edit
                        </Text>
                    </View>

                    <Grid>
                        <Row style={{padding:20}}>
                            <Col style={{ width: '30%' }}>
                                <Text style={styles.title}>Name:</Text>
                            </Col>

                            <Col>
                                {
                                    this.state.isEdit ?
                                        (<Text style={styles.heading}>Raj Barnwal</Text>)
                                        :
                                        (<Item floatingLabel>
                                            <Label>Name</Label>
                                            <Input
                                                underlineColorAndroid="transparent"
                                                placeholderTextColor="#897d7b"
                                                autoCapitalize="none"
                                                secureTextEntry={true}
                                                autoFocus={true}
                                                returnKeyType='next'
                                                returnKeyLabel='next'
                                                onChangeText={this.handleUsername}
                                            />
                                        </Item>)
                                }
                            </Col>
                        </Row>

                        <Row style={{padding:20}}>
                            <Col style={{ width: '30%' }}>
                                <Text style={styles.title}>Email:</Text>
                            </Col>
                            <Col>
                                <Text style={styles.heading}>raj@gmail.com</Text>
                            </Col>
                        </Row>

                        <Row style={{padding:20}}>
                            <Col style={{ width: '30%' }}>
                                <Text style={styles.title}>Mobile:</Text>
                            </Col>
                            <Col>
                                {
                                    this.state.isEdit ?
                                        (<Text style={styles.heading}>+91-8527884512</Text>)
                                        :
                                        (<Item floatingLabel>
                                            <Label>Mobile Number</Label>
                                            <Input
                                                underlineColorAndroid="transparent"
                                                placeholderTextColor="#897d7b"
                                                autoCapitalize="none"
                                                secureTextEntry={true}
                                                autoFocus={true}
                                                returnKeyType='next'
                                                returnKeyLabel='next'
                                                onChangeText={this.handlePhoneNo}
                                            />
                                        </Item>)
                                }
                            </Col>
                        </Row>

                        <Row style={{padding:20}}>
                            <Col style={{ width: '30%' }}>
                                <Text style={styles.title}>Address:</Text>
                            </Col>
                            <Col>
                                {
                                    this.state.isEdit ?
                                        (<Text style={styles.heading}>
                                            KM-28, Jaypee Kosmos, Sector-134, Noida
                                        </Text>)
                                        :
                                        (<Item floatingLabel>
                                            <Label>Address</Label>
                                            <Input
                                                underlineColorAndroid = "transparent"
                                                placeholderTextColor = "#897d7b"
                                                autoCapitalize = "none"
                                                secureTextEntry={true}
                                                autoFocus={true}
                                                returnKeyType='next'
                                                returnKeyLabel='next'
                                                onChangeText={this.handleAddress}
                                            />
                                        </Item>)
                                }
                            </Col>
                        </Row>
                    </Grid>
               </View>
            </Container>
        )
    }
}
export default UserDetails;

const styles = StyleSheet.create({
    title: {
        fontSize:16,
    },
    heading: {
        fontSize:16,
        fontWeight: 'bold'
    },
    editLink: {
        color:'#20336b',
        fontWeight:'bold',
        fontSize:18,
        marginTop: 10,
        borderColor:'#ebebeb',
        marginBottom: 20,
        textAlign: 'right',
        marginLeft:20
    }
});