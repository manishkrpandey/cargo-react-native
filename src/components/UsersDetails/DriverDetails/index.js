import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Button} from 'react-native';
import {
    Container,
    Content,
    Item,
    Input,
    List,
    ListItem,
    Radio,
    Text
} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-datepicker';
import { Col, Row, Grid } from "react-native-easy-grid";
import errroMessages from './../../../constant';
import { connect } from "react-redux";
import VehicleDetailsController from '../../../services/api/vehicleDetailsService';
const vehicleDetailsControllerobj = new VehicleDetailsController();

class DriverDescriptionComponent extends Component {
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
        isValidForm:false,
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
        },
        date: ''
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
                    this.setState({isValidForm:true});
            }
        }

        if (key === 'driverContact') {
            let reg = /^[6-9]\d{9}$/;
            if (this.state.driverContact.length < 1) {
                this.setState(prevState => ({
                    ...prevState,
                    errorObj: {
                        ...prevState.errorObj,
                        driverContactError: {
                            ...prevState.errorObj.driverContactError,
                            status: true,
                            errorType: errroMessages.genericError

                        }
                    }
                }))
            } else if (!reg.test(this.state.driverContact)) {

                this.setState(prevState => ({
                    ...prevState,
                    errorObj: {
                        ...prevState.errorObj,
                        driverContactError: {
                            ...prevState.errorObj.driverContactError,
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

                if(this.state.isValidForm){
                    this.setState({isValidForm:true});
                }
            }

        }

    };

    onChangeText = async (key, val) => {
        await this.setState({[key]: val});
        await this.setErrorStatus(key, val);
    };
    onSubmitForm = () => {
        this.setErrorStatus('driverName', '');
        this.setErrorStatus('driverContact', '');
        if(this.state.isValidForm){
            this.submitRequestForAdd();
        }
    };
    submitRequestForAdd = () => {
        const { token,user } = this.props.places;
        let AddingDriverRequestObj = {    
                "name": this.state.driverName,
                "phone": this.state.driverContact,
                "gender": "Male",
                "dob": this.state.DOB,
                "dlNumber": this.state.DLNumber,
                "insuranceDetails": {
                        "insuranceId": "ins12345",
                         "validFrom": "03/12/2010",
                        "validTo":"15/11/2030"
                },
                "bankDetails": {
                        "accountNumber": 1235455555,
                        "ifscCode": "HDFC10125"
                }
        } 

        vehicleDetailsControllerobj.AddNewDriver(AddingDriverRequestObj,token).then(data=>{
            if(data.status===201){
                alert(data.message);
            }
        }).catch(err=>err);
               
    }

    render() {
        return (
            <Container style={{flex: 1, marginRight:-20}}>
                <Content style={{marginBottom: 30}}>
                    <View>
                        <Text style={styles.uploadDocuments}>
                            Driver Details
                        </Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <Item style={{borderColor: 'transparent', marginLeft: 20, marginRight: 20}}>
                            <Text style={{
                                fontWeight: 'bold',
                                textDecorationLine: "underline",
                                textDecorationStyle: "solid",
                                textDecorationColor: "#000"
                            }}>
                                Personal Details:
                            </Text>
                        </Item>
                    </View>

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

                    <List style={{borderColor: 'transparent', marginLeft: 20, marginRight: 20, marginTop: -15, marginBottom:10}}>
                        <Grid>
                            <Row>
                                <Col>
                                    <ListItem style={{borderColor: 'transparent', marginLeft: 0}}>
                                        <Radio selected={true} style={{marginRight: 15}}/>
                                        <Text>Male</Text>
                                    </ListItem>
                                </Col>

                                <Col>
                                    <ListItem style={{borderColor: 'transparent', marginLeft: 0}}>
                                        <Radio selected={false} style={{marginRight: 15}}
                                               onChangeText={(value) => this.onChangeText('gender', value)}/>
                                        <Text>Female</Text>
                                    </ListItem>
                                </Col>
                            </Row>
                        </Grid>
                    </List>

                    <View style={styles.inputContainer}>
                        <Item style={{borderColor: 'transparent', marginLeft: 20, marginRight: 20}}>
                            <Text style={{fontWeight: 'bold'}}>
                                Date of Birth:
                            </Text>
                        </Item>
                    </View>

                    <View style={{marginLeft:15, marginRight:20, marginBottom:20}}>
                        <DatePicker
                            style={{width: 150}}
                            date={this.state.DOB}
                            mode="date"
                            placeholder="Select Date"
                            format="DD-MM-YYYY"
                            maxDate="17-09-2001"
                            minDate="01-01-1950"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 10,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 5,
                                    marginRight: -10
                                }
                            }}
                            onDateChange={(date) => {this.setState({DOB: date})}}
                        />
                    </View>

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

                    <View style={styles.inputContainer}>
                        <Item style={{borderColor: 'transparent', marginLeft: 20, marginRight: 20}}>
                            <Text style={{
                                fontWeight: 'bold',
                                textDecorationLine: "underline",
                                textDecorationStyle: "solid",
                                textDecorationColor: "#000"
                            }}>
                                Insurance Details:
                            </Text>
                        </Item>
                    </View>

                    <View style={styles.inputContainer}>
                        <Item style={styles.inputView} error={this.state.errorObj.insuranceIdError.status}>
                            <Icon style={styles.icon} name="user"/>
                            <Input
                                style={styles.input}
                                underlineColorAndroid="transparent"
                                placeholder="Insurance Id."
                                placeholderTextColor="#897d7b"
                                autoCapitalize="none"
                                returnKeyType='next'
                                returnKeyLabel='next'
                                onChangeText={(value) => this.onChangeText('insuranceId', value)}
                            />
                        </Item>
                        <Text style={styles.error}>
                            {
                                !this.state.errorObj.insuranceIdError.status ? '' : this.state.errorObj.insuranceIdError.errorType
                            }
                        </Text>

                    </View>

                    <Grid>
                        <Row style={{marginTop:-10}}>
                            <Col>
                                <View style={{marginLeft:15, marginRight:20, marginBottom:20}}>
                                    <Text style={{paddingLeft: 5, paddingBottom:3}}>Valid From:</Text>
                                    <DatePicker
                                        style={{width: 135}}
                                        date={this.state.insuranceValidFrom}
                                        mode="date"
                                        placeholder="Select Date"
                                        format="DD-MM-YYYY"
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        customStyles={{
                                            dateIcon: {
                                                position: 'absolute',
                                                left: 10,
                                                top: 4,
                                                marginLeft: 0
                                            },
                                            dateInput: {
                                                marginLeft: 5,
                                                marginRight: -10,
                                                paddingLeft:15
                                            },
                                        }}
                                        onDateChange={(date) => {this.setState({insuranceValidFrom: date})}}
                                    />
                                </View>
                            </Col>

                            <Col>
                                <View style={{marginLeft:15, marginRight:20, marginBottom:20}}>
                                    <Text style={{paddingLeft: 5, paddingBottom:3}}>Valid To:</Text>
                                    <DatePicker
                                        style={{width: 135}}
                                        date={this.state.insuranceValidTo}
                                        mode="date"
                                        placeholder="Select Date"
                                        format="DD-MM-YYYY"
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        customStyles={{
                                            dateIcon: {
                                                position: 'absolute',
                                                left: 10,
                                                top: 4,
                                                marginLeft: 0
                                            },
                                            dateInput: {
                                                marginLeft: 5,
                                                marginRight: -10,
                                                paddingLeft:15
                                            }
                                        }}
                                        onDateChange={(date) => {this.setState({insuranceValidTo: date})}}
                                    />
                                </View>
                            </Col>
                        </Row>
                    </Grid>


                    <TouchableOpacity
                        style={styles.submitButton}
                    >
                        <Text style={styles.submitButtonText} onPress={() => this.onSubmitForm()}> SAVE </Text>
                    </TouchableOpacity>


                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 15,
        marginRight:10
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
        backgroundColor: '#20336b',
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
    },
    uploadDocuments: {
        color: '#20336b',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: 30,
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "#000",
        textTransform:'uppercase'
    }
});

const mapStateToProps = state => {
    return {
      places: state.places.places,
      selectedPlace: state.places.selectedPlace
    };
  };

  export default connect(mapStateToProps)(DriverDescriptionComponent);