import React, {Component} from 'react';
import {Text, View, Alert, TouchableOpacity, StyleSheet,KeyboardAvoidingView,ScrollView} from 'react-native';
import {Form, Input, Icon, Item, Label} from 'native-base';
// import Icon from 'react-native-vector-icons/FontAwesome';

import errroMessages from './../../../constant';

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
        isValidForm: true,
        otpRequestInput: false,
        errorObj : {
            mobileNumberError:  {
                status:false,
                errorType:''
            },
        }
    };


    setErrorStatus = (key, val) => {
        if(key === 'mobileNumber'){
            let reg=/^[6-9]\d{9}$/;
            if(this.state.mobileNumber.length<1){
                this.setState({
                    isValidForm:false
                })
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
                this.setState({
                    isValidForm:false
                })
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
            this.setState({
                isValidForm:false
            })
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
    }

    onChangeText = async (key, val) => {
        await this.setState({ [key]: val});
        await this.setErrorStatus(key,val);
     };
     onSubmitForm =  () => {
          this.setErrorStatus('mobileNumber','');
          if(this.state.isValidForm){

          }
      };

      sendOTPRequest = () => {
          this.setState({
              otpRequestInput:true
          })
          Alert.alert('Request sent');
      }

      validateOTP = () => {
          alert("Validated");
      }

    render() {
        return (
            <ScrollView>
            <KeyboardAvoidingView  behavior="padding" enabled>
            <View style={{paddingTop:75}}>
                <View style={{alignItems: 'center'}}>
                    <Icon name="person" style={{color:"#10d4f4", fontSize:50, paddingBottom: 35}} />
                    {
                        !this.state.otpRequestInput ?  
                        <Text>
                            Enter your Registered Mobile Number 
                        </Text> 
                    :
                        <Text>
                            Enter OTP sent to your Registered Mobile Number 
                        </Text> 
                    }
        
                </View>
                <Form style={{marginLeft:10, marginRight:30}}>
                {
                    !this.state.otpRequestInput ?  

                    <View style={styles.inputContainer} >
                       <Item style={styles.inputView} error={this.state.errorObj.mobileNumberError.status}>
                            <Icon style={styles.icon} name="call" />
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
                    :
                    <View>
                        <Item floatingLabel style={styles.labelInput}>
                            <Label>OTP</Label>
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
                                                <Item floatingLabel style={styles.labelInput}>
                                                <Label>New Password</Label>
                                                <Input
                                                    style={styles.inputBox}
                                                    underlineColorAndroid = "transparent"
                                                    placeholderTextColor = "#897d7b"
                                                    autoCapitalize = "none"
                                                    keyboardType = 'numeric'
                                                    returnKeyType='next'
                                                    returnKeyLabel='next'
                                                    onChangeText={this.handleMobile}
                                                />
                                            </Item>
                                            <Item floatingLabel style={styles.labelInput}>
                                                <Label>Confirm Password</Label>
                                                <Input
                                                    style={styles.inputBox}
                                                    underlineColorAndroid = "transparent"
                                                    placeholderTextColor = "#897d7b"
                                                    autoCapitalize = "none"
                                                    keyboardType = 'numeric'
                                                    returnKeyType='next'
                                                    returnKeyLabel='next'
                                                    onChangeText={this.handleMobile}
                                                />
                                            </Item>
                                            </View>
                    }

                  {
                    !this.state.otpRequestInput ?  
                        <TouchableOpacity style={styles.submitButton}>
                            <Text style={styles.submitButtonText} onPress={()=>this.sendOTPRequest()}>
                                SEND 
                            </Text>
                        </TouchableOpacity> 
                    :
                        <TouchableOpacity style={styles.submitButton}>
                            <Text style={styles.submitButtonText} onPress={()=>this.validateOTP()}>
                                SUBMIT OTP 
                            </Text>
                        </TouchableOpacity>
                  }
                </Form>

                <View style={{alignItems:'center', paddingTop:30}}>
                    <Text style={styles.forgotLink} onPress={() => this.props.navigation.navigate('Login')}>
                        Login
                    </Text>
                </View>
            </View>
            </KeyboardAvoidingView>
            </ScrollView>
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
        marginLeft:10,
        borderRadius:4
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
    },
    labelInput:{
        paddingBottom:10
    }
});
