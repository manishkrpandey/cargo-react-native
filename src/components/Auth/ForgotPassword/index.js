import React, {Component} from 'react';
import {Text, View, Alert, TouchableOpacity, StyleSheet} from 'react-native';
import {Form, Icon, Input, Item, Label} from "native-base";

class ForgotPassword extends Component {
    static navigationOptions = {
        title: 'Forgot Password',
        headerStyle: {
            backgroundColor: '#10d4f4',
        },
        headerTintColor: '#fff',
    };
    state = {
        mobileNumber: '',
    };

    handleMobile = (text) => {
        this.setState({ mobileNumber: text })
    };
    render() {
        return (
            <View style={{paddingTop:75}}>
                <View style={{alignItems: 'center'}}>
                    <Icon name="person" style={{color:"#10d4f4", fontSize:50, paddingBottom: 35}} />
                    <Text>Enter your Registered Mobile Number </Text>
                </View>
                <Form style={{marginLeft:10, marginRight:30}}>
                    <Item floatingLabel>
                        <Label>Mobile Number</Label>
                        <Input
                            style={styles.inputBox}
                            underlineColorAndroid = "transparent"
                            placeholderTextColor = "#897d7b"
                            autoCapitalize = "none"
                            keyboardType = 'numeric'
                            autoFocus={true}
                            returnKeyType='next'
                            returnKeyLabel='next'
                            onChangeText={this.handleMobile}
                        />
                    </Item>

                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={
                            () => this.login(this.state.mobileNumber)
                        }>
                        <Text style={styles.submitButtonText}> SEND </Text>
                    </TouchableOpacity>
                </Form>

                <View style={{alignItems:'center', paddingTop:30}}>
                    <Text style={styles.forgotLink} onPress={() => this.props.navigation.navigate('Login')}>
                        Login
                    </Text>
                </View>
            </View>
        );
    }
}

export default ForgotPassword;

const styles = StyleSheet.create({
    inputBox: {
        paddingBottom:5
    },
    submitButton: {
        backgroundColor: '#10d4f4',
        padding: 10,
        height: 40,
        marginTop:30,
        marginLeft:10
    },
    submitButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize:16,
    },
    forgotLink: {
        color:'#20336b',
        fontWeight:'bold',
        fontSize:18,
        marginTop: 20,
        paddingBottom:30,
        borderColor:'#ebebeb',
        marginBottom: 20
    }
});
