import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import AuthenticationController from './../../../services/api/Authentication'
import {
    H2,
    Container,
    Content,
    Item,
    Input,
    List,
    ListItem,
    Radio,
    Text,
    Toast
} from "native-base";

import Icon from 'react-native-vector-icons/FontAwesome';

import errroMessages from './../../../constant';





const authenticationController = new AuthenticationController();
export default class RegisterFormScreen extends Component {
    static navigationOptions = {
        title: 'Register',
        headerStyle: {
            backgroundColor: '#10d4f4',
        },
        headerTintColor: '#fff',
    };
    state = {
        firstName: '',
        mobileNumber: '',
        alternateContact: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: '',
        panCard: '',
        isMale: true,
        isFemale: false,
        passwordVerfication:false,
        errorObj: {
            firstNameError:
            {
                status: false,
                errorType: ''
            },
            mobileNumberError: {
                status: false,
                errorType: ''
            },
            alternateContactError: {
                status: false,
                errorType: ''
            },
            emailError: {
                status: false,
                errorType: ''
            },
            passwordError: {
                status: false,
                errorType: ''
            },
            confirmPasswordError: {
                status: false,
                errorType: ''
            },
            panCard: {
                status: false,
                errorType: ''
            },
        }
    };

    setErrorStatus = (key, val) => {

        if (key === 'firstName') {
            if (this.state.firstName.length < 1) {
                this.setState(prevState => ({
                    ...prevState,
                    errorObj: {
                        ...prevState.errorObj,
                        firstNameError: {
                            ...prevState.errorObj.firstNameError,
                            status: true,
                            errorType: errroMessages.genericError

                        }
                    }
                }))
            } else if (this.state.firstName.length <= 4) {

                this.setState(prevState => ({
                    ...prevState,
                    errorObj: {
                        ...prevState.errorObj,
                        firstNameError: {
                            ...prevState.errorObj.firstNameError,
                            status: true,
                            errorType: errroMessages.fnameError

                        }
                    }
                }))


            } else {

                this.setState(prevState => ({
                    ...prevState,
                    errorObj: {
                        ...prevState.errorObj,
                        firstNameError: {
                            ...prevState.errorObj.firstNameError,
                            status: false,
                            errorType: errroMessages.genericError

                        }
                    }
                }))


            }
        }

        if (key === 'mobileNumber') {
            let reg = /^[6-9]\d{9}$/;
            if (this.state.mobileNumber.length < 1) {
                this.setState(prevState => ({
                    ...prevState,
                    errorObj: {
                        ...prevState.errorObj,
                        mobileNumberError: {
                            ...prevState.errorObj.mobileNumberError,
                            status: true,
                            errorType: errroMessages.genericError

                        }
                    }
                }))
            } else if (!reg.test(this.state.mobileNumber)) {

                this.setState(prevState => ({
                    ...prevState,
                    errorObj: {
                        ...prevState.errorObj,
                        mobileNumberError: {
                            ...prevState.errorObj.mobileNumberError,
                            status: true,
                            errorType: errroMessages.mobileError

                        }
                    }
                }))


            } else {

                this.setState(prevState => ({
                    ...prevState,
                    errorObj: {
                        ...prevState.errorObj,
                        mobileNumberError: {
                            ...prevState.errorObj.mobileNumberError,
                            status: false,
                            errorType: errroMessages.genericError

                        }
                    }
                }))


            }

        }

        if (key === 'alternateContact') {
            let reg = /^[6-9]\d{9}$/;
            if (this.state.alternateContact.length < 1) {
                this.setState(prevState => ({
                    ...prevState,
                    errorObj: {
                        ...prevState.errorObj,
                        alternateContactError: {
                            ...prevState.errorObj.alternateContactError,
                            status: true,
                            errorType: errroMessages.genericError

                        }
                    }
                }))
            } else if (!reg.test(this.state.alternateContact)) {

                this.setState(prevState => ({
                    ...prevState,
                    errorObj: {
                        ...prevState.errorObj,
                        alternateContactError: {
                            ...prevState.errorObj.alternateContactError,
                            status: true,
                            errorType: errroMessages.mobileError

                        }
                    }
                }))


            } else {

                this.setState(prevState => ({
                    ...prevState,
                    errorObj: {
                        ...prevState.errorObj,
                        alternateContactError: {
                            ...prevState.errorObj.alternateContactError,
                            status: false,
                            errorType: errroMessages.genericError

                        }
                    }
                }))


            }

        }

        if (key === 'email') {
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (this.state.email.length < 1) {
                this.setState(prevState => ({
                    ...prevState,
                    errorObj: {
                        ...prevState.errorObj,
                        emailError: {
                            ...prevState.errorObj.emailError,
                            status: true,
                            errorType: errroMessages.genericError

                        }
                    }
                }))
            } else if (!reg.test(this.state.email)) {

                this.setState(prevState => ({
                    ...prevState,
                    errorObj: {
                        ...prevState.errorObj,
                        emailError: {
                            ...prevState.errorObj.emailError,
                            status: true,
                            errorType: errroMessages.mobileError

                        }
                    }
                }))


            } else {

                this.setState(prevState => ({
                    ...prevState,
                    errorObj: {
                        ...prevState.errorObj,
                        emailError: {
                            ...prevState.errorObj.emailError,
                            status: false,
                            errorType: errroMessages.genericError

                        }
                    }
                }))


            }

        }

        if (key === 'password') {
            if (this.state.password.length < 1) {
                this.setState(prevState => ({
                    ...prevState,
                    errorObj: {
                        ...prevState.errorObj,
                        passwordError: {
                            ...prevState.errorObj.passwordError,
                            status: true,
                            errorType: errroMessages.genericError

                        }
                    }
                }))
            } else if (this.state.password.length <= 4) {

                this.setState(prevState => ({
                    ...prevState,
                    errorObj: {
                        ...prevState.errorObj,
                        passwordError: {
                            ...prevState.errorObj.passwordError,
                            status: true,
                            errorType: errroMessages.fnameError

                        }
                    }
                }))


            } else {

                this.setState(prevState => ({
                    ...prevState,
                    errorObj: {
                        ...prevState.errorObj,
                        passwordError: {
                            ...prevState.errorObj.passwordError,
                            status: false,
                            errorType: errroMessages.genericError

                        }
                    }
                }))


            }
        }

        if (key === 'confirmPassword') {
            if (this.state.confirmPassword.length < 1 || this.state.confirmPassword !== this.state.password) {
                this.setState(prevState => ({
                    ...prevState,
                    errorObj: {
                        ...prevState.errorObj,
                        confirmPassword: {
                            ...prevState.errorObj.confirmPassword,
                            status: true,
                            errorType: errroMessages.genericError

                        }
                    }
                }))
            } else if (this.state.confirmPassword.length <= 4) {

                this.setState(prevState => ({
                    ...prevState,
                    errorObj: {
                        ...prevState.errorObj,
                        confirmPassword: {
                            ...prevState.errorObj.confirmPassword,
                            status: true,
                            errorType: errroMessages.fnameError

                        }
                    }
                }))


            } else {

                this.setState(prevState => ({
                    ...prevState,
                    errorObj: {
                        ...prevState.errorObj,
                        confirmPassword: {
                            ...prevState.errorObj.confirmPassword,
                            status: false,
                            errorType: errroMessages.genericError

                        }
                    }
                }))


            }
        }

        if (key === 'panCard') {
            let reg = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
            if (this.state.panCard.length < 1) {
                this.setState(prevState => ({
                    ...prevState,
                    errorObj: {
                        ...prevState.errorObj,
                        panCard: {
                            ...prevState.errorObj.panCard,
                            status: true,
                            errorType: errroMessages.genericError

                        }
                    }
                }))
            } else if (!reg.test(this.state.panCard)) {

                this.setState(prevState => ({
                    ...prevState,
                    errorObj: {
                        ...prevState.errorObj,
                        panCard: {
                            ...prevState.errorObj.panCard,
                            status: true,
                            errorType: errroMessages.mobileError

                        }
                    }
                }))


            } else {

                this.setState(prevState => ({
                    ...prevState,
                    errorObj: {
                        ...prevState.errorObj,
                        panCard: {
                            ...prevState.errorObj.panCard,
                            status: false,
                            errorType: errroMessages.genericError

                        }
                    }
                }))


            }

        }

        // if(key === 'ownerName'){
        //     this.state.errorObj.ownerNameError = val === '' || val.length <= 4;
        // }
        //
        // if(key === 'ownerContact'){
        //     this.state.errorObj.ownerContactError = val === '' || val.length <10;
        // }
        //
        // if(key === 'vehicleRegistrationNumber'){
        //     this.state.errorObj.vehicleRegistrationNumberError = val === '' || val.length <6;
        // }
        //
        // if(key === 'driversDLNumber'){
        //     this.state.errorObj.driversDLNumberError = val === '' || val.length <6;
        // }
    };

