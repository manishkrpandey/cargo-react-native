import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert, Button} from 'react-native';
import {Container, Header, Content, Form, Item, Input, Label, H2, Icon} from 'native-base';
import WelcomeScreen from '../../WelcomeScreen/index'
import {AsyncStorage} from 'react-native';
import AuthenticationController from './../../../services/api/Authentication'
import ForgotPassword from './../ForgotPassword';


const authenticationController = new AuthenticationController();
export default class LoginFormScreen extends Component {
    constructor(props) {
        super(props);

    }

    static navigationOptions = {
        title: 'Login',
        headerStyle: {
            backgroundColor: '#10d4f4',
        },
        headerTintColor: '#fff',
    };
    _storeData = async () => {
        try {
            await AsyncStorage.setItem('key', 'I like to save it.');
        } catch (error) {
            // Error saving data
        }
    };
    _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('key');
            if (value !== null) {
                // We have data!!
                // alert(value);
            }
        } catch (error) {
            // Error retrieving data
        }
    };

    state = {
        mobileNumber: '',
        password: '',
        modalOpen: false
    };

    handleEmail = (text) => {
        this.setState({mobileNumber: text})
    };

    handlePassword = (text) => {
        this.setState({password: text})
    };

    login = (mobileNumber, pass) => {
        this._storeData();
        this._retrieveData();
        const {navigate} = this.props.navigation;
        let responseData;
        const data = {
            "phone": mobileNumber,
            "password": pass
        }

         authenticationController.loginUser(data).then(data=>{
             if(data.token){
                //  navigate.navigate('WelcomeScreen');
                 this.props.navigation.navigate('WelcomeScreen')
             }else{
                 alert(data.message);
             }
         }).catch(err=>console.log(err)); 
        //     fetch(loginUrl,{
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(data) })
        // .then((response) => response)
        // .then((responseJson) => {
        //     if(JSON.parse(responseJson['_bodyText'])['data'][0].isLoggedIn){
        //         alert('Logged In succesfully');
        //     }else{
        //         alert('Mobile Number or Password did not match');
        //     }
        // //   alert(JSON.parse(responseJson['_bodyText'])['data'][0].isLoggedIn);
        // })
        // .catch((error) => {
        //     alert('There is some error on, Please try again..');

        // });

        // responseData=ApiService.postRequest(loginUrl,data);
        // if(responseData){
        //         if(response['data']['data'][0].isLoggedIn){
        //                    alert('Logged In succesfully');
        //                }else{
        //                    alert('Mobile Number or Password did not match');
        //                }

        // }


        // axios.post(loginUrl, data)
        //     .then(function (response) {
        //         if (response['data']['data'][0].isLoggedIn) {
        //             navigate('WelcomeScreen');
        //         } else {
        //             alert('Mobile Number or Password did not match');
        //         }
        //     })
        //     .catch(function (error) {
        //         alert(error);
        //     });
        // Send a POST request

        // fetch(loginUrl, {
        //     method: 'POST',
        //     body: data,
        // }).then((response) => {
        //     alert('manish');
        //     response.json()
        // })
        //     .then((responseJson) => {
        //         alert(responseJson[data][0].isLoggedIn);
        //     })
        //     .catch((error) => {
        //         //   console.error(error);
        //         alert('manish1');
        //     });
        // axios({
        //     method: 'post',
        //     url: loginUrl,
        //     data: data
        //   })
        //   .then(function (response) {
        //         //  console.log(response);
        //         if(response.data[0].isLoggedIn==true){
        //             alert('hi');
        //         }else{
        //             alert('bye');
        //         }

        //       })
        //       .catch(function (error) {
        //         // console.log(error);
        //         alert('hello');
        //       });
        // axios
        // .post(`http://localhost:8000/account/login`,{
        //     "mobileNumber": 1234,
        //     "password": "abcd"
        // })
        //     .then(res => {
        //         alert(res['data'][0].isLoggedIn);
        //     }).catch((err)=>{
        //         alert(`error${1}`)
        //     });
    }

    render() {
        return (
            <View style={{paddingTop: 75}}>
                {/* <ForgotPassword /> */}
                <View style={{alignItems: 'center'}}>
                    <Icon name="person" style={{color: "#10d4f4", fontSize: 50, paddingBottom: 35}}/>
                    <H2 style={{color: '#10d4f4'}}>Welcome Back!</H2>
                    <Text>Login to continue with Kargo </Text>
                </View>
                <Form style={{marginLeft: 10, marginRight: 30}}>
                    <Item floatingLabel style={styles.labelInput}>
                        <Label>Mobile Number</Label>
                        <Input
                            style={styles.inputBox}
                            underlineColorAndroid="transparent"
                            placeholderTextColor="#897d7b"
                            autoCapitalize="none"
                            keyboardType='numeric'
                            onChangeText={this.handleEmail}
                        />
                    </Item>
                    <Item floatingLabel style={styles.labelInput}>
                        <Label>Password</Label>
                        <Input
                            underlineColorAndroid="transparent"
                            placeholderTextColor="#897d7b"
                            autoCapitalize="none"
                            secureTextEntry={true}
                            onChangeText={this.handlePassword}
                        />
                    </Item>

                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={
                            () => this.login(this.state.mobileNumber, this.state.password)
                        }>
                        <Text style={styles.submitButtonText}> LOGIN </Text>
                    </TouchableOpacity>
                </Form>

                <View style={{alignItems: 'center'}}>
                    <Text style={styles.forgotLink} onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                        Forgot Password?
                    </Text>

                    <Text>Don't have Kargo account?</Text>
                    <TouchableOpacity
                        style={styles.submitButton}
                    >
                        <Text style={styles.submitButtonText}
                              onPress={() => this.props.navigation.navigate('Register')}>
                            REGISTER
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputBox: {
        paddingBottom: 5
    },
    submitButton: {
        backgroundColor: '#10d4f4',
        padding: 10,
        height: 40,
        marginTop: 30,
        marginLeft: 10,
        borderRadius:4
    },
    submitButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
    forgotLink: {
        color: '#20336b',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20,
        paddingBottom: 30,
        borderColor: '#ebebeb',
        marginBottom: 20
    },
    labelInput:{
        paddingBottom:5
    }
});
