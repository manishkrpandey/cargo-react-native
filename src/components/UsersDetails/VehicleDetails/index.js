import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Button} from 'react-native';
import { Container, Content, Item, Input, Text } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Dropdown} from 'react-native-material-dropdown';
import MultiSelect from 'react-native-multiple-select';

import errroMessages from './../../../constant';

export default class VehicleDescriptionComponent extends Component {
    static navigationOptions = {
        title: 'Register',
        headerStyle: {
            backgroundColor: '#10d4f4',
        },
        headerTintColor: '#fff',
    };

    state = {
        vehicleNumber: '',
        chassisNumber: '',
        ownerName: '',
        ownerContact: '',
        ownerAddress: '',
        currentState: '',
        permittedState: '',
        RCNumber: '',
        allowedLoad: '',
        insuranceDetails: '',
        errorObj: {
            vehicleNumberError:
                {
                    status: false,
                    errorType: ''
                },
            chassisNumberError: {
                status: false,
                errorType: ''
            },
            ownerNameError: {
                status: false,
                errorType: ''
            },
            ownerContactError: {
                status: false,
                errorType: ''
            },
            ownerAddressError: {
                status: false,
                errorType: ''
            },
            currentStateError: {
                status: false,
                errorType: ''
            },
            permittedStateError: {
                status: false,
                errorType: ''
            },
            RCNumberError: {
                status: false,
                errorType: ''
            },
            allowedLoadError: {
                status: false,
                errorType: ''
            },
            insuranceDetailsError: {
                status: false,
                errorType: ''
            },
        },
        selectedItems : []
    };