    onChangeText = async (key, val) => {
        await this.setState({ [key]: val });
        await this.setErrorStatus(key, val);
    };
    onGender = (gender) => {
        if (gender === 'Male') {
            this.setState({ isFemale: false });
            this.setState({ isMale: true });
        }
        if (gender === 'Female') {
            this.setState({ isFemale: false });
            this.setState({ isMale: true });
        }
    }
    onSubmitForm = async () => {
        let validForm = true;
        let formField = ['firstName', 'mobileNumber', 'alternateContact', 'email', 'password', 'confirmPassword', 'panCard'];
        let errorObj = ['firstNameError', 'mobileNumberError', 'alternateContactError', 'emailError', 'passwordError', 'confirmPasswordError', 'panCard'];

        await formField.forEach(element => {
            this.setErrorStatus(element, this.state[element]);
        });

        await errorObj.forEach(element => {
            if (this.state.errorObj[element].status === true) {
                validForm = false;
            }
        })
        if (validForm) {
            let userDtata = {
                "name": this.state.firstName,
                "phone": this.state.mobileNumber,
                "alternatePhone": this.state.alternateContact,
                "email": this.state.email,
                "pan": this.state.panCard,
                "gender": this.state.isMale ? 'Male' : 'Femaile',
                "password": this.state.password,
                "role": "user",
                "isAdditionalDetailsAdded": false
            }

            await authenticationController.registerUser(userDtata).then(response => {

                if (response && response.userId) {
                    // this.props.navigation.navigate('Login')
                    this.setState({passwordVerfication:true});
                } else {
                    Toast.show({
                        text: "Already registered with this number!",
                        buttonText: "Okay",
                        duration: 3000
                      })
                }
            }).catch(err=>console.log(err));
            //    console.log('hello',data2);
            //  .then(data=>{
            //     if (data && data.status === 201) {
            //         alert('wow');
            //     }else{
            //         alert('no');
            //     }
            // }).catch(function (error) {
            //     console.log(error);
            //     alert('There is some error on Page, Please try again..');
            //     return;
            // });

            // fetch('https://gentle-oasis-28246.herokuapp.com/user/signup', {
            //     method: 'POST',
            //     headers: {
            //         Accept: 'application/json',
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(userDtata),
            // }).then((response) => {
            //     return response.json();
            // }).then(response=>{
            //     if(response.userId){
            //         this.props.navigation.navigate('Login')
            //     }
            // }).catch(error=>{
            //     console.log(error);
            // })
        }
    };
    resetState = () => {
        Object.keys(state).forEach(element => {

        })
    }

