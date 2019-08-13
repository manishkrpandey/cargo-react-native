import React, { Component } from 'react';
import {View, StyleSheet, TouchableOpacity, Button} from 'react-native';
import {H2, Container, Content, Item, Input, List, ListItem, Radio, Text, CheckBox, Body,Picker,DatePicker} from "native-base";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome';

import errroMessages from './../../../constant';

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
        // isOwner: '',
        // isDriver: '',
        gender: '',
        panCard:'',
        // ownerName: '',
        // ownerContact: '',
        // vehicleRegistrationNumber: '',
        // driversDLNumber: '',
        // hasNationalPermit: '',
        // allowedStateForTransportation: '',
        // vehicleSnapshot: '',
        // dlSnapshot: '',
        selected:'',
        errorObj : {
            firstNameError:
            {
                status:false,
                errorType:''
            },
            mobileNumberError:  {
                status:false,
                errorType:''
            },
            alternateContactError:  {
                status:false,
                errorType:''
            },
            emailError:  {
                status:false,
                errorType:''
            },
            passwordError:  {
                status:false,
                errorType:''
            },
            confirmPasswordError:  {
                status:false,
                errorType:''
            },
            panCard:  {
                status:false,
                errorType:''
            },
            // ownerNameError:  {
            //     status:false,
            //     errorType:''
            // },
            // ownerContactError:  {
            //     status:false,
            //     errorType:''
            // },
            // vehicleRegistrationNumberError:  {
            //     status:false,
            //     errorType:''
            // },
            // driversDLNumberError:  {
            //     status:false,
            //     errorType:''
            // },
            // vehicleSnapshotError: false,
            // dlSnapshotError: false,
        }
    };

    setErrorStatus = (key, val) => {
        
        if(key === 'firstName'){
            if(this.state.firstName.length<1){
                  this.setState(prevState => ({
                    ...prevState,
                    errorObj: {
                        ...prevState.errorObj,
                        firstNameError: {
                            ...prevState.errorObj.firstNameError, 
                               status: true,
                               errorType:errroMessages.genericError
                            
                        }
                    }
                }))
            }
            else if(this.state.firstName.length <= 4){
                
                this.setState(prevState => ({
                    ...prevState,
                    errorObj: {
                        ...prevState.errorObj,
                        firstNameError: {
                            ...prevState.errorObj.firstNameError, 
                               status: true,
                               errorType:errroMessages.fnameError
                            
                        }
                    }
                }))
                
                
        }else{
            
            this.setState(prevState => ({
                ...prevState,
                errorObj: {
                    ...prevState.errorObj,
                    firstNameError: {
                        ...prevState.errorObj.firstNameError, 
                           status: false,
                           errorType:errroMessages.genericError
                        
                    }
                }
            }))
            
            
        }
    }

if(key === 'mobileNumber'){
    let reg=/^[6-9]\d{9}$/;
    if(this.state.mobileNumber.length<1){
          this.setState(prevState => ({
            ...prevState,
            errorObj: {
                ...prevState.errorObj,
                mobileNumberError: {
                    ...prevState.errorObj.mobileNumberError, 
                       status: true,
                       errorType:errroMessages.genericError
                    
                }
            }
        }))
    }
    else if(!reg.test(this.state.mobileNumber)){
        
        this.setState(prevState => ({
            ...prevState,
            errorObj: {
                ...prevState.errorObj,
                mobileNumberError: {
                    ...prevState.errorObj.mobileNumberError, 
                       status: true,
                       errorType:errroMessages.mobileError
                    
                }
            }
        }))
        
      
}else{
    
    this.setState(prevState => ({
        ...prevState,
        errorObj: {
            ...prevState.errorObj,
            mobileNumberError: {
                ...prevState.errorObj.mobileNumberError, 
                   status: false,
                   errorType:errroMessages.genericError
                
            }
        }
    }))
    
    
}

}

        if(key === 'alternateContact'){
            this.state.errorObj.alternateContactError = val === '' || val.length <10;
        }

        if(key === 'email'){
            this.state.errorObj.emailError = val === '';
        }

        if(key === 'password'){
            this.state.errorObj.passwordError = val === '' || val.length <=4;
        }

        if(key === 'confirmPassword'){
            this.state.errorObj.confirmPasswordError = val === '' || val !==  this.state.password;
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
       await this.setState({ [key]: val});
       await this.setErrorStatus(key,val);
    };
    onSubmitForm =  () => {
         this.setErrorStatus('firstName','');
         this.setErrorStatus('lastName','');
         this.setErrorStatus('mobileNumber','');
     };

    render() {
        return (
            <Container>
                <Content style={{ marginBottom: 30}}>
                    <View style={{alignItems: 'center', paddingTop: 15}}>
                        <Icon name="user" style={{color:"#10d4f4", fontSize:50, paddingBottom: 10}} />
                        <H2 style={{color: '#10d4f4', paddingBottom: 10}}>Create Kargo Account</H2>
                    </View>

                    <View style={styles.inputContainer}>
                        <Item style={styles.inputView} error={this.state.errorObj.firstNameError.status}>
                            <Icon style={styles.icon} name="user" />
                            <Input
                                style = {styles.input}
                                underlineColorAndroid = "transparent"
                                placeholder = "Full Name"
                                placeholderTextColor = "#897d7b"
                                autoCapitalize = "none"
                                autoFocus={true}
                                returnKeyType='next'
                                returnKeyLabel='next'
                                onChangeText={(value) => this.onChangeText('firstName',value)}
                            />
                        </Item>
                       <Text style={styles.error}>
                           {
                               !this.state.errorObj.firstNameError.status ? '' : this.state.errorObj.firstNameError.errorType
                           }
                       </Text>

                    </View>

                    <View style={styles.inputContainer} >
                        <Item style={styles.inputView} error={this.state.errorObj.mobileNumberError.status}>
                        <Icon style={styles.icon} name="mobile" />
                        <Input
                            style = {styles.input}
                            underlineColorAndroid = "transparent"
                            placeholder = "Mobile Number"
                            placeholderTextColor = "#897d7b"
                            autoCapitalize = "none"
                            keyboardType = 'numeric'
                            autoFocus={true}
                            returnKeyType='next'
                            returnKeyLabel='next'
                            onChangeText={(value) => this.onChangeText('mobileNumber',value)}
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
                            style = {styles.input}
                            underlineColorAndroid = "transparent"
                            placeholder = "Alternate Contact"
                            placeholderTextColor = "#897d7b"
                            autoCapitalize = "none"
                            keyboardType = 'numeric'
                            autoFocus={true}
                            returnKeyType='next'
                            returnKeyLabel='next'
                            onChangeText={(value) => this.onChangeText('alternateContact',value)}
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
                            style = {styles.input}
                            underlineColorAndroid = "transparent"
                            placeholder = "Email"
                            placeholderTextColor = "#897d7b"
                            autoCapitalize = "none"
                            keyboardType = 'email-address'
                            autoFocus={true}
                            returnKeyType='next'
                            returnKeyLabel='next'
                            onChangeText={(value) => this.onChangeText('email',value)}
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
                            style = {styles.input}
                            underlineColorAndroid = "transparent"
                            placeholder = "Pan Card Number"
                            placeholderTextColor = "#897d7b"
                            autoCapitalize = "none"
                            keyboardType = 'email-address'
                            autoFocus={true}
                            returnKeyType='next'
                            returnKeyLabel='next'
                            onChangeText={(value) => this.onChangeText('panCard',value)}
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
                            style = {styles.input}
                            underlineColorAndroid = "transparent"
                            placeholder = "Password"
                            placeholderTextColor = "#897d7b"
                            autoCapitalize = "none"
                            secureTextEntry={true}
                            autoFocus={true}
                            returnKeyType='next'
                            returnKeyLabel='next'
                            onChangeText={(value) => this.onChangeText('password',value)}
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
                            style = {styles.input}
                            underlineColorAndroid = "transparent"
                            placeholder = "Confirm Password"
                            placeholderTextColor = "#897d7b"
                            autoCapitalize = "none"
                            secureTextEntry={true}
                            autoFocus={true}
                            returnKeyType='next'
                            returnKeyLabel='next'
                            onChangeText={(value) => this.onChangeText('confirmPassword',value)}
                        />
                    </Item>
                        <Text style={styles.error}>
                            {
                                !this.state.errorObj.confirmPasswordError.status ? '' : errroMessages.confirmPasswordMsgError
                            }
                        </Text>
                    </View>

                    {/*<ListItem style={styles.checkboxControl}>*/}
                    {/*    <CheckBox checked={true} onChangeText={(value) => this.onChangeText('firstName',value)} />*/}
                    {/*    <Body>*/}
                    {/*        <Text>Are you Owner</Text>*/}
                    {/*    </Body>*/}
                    {/*</ListItem>*/}
                    {/*<ListItem style={styles.checkboxControl}>*/}
                    {/*    <CheckBox checked={false} onChangeText={(value) => this.onChangeText('firstName',value)} />*/}
                    {/*    <Body>*/}
                    {/*        <Text>Are You Driver</Text>*/}
                    {/*    </Body>*/}
                    {/*</ListItem>*/}

                    <View style={styles.inputContainer}>
                        <Item style={{borderColor:'transparent',marginLeft:20, marginRight:20}}>
                        <Text style={{fontWeight: 'bold'}}>
                            Gender:
                        </Text>
                    </Item>
                    </View>

                    <List style={{borderColor:'transparent',marginLeft:20, marginRight:20}}>
                        <ListItem style={{borderColor:'transparent', marginLeft:0}}>
                            <Radio selected={false} style={{marginRight:15}} />
                            <Text>Male</Text>
                        </ListItem>

                        <ListItem style={{borderColor:'transparent',marginLeft:0}}>
                            <Radio selected={true} style={{marginRight:15}} onChangeText={(value) => this.onChangeText('firstName',value)}/>
                            <Text>Female</Text>
                        </ListItem>
                    </List>

                    {/*<View style={styles.inputContainer} error={this.state.errorObj.ownerNameError.status}>*/}
                    {/*    <Item style={styles.inputView}>*/}
                    {/*    <Icon style={styles.icon} name="person" />*/}
                    {/*    <Input*/}
                    {/*        style = {styles.input}*/}
                    {/*        underlineColorAndroid = "transparent"*/}
                    {/*        placeholder = "Owner Name"*/}
                    {/*        placeholderTextColor = "#897d7b"*/}
                    {/*        autoCapitalize = "none"*/}
                    {/*        autoFocus={true}*/}
                    {/*        returnKeyType='next'*/}
                    {/*        returnKeyLabel='next'*/}
                    {/*        onChangeText={(value) => this.onChangeText('ownerName',value)}*/}
                    {/*    />*/}
                    {/*</Item>*/}
                    {/*    <Text style={styles.error}>*/}
                    {/*        {*/}
                    {/*            !this.state.errorObj.ownerNameError.status ? '' : errroMessages.ownerNameMsgError*/}
                    {/*        }*/}
                    {/*    </Text>*/}
                    {/*</View>*/}

                    {/*<View style={styles.inputContainer} error={this.state.errorObj.ownerContactError.status}>*/}
                    {/*    <Item style={styles.inputView}>*/}
                    {/*    <Icon style={styles.icon} name="call" />*/}
                    {/*    <Input*/}
                    {/*        style = {styles.input}*/}
                    {/*        underlineColorAndroid = "transparent"*/}
                    {/*        placeholder = "Owner Contact"*/}
                    {/*        placeholderTextColor = "#897d7b"*/}
                    {/*        autoCapitalize = "none"*/}
                    {/*        keyboardType = 'numeric'*/}
                    {/*        autoFocus={true}*/}
                    {/*        returnKeyType='next'*/}
                    {/*        returnKeyLabel='next'*/}
                    {/*        onChangeText={(value) => this.onChangeText('ownerContact',value)}*/}
                    {/*    />*/}
                    {/*</Item>*/}
                    {/*    <Text style={styles.error}>*/}
                    {/*        {*/}
                    {/*            !this.state.errorObj.ownerContactError.status ? '' : errroMessages.ownerContactMsgError*/}
                    {/*        }*/}
                    {/*    </Text>*/}
                    {/*</View>*/}

                    {/*<View style={styles.inputContainer} error={this.state.errorObj.vehicleRegistrationNumberError.status}>*/}
                    {/*    <Item style={styles.inputView}>*/}
                    {/*    <Icon style={styles.icon} name="bus" />*/}
                    {/*    <Input*/}
                    {/*        style = {styles.input}*/}
                    {/*        underlineColorAndroid = "transparent"*/}
                    {/*        placeholder = "Vehicle Registration Number"*/}
                    {/*        placeholderTextColor = "#897d7b"*/}
                    {/*        autoCapitalize = "none"*/}
                    {/*        autoFocus={true}*/}
                    {/*        returnKeyType='next'*/}
                    {/*        returnKeyLabel='next'*/}
                    {/*        onChangeText={(value) => this.onChangeText('vehicleRegistrationNumber',value)}*/}
                    {/*    />*/}
                    {/*</Item>*/}
                    {/*    <Text style={styles.error}>*/}
                    {/*        {*/}
                    {/*            !this.state.errorObj.vehicleRegistrationNumberError.status ? '' : errroMessages.vehicleRegistrationNumberMsgError*/}
                    {/*        }*/}
                    {/*    </Text>*/}
                    {/*</View>*/}

                    {/*<View style={styles.inputContainer}  error={this.state.errorObj.driversDLNumberError.status}>*/}
                    {/*    <Item style={styles.inputView}>*/}
                    {/*    <Icon style={styles.icon} name="bus" />*/}
                    {/*    <Input*/}
                    {/*        style = {styles.input}*/}
                    {/*        underlineColorAndroid = "transparent"*/}
                    {/*        placeholder = "Driver DL Number"*/}
                    {/*        placeholderTextColor = "#897d7b"*/}
                    {/*        autoCapitalize = "none"*/}
                    {/*        autoFocus={true}*/}
                    {/*        returnKeyType='next'*/}
                    {/*        returnKeyLabel='next'*/}
                    {/*        onChangeText={(value) => this.onChangeText('driversDLNumber',value)}*/}
                    {/*    />*/}
                    {/*</Item>*/}
                    {/*    <Text style={styles.error}>*/}
                    {/*        {*/}
                    {/*            !this.state.errorObj.driversDLNumberError.status ? '' : errroMessages.driversDLNumberMsgError*/}
                    {/*        }*/}
                    {/*    </Text>*/}
                    {/*</View>*/}

                    {/*<ListItem style={{borderColor:'transparent', marginLeft:20, marginRight:20}}>*/}
                    {/*    <CheckBox checked={false} onChangeText={(value) => this.onChangeText('firstName',value)} />*/}
                    {/*    <Body>*/}
                    {/*        <Text>Do You Have National Permit</Text>*/}
                    {/*    </Body>*/}
                    {/*</ListItem>*/}

                    {/*<Picker*/}
                    {/*    mode="dropdown"*/}
                    {/*    placeholder="Select your SIM"*/}
                    {/*    iosIcon={<Icon name="arrow-down" />}*/}
                    {/*    placeholder="Select your SIM"*/}
                    {/*    textStyle={{ color: "#5cb85c" }}*/}
                    {/*    itemStyle={{*/}
                    {/*        backgroundColor: "#d3d3d3",*/}
                    {/*        marginLeft: 0,*/}
                    {/*        paddingLeft: 10*/}
                    {/*    }}*/}
                    {/*    itemTextStyle={{ color: '#788ad2' }}*/}
                    {/*    style={{ width: undefined, marginLeft:10, marginRight:10 }}*/}
                    {/*    selectedValue={this.state.selected}*/}
                    {/*    onChange={(value) => this.onChangeText('firstName',value)}*/}

                    {/*>*/}
                    {/*    <Picker.Item label="Wallet" value="key0" />*/}
                    {/*    <Picker.Item label="ATM Card" value="key1" />*/}
                    {/*    <Picker.Item label="Debit Card" value="key2" />*/}
                    {/*    <Picker.Item label="Credit Card" value="key3" />*/}
                    {/*    <Picker.Item label="Net Banking" value="key4" />*/}
                    {/*</Picker>*/}

                    <TouchableOpacity
                        style={styles.submitButton}
                    >
                        <Text style={styles.submitButtonText} onPress={()=>this.onSubmitForm()}> REGISTER </Text>
                    </TouchableOpacity>

                    <View style={{paddingBottom:200}}/>

                    <View style={{borderTopColor:'#ebebeb', borderTopWidth: 1, paddingTop:15, alignItems: 'center'}}>
                        <Text>Already have an account? &nbsp;
                            <Text  onPress={() => this.props.navigation.navigate('Login')}  style={{color:'#10d4f4', fontWeight:'bold'}}>
                                 Sign In
                            </Text>
                        </Text>
                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer : {
      marginBottom:15
    },
    inputView: {
      marginBottom: 0,
        marginLeft:20,
        marginRight: 20,
    },
    input: {
        height: 40,
        marginLeft:10
    },
    submitButton: {
        backgroundColor: '#10d4f4',
        padding: 10,
        marginTop:20,
        height: 40,
        marginLeft:20,
        marginRight:20
    },
    submitButtonText:{
        color: 'white',
        fontWeight:'bold',
        textAlign: 'center'
    },
    checkboxControl : {
        borderColor:'transparent',
        marginLeft:20,
        marginRight: 20
    },
    error: {
        color: '#f00000',
        fontSize: 12,
        textAlign: 'right',
        marginRight:20,
        paddingLeft: 5
    },
    icon: {
        color: '#3f414d',
        fontSize:24
    }
});