    onSelectedItemsChange = selectedItems => {
        this.setState({ selectedItems });
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
        const { selectedItems } = this.state;

        const items = [{
            id: '101',
            name: 'Bihar',
        }, {
            id: '102',
            name: 'West Bengal',
        }, {
            id: '103',
            name: 'Jharkhand',
        }, {
            id: '104',
            name: 'Uttar Pardesh',
        }, {
            id: '105',
            name: 'Madhya Pardesh',
        }, {
            id: '106',
            name: 'Odisha',
        }];

        let data = [
            {
                value: 'New Delhi',
            },
            {
                value: 'Bihar',
            },
            {
                value: 'West Bengal'
            },
            {
                value: 'Uttar Pardesh'
            },
            {
                value: 'Jharkhand',
            }];

        return (
            <Container style={{flex: 1}}>
                <Content style={{marginBottom: 30}}>

                    <View>
                        <Text style={styles.uploadDocuments}>
                            Vehicle Details
                        </Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <Item style={styles.inputView} error={this.state.errorObj.vehicleNumberError.status}>
                            <Icon style={styles.icon} name="user"/>
                            <Input
                                style={styles.input}
                                underlineColorAndroid="transparent"
                                placeholder="Vehicle Number"
                                placeholderTextColor="#897d7b"
                                autoCapitalize="none"
                                autoFocus={true}
                                returnKeyType='next'
                                returnKeyLabel='next'
                                onChangeText={(value) => this.onChangeText('vehicleNumber', value)}
                            />
                        </Item>
                        <Text style={styles.error}>
                            {
                                !this.state.errorObj.vehicleNumberError.status ? '' : this.state.errorObj.vehicleNumberError.errorType
                            }
                        </Text>

                    </View>

                    <View style={styles.inputContainer}>
                        <Item style={styles.inputView} error={this.state.errorObj.chassisNumberError.status}>
                            <Icon style={styles.icon} name="mobile"/>
                            <Input
                                style={styles.input}
                                underlineColorAndroid="transparent"
                                placeholder="Chassis Number"
                                placeholderTextColor="#897d7b"
                                autoCapitalize="none"
                                returnKeyType='next'
                                returnKeyLabel='next'
                                onChangeText={(value) => this.onChangeText('chassisNumber', value)}
                            />
                        </Item>
                        <Text style={styles.error}>
                            {
                                !this.state.errorObj.chassisNumberError.status ? '' : this.state.errorObj.chassisNumberError.errorType
                            }
                        </Text>
                    </View>

                    <View style={styles.inputContainer} error={this.state.errorObj.ownerNameError}>
                        <Item style={styles.inputView}>
                            <Icon style={styles.icon} name="user"/>
                            <Input
                                style={styles.input}
                                underlineColorAndroid="transparent"
                                placeholder="Owner Name"
                                placeholderTextColor="#897d7b"
                                autoCapitalize="none"
                                returnKeyType='next'
                                returnKeyLabel='next'
                                onChangeText={(value) => this.onChangeText('alternateContact', value)}
                            />
                        </Item>
                        <Text style={styles.error}>
                            {
                                !this.state.errorObj.ownerNameError.status ? '' : errroMessages.ownerNameError
                            }
                        </Text>
                    </View>

                    <View style={styles.inputContainer} error={this.state.errorObj.ownerContactError.status}>
                        <Item style={styles.inputView}>
                            <Icon style={styles.icon} name="mobile"/>
                            <Input
                                style={styles.input}
                                underlineColorAndroid="transparent"
                                placeholder="Owner Contact"
                                placeholderTextColor="#897d7b"
                                autoCapitalize="none"
                                keyboardType='numeric'
                                returnKeyType='next'
                                returnKeyLabel='next'
                                onChangeText={(value) => this.onChangeText('ownerContact', value)}
                            />
                        </Item>
                        <Text style={styles.error}>
                            {
                                !this.state.errorObj.ownerContactError.status ? '' : errroMessages.ownerContactError
                            }
                        </Text>
                    </View>

                    <View style={styles.inputContainer} error={this.state.errorObj.ownerAddressError}>
                        <Item style={styles.inputView}>
                            <Icon style={styles.icon} name="mobile"/>
                            <Input
                                style={styles.input}
                                underlineColorAndroid="transparent"
                                placeholder="Owner Address"
                                placeholderTextColor="#897d7b"
                                autoCapitalize="none"
                                returnKeyType='next'
                                returnKeyLabel='next'
                                onChangeText={(value) => this.onChangeText('ownerAddress', value)}
                            />
                        </Item>
                        <Text style={styles.error}>
                            {
                                !this.state.errorObj.ownerAddressError.status ? '' : errroMessages.ownerAddressError
                            }
                        </Text>

                        <View style={{marginBottom:15, marginTop:-15, marginLeft:20, marginRight:20}}>
                            <Dropdown
                                label='Current State'
                                data={data}
                                overlayStyle={{marginTop:86, marginLeft:17}}
                            />
                        </View>

                        <View style={{ flex: 1,marginBottom:15, marginTop:-5, marginLeft:20, marginRight:20}}>
                            <MultiSelect
                                hideTags
                                items={items}
                                uniqueKey="id"
                                ref={(component) => { this.multiSelect = component }}
                                onSelectedItemsChange={this.onSelectedItemsChange}
                                selectedItems={selectedItems}
                                selectText="Select State"
                                searchInputPlaceholderText="Search State Name..."
                                onChangeInput={ (text)=> console.log(text)}
                                altFontFamily="ProximaNova-Light"
                                tagRemoveIconColor="#CCC"
                                tagBorderColor="#CCC"
                                tagTextColor="#10d4f4"
                                selectedItemTextColor="#10d4f4"
                                selectedItemIconColor="#CCC"
                                itemTextColor="#000"
                                displayKey="name"
                                searchInputStyle={{ color: '#CCC' }}
                                submitButtonColor="#10d4f4"
                                submitButtonText="Submit"
                                styleDropdownMenuSubsection={{paddingRight:0}}
                            />
                            <View>
                                {this.multiSelect && this.multiSelect.getSelectedItemsExt(selectedItems)}
                            </View>
                        </View>

                        <View style={styles.inputContainer} error={this.state.errorObj.RCNumberError.status}>
                            <Item style={styles.inputView}>
                                <Icon style={styles.icon} name="envelope"/>
                                <Input
                                    style={styles.input}
                                    underlineColorAndroid="transparent"
                                    placeholder="RC Number"
                                    placeholderTextColor="#897d7b"
                                    autoCapitalize="none"
                                    keyboardType='numeric'
                                    returnKeyType='next'
                                    returnKeyLabel='next'
                                    onChangeText={(value) => this.onChangeText('RCNumber', value)}
                                />
                            </Item>
                            <Text style={styles.error}>
                                {
                                    !this.state.errorObj.RCNumberError.status ? '' : errroMessages.RCNumberError
                                }
                            </Text>
                        </View>

                        <View style={styles.inputContainer}>
                            <Item style={styles.inputView} error={this.state.errorObj.allowedLoadError.status}>
                                <Icon style={styles.icon} name="user"/>
                                <Input
                                    style={styles.input}
                                    underlineColorAndroid="transparent"
                                    placeholder="Allowed Load in Tons"
                                    placeholderTextColor="#897d7b"
                                    autoCapitalize="none"
                                    returnKeyType='next'
                                    returnKeyLabel='next'
                                    onChangeText={(value) => this.onChangeText('allowedLoad', value)}
                                />
                            </Item>
                            <Text style={styles.error}>
                                {
                                    !this.state.errorObj.allowedLoadError.status ? '' : this.state.errorObj.allowedLoadError.errorType
                                }
                            </Text>
                        </View>

                        <View style={styles.inputContainer}>
                            <Item style={styles.inputView} error={this.state.errorObj.insuranceDetailsError.status}>
                                <Icon style={styles.icon} name="user"/>
                                <Input
                                    style={styles.input}
                                    underlineColorAndroid="transparent"
                                    placeholder="Insurance Details"
                                    placeholderTextColor="#897d7b"
                                    autoCapitalize="none"
                                    returnKeyType='next'
                                    returnKeyLabel='next'
                                    onChangeText={(value) => this.onChangeText('insuranceDetails', value)}
                                />
                            </Item>
                            <Text style={styles.error}>
                                {
                                    !this.state.errorObj.insuranceDetailsError.status ? '' : this.state.errorObj.insuranceDetailsError.errorType
                                }
                            </Text>

                        </View>
                    </View>

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
        color: '#f00',
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
