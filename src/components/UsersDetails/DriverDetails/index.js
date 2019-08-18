import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Button} from 'react-native';
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
    CheckBox,
    Body,
    Picker,
    DatePicker
} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';

import errroMessages from './../../../constant';

export default class DriverDescriptionComponent extends Component {
    static navigationOptions = {
        title: 'Register',
        headerStyle: {
            backgroundColor: '#10d4f4',
        },
        headerTintColor: '#fff',
    };
    state = {
        driverName: '',
        driverContact: '',
        DOB: '',
        gender:'',
        DLNumber: '',
        insuranceId: '',
        insuranceValidFrom: '',
        insuranceValidTo: '',
        accountNumber: '',
        ifscCode: '',
        errorObj: {
            driverNameError: {
                status: false,
                errorType: ''
            },
            driverContactError: {
                status: false,
                errorType: ''
            },
            DOBError: {
                status: false,
                errorType: ''
            },
            genderError: {
                status: false,
                errorType: ''
            },
            DLNumberError: {
                status: false,
                errorType: ''
            },
            insuranceIdError: {
                status: false,
                errorType: ''
            },
            insuranceValidFromError: {
                status: false,
                errorType: ''
            },
            insuranceValidToError: {
                status: false,
                errorType: ''
            },
            accountNumberError: {
                status: false,
                errorType: ''
            },
            ifscCodeError: {
                status: false,
                errorType: ''
            },
        }
    };

    setErrorStatus = (key, val) => {

        if (key === 'driverName') {
            if (this.state.driverName.length < 1) {
                this.setState(prevState => ({
                    ...prevState,
                    errorObj: {
                        ...prevState.errorObj,
                        driverNameError: {
                            ...prevState.errorObj.driverNameError,
                            status: true,
                            errorType: errroMessages.genericError

                        }
                    }
                }))
            } else if (this.state.driverName.length <= 4) {

                this.setState(prevState => ({
                    ...prevState,
                    errorObj: {
                        ...prevState.errorObj,
                        driverNameError: {
                            ...prevState.errorObj.driverNameError,
                            status: true,
                            errorType: errroMessages.driverNameError

                        }
                    }
                }))


            } else {

                this.setState(prevState => ({
                    ...prevState,
                    errorObj: {
                        ...prevState.errorObj,
                        diverNameError: {
                            ...prevState.errorObj.driverNameError,
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
            this.state.errorObj.alternateContactError = val === '' || val.length < 10;
        }

        if (key === 'email') {
            this.state.errorObj.emailError = val === '';
        }

        if (key === 'password') {
            this.state.errorObj.passwordError = val === '' || val.length <= 4;
        }

        if (key === 'confirmPassword') {
            this.state.errorObj.confirmPasswordError = val === '' || val !== this.state.password;
        }
    };

    onChangeText = async (key, val) => {
        await this.setState({[key]: val});
        await this.setErrorStatus(key, val);
    };
    onSubmitForm = () => {
        this.setErrorStatus('firstName', '');
        this.setErrorStatus('lastName', '');
        this.setErrorStatus('mobileNumber', '');
    };

    render() {
        return (
            <Container style={{flex: 1}}>
                <Content style={{marginBottom: 30}}>

                    <View style={styles.inputContainer}>
                        <Item style={styles.inputView} error={this.state.errorObj.driverNameError.status}>
                            <Icon style={styles.icon} name="user"/>
                            <Input
                                style={styles.input}
                                underlineColorAndroid="transparent"
                                placeholder="Driver Name"
                                placeholderTextColor="#897d7b"
                                autoCapitalize="none"
                                autoFocus={true}
                                returnKeyType='next'
                                returnKeyLabel='next'
                                onChangeText={(value) => this.onChangeText('driverName', value)}
                            />
                        </Item>
                        <Text style={styles.error}>
                            {
                                !this.state.errorObj.driverNameError.status ? '' : this.state.errorObj.driverNameError.errorType
                            }
                        </Text>

                    </View>

                    <View style={styles.inputContainer}>
                        <Item style={styles.inputView} error={this.state.errorObj.driverContactError.status}>
                            <Icon style={styles.icon} name="mobile"/>
                            <Input
                                style={styles.input}
                                underlineColorAndroid="transparent"
                                placeholder="Driver Contact"
                                placeholderTextColor="#897d7b"
                                autoCapitalize="none"
                                keyboardType='numeric'
                                returnKeyType='next'
                                returnKeyLabel='next'
                                onChangeText={(value) => this.onChangeText('driverContact', value)}
                            />
                        </Item>
                        <Text style={styles.error}>
                            {
                                !this.state.errorObj.driverContactError.status ? '' : this.state.errorObj.driverContactError.errorType
                            }
                        </Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <Item style={{borderColor: 'transparent', marginLeft: 20, marginRight: 20}}>
                            <Text style={{fontWeight: 'bold'}}>
                                Gender:
                            </Text>
                        </Item>
                    </View>

                    <List style={{borderColor: 'transparent', marginLeft: 20, marginRight: 20}}>
                        <ListItem style={{borderColor: 'transparent', marginLeft: 0}}>
                            <Radio selected={false} style={{marginRight: 15}}/>
                            <Text>Male</Text>
                        </ListItem>

                        <ListItem style={{borderColor: 'transparent', marginLeft: 0}}>
                            <Radio selected={true} style={{marginRight: 15}}
                                   onChangeText={(value) => this.onChangeText('gender', value)}/>
                            <Text>Female</Text>
                        </ListItem>
                    </List>

                    <View style={styles.inputContainer}>
                        <Item style={styles.inputView} error={this.state.errorObj.DLNumberError.status}>
                            <Icon style={styles.icon} name="user"/>
                            <Input
                                style={styles.input}
                                underlineColorAndroid="transparent"
                                placeholder="DL Number"
                                placeholderTextColor="#897d7b"
                                autoCapitalize="none"
                                returnKeyType='next'
                                returnKeyLabel='next'
                                onChangeText={(value) => this.onChangeText('DLNumber', value)}
                            />
                        </Item>
                        <Text style={styles.error}>
                            {
                                !this.state.errorObj.DLNumberError.status ? '' : this.state.errorObj.DLNumberError.errorType
                            }
                        </Text>

                    </View>

                    <TouchableOpacity
                        style={styles.submitButton}
                    >
                        <Text style={styles.submitButtonText} onPress={() => this.onSubmitForm()}> REGISTER </Text>
                    </TouchableOpacity>


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
        marginRight: 20
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