    render() {
        return (
            <Container>
                <Content style={{ marginBottom: 30 }}>
                {
                    !this.state.passwordVerfication ? (<View>
                        <View style={{ alignItems: 'center', paddingTop: 15 }}>
                            <Icon name="user" style={{ color: "#10d4f4", fontSize: 50, paddingBottom: 10 }} />
                            <H2 style={{ color: '#10d4f4', paddingBottom: 10 }}>Create Kargo Account</H2>
                        </View>
    
                        <View style={styles.inputContainer}>
                            <Item style={styles.inputView} error={this.state.errorObj.firstNameError.status}>
                                <Icon style={styles.icon} name="user" />
                                <Input
                                    style={styles.input}
                                    underlineColorAndroid="transparent"
                                    placeholder="Full Name"
                                    placeholderTextColor="#897d7b"
                                    autoCapitalize="none"
                                    autoFocus={true}
                                    returnKeyType='next'
                                    returnKeyLabel='next'
                                    autoCorrect={false}
                                    onChangeText={(value) => this.onChangeText('firstName', value)}
                                />
                            </Item>
                            <Text style={styles.error}>
                                {
                                    !this.state.errorObj.firstNameError.status ? '' : this.state.errorObj.firstNameError.errorType
                                }
                            </Text>
    
                        </View>
    
                        <View style={styles.inputContainer}>
                            <Item style={styles.inputView} error={this.state.errorObj.mobileNumberError.status}>
                                <Icon style={styles.icon} name="mobile" />
                                <Input
                                    style={styles.input}
                                    underlineColorAndroid="transparent"
                                    placeholder="Mobile Number"
                                    placeholderTextColor="#897d7b"
                                    autoCapitalize="none"
                                    keyboardType='numeric'
                                    returnKeyType='next'
                                    returnKeyLabel='next'
                                    onChangeText={(value) => this.onChangeText('mobileNumber', value)}
                                />
                            </Item>
                            <Text style={styles.error}>
                                {
                                    !this.state.errorObj.mobileNumberError.status ? '' : this.state.errorObj.mobileNumberError.errorType
                                }
                            </Text>
                        </View>
    
                        <View style={styles.inputContainer} error={this.state.errorObj.alternateContactError}>
                            <Item style={styles.inputView}>
                                <Icon style={styles.icon} name="mobile" />
                                <Input
                                    style={styles.input}
                                    underlineColorAndroid="transparent"
                                    placeholder="Alternate Contact"
                                    placeholderTextColor="#897d7b"
                                    autoCapitalize="none"
                                    keyboardType='numeric'
                                    returnKeyType='next'
                                    returnKeyLabel='next'
                                    onChangeText={(value) => this.onChangeText('alternateContact', value)}
                                />
                            </Item>
                            <Text style={styles.error}>
                                {
                                    !this.state.errorObj.alternateContactError.status ? '' : errroMessages.alternateContactError
                                }
                            </Text>
                        </View>
    
                        <View style={styles.inputContainer} error={this.state.errorObj.emailError.status}>
                            <Item style={styles.inputView}>
                                <Icon style={styles.icon} name="envelope" />
                                <Input
                                    style={styles.input}
                                    underlineColorAndroid="transparent"
                                    placeholder="Email"
                                    placeholderTextColor="#897d7b"
                                    autoCapitalize="none"
                                    keyboardType='email-address'
                                    returnKeyType='next'
                                    returnKeyLabel='next'
                                    onChangeText={(value) => this.onChangeText('email', value)}
                                />
                            </Item>
                            <Text style={styles.error}>
                                {
                                    !this.state.errorObj.emailError.status ? '' : errroMessages.emailMsgError
                                }
                            </Text>
                        </View>
    
                        <View style={styles.inputContainer} error={this.state.errorObj.panCard.status}>
                            <Item style={styles.inputView}>
                                <Icon style={styles.icon} name="envelope" />
                                <Input
                                    style={styles.input}
                                    underlineColorAndroid="transparent"
                                    placeholder="Pan Card Number"
                                    placeholderTextColor="#897d7b"
                                    autoCapitalize="none"
                                    keyboardType='email-address'
                                    returnKeyType='next'
                                    returnKeyLabel='next'
                                    onChangeText={(value) => this.onChangeText('panCard', value)}
                                />
                            </Item>
                            <Text style={styles.error}>
                                {
                                    !this.state.errorObj.panCard.status ? '' : errroMessages.emailMsgError
                                }
                            </Text>
                        </View>
                        <View style={styles.inputContainer} error={this.state.errorObj.passwordError.status}>
                            <Item style={styles.inputView}>
                                <Icon style={styles.icon} name="lock" />
                                <Input
                                    style={styles.input}
                                    underlineColorAndroid="transparent"
                                    placeholder="Password"
                                    placeholderTextColor="#897d7b"
                                    autoCapitalize="none"
                                    secureTextEntry={true}
                                    returnKeyType='next'
                                    returnKeyLabel='next'
                                    onChangeText={(value) => this.onChangeText('password', value)}
                                />
                            </Item>
                            <Text style={styles.error}>
                                {
                                    !this.state.errorObj.passwordError.status ? '' : errroMessages.passwordMsgError
                                }
                            </Text>
                        </View>
    
                        <View style={styles.inputContainer} error={this.state.errorObj.confirmPasswordError.status}>
                            <Item style={styles.inputView}>
                                <Icon style={styles.icon} name="lock" />
                                <Input
                                    style={styles.input}
                                    underlineColorAndroid="transparent"
                                    placeholder="Confirm Password"
                                    placeholderTextColor="#897d7b"
                                    autoCapitalize="none"
                                    secureTextEntry={true}
                                    returnKeyType='next'
                                    returnKeyLabel='next'
                                    onChangeText={(value) => this.onChangeText('confirmPassword', value)}
                                />
                            </Item>
                            <Text style={styles.error}>
                                {
                                    !this.state.errorObj.confirmPasswordError.status ? '' : errroMessages.confirmPasswordMsgError
                                }
                            </Text>
                        </View>
    
    
                        <View style={styles.inputContainer}>
                            <Item style={{ borderColor: 'transparent', marginLeft: 20, marginRight: 20 }}>
                                <Text style={{ fontWeight: 'bold' }}>
                                    Gender:
                                </Text>
                            </Item>
                        </View>
    
                        <List style={{ borderColor: 'transparent', marginLeft: 20, marginRight: 20 }}>
                            <Grid>
                                <Row>
                                    <Col onPress={() => this.onGender('Male')}>
                                        <ListItem style={{ borderColor: 'transparent', marginLeft: 0 }}>
                                            <Radio selected={this.state.isMale} style={{ marginRight: 15 }} />
                                            <Text>Male</Text>
                                        </ListItem>
                                    </Col>
    
                                    <Col onPress={() => this.onGender('Female')}>
                                        <ListItem style={{ borderColor: 'transparent', marginLeft: 0 }}>
                                            <Radio selected={this.state.isFemale} style={{ marginRight: 15 }}
                                            />
                                            <Text>Female</Text>
                                        </ListItem>
                                    </Col>
                                </Row>
                            </Grid>
                        </List>
    
                        <TouchableOpacity
                            style={styles.submitButton}
                        >
                            <Text style={styles.submitButtonText} onPress={this.onSubmitForm}> REGISTER </Text>
                        </TouchableOpacity>
    
                        <View style={{ paddingBottom: 200 }} />
    
                        <View style={{ borderTopColor: '#ebebeb', borderTopWidth: 1, paddingTop: 15, alignItems: 'center' }}>
                            <Text>Already have an account? &nbsp;
                                <Text onPress={() => this.props.navigation.navigate('Login')}
                                    style={{ color: '#10d4f4', fontWeight: 'bold' }}>
                                    Sign In
                                </Text>
                            </Text>
                        </View>
                        </View>):(<View>
                    <View style={{ alignItems: 'center', paddingTop: 15 }}>
                        <Icon name="user" style={{ color: "#10d4f4", fontSize: 50, paddingBottom: 10 }} />
                        <H2 style={{ color: '#10d4f4', paddingBottom: 10 }}>Create Kargo Account</H2>
                    </View>
                    <View style={styles.inputContainer}>
                        <Item style={styles.inputView} error={this.state.errorObj.mobileNumberError.status}>
                            <Icon style={styles.icon} name="mobile" />
                            <Input
                                style={styles.input}
                                underlineColorAndroid="transparent"
                                placeholder="Enter OTP sent to your mobile number"
                                placeholderTextColor="#897d7b"
                                autoCapitalize="none"
                                keyboardType='numeric'
                                returnKeyType='next'
                                returnKeyLabel='next'
                                onChangeText={(value) => this.onChangeText('mobileNumber', value)}
                            />
                        </Item>
                        <Text style={styles.error}>
                            {
                                !this.state.errorObj.mobileNumberError.status ? '' : this.state.errorObj.mobileNumberError.errorType
                            }
                        </Text>
                    </View>
                    <TouchableOpacity
                            style={styles.submitButton}
                        >
                            <Text style={styles.submitButtonText} onPress={this.onSubmitForm}> SUBMIT OTP </Text>
                        </TouchableOpacity>
                    </View>)

                }
                    
                    
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 15
    },
    inputView: {
        marginBottom: 0,
        marginLeft: 20,
        marginRight: 20,
    },
    input: {
        height: 40,
        marginLeft: 10
    },
    submitButton: {
        backgroundColor: '#10d4f4',
        padding: 10,
        marginTop: 20,
        height: 40,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 4
    },
    submitButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    checkboxControl: {
        borderColor: 'transparent',
        marginLeft: 20,
        marginRight: 20
    },
    error: {
        color: '#f00000',
        fontSize: 12,
        textAlign: 'right',
        marginRight: 20,
        paddingLeft: 5
    },
    icon: {
        color: '#3f414d',
        fontSize: 24
    }
});
