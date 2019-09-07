import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet, TextInput, TouchableOpacity
} from 'react-native';

import {Icon, Container, Header, Content, Left, Item, Input, Body} from 'native-base';
import {Dropdown} from "react-native-material-dropdown";
import DatePicker from "react-native-datepicker";

class RequestForServices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pickupAddressDetails: '',
            destinationAddressDetails: '',
            date: '',
            weight:'',
            errorObj: {
                weightError: {
                    status: false,
                    errorType: ''
                },
            }
        };
    }

    handlePickupAddress = (text) => {
        this.setState({pickupAddressDetails: text})
    };

    handleDestinationAddress = (text) => {
        this.setState({destinationAddressDetails: text})
    };

    handleWeight = (text) => {
        this.setState({ weight: text })
    };

    onChangeText = async (key, val) => {
        await this.setState({ [key]: val});
        await this.setErrorStatus(key,val);
    };

    render() {
        let stateName = [
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

        let cityName = [
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

        let goodsType = [
            {
                value: 'Row Materials',
            },
            {
                value: 'Fruits & Vegetable',
            },
            {
                value: 'Iron Product'
            },
            {
                value: 'Oil Product'
            },
            {
                value: 'Grains',
            }];

        return (
            <Container style={{flex: 1}}>
                <Content style={{marginBottom: 30}}>
                    <View style={StyleSheet.Container}>
                        <Header style={styles.topHeader}>
                            <Left>
                                <Icon name="menu" style={{marginTop: -12}}
                                      onPress={() => this.props.navigation.openDrawer()}/>
                            </Left>
                            <Body style={{marginTop:-12}}>
                                <Text style={{color:'#20336b', fontSize:20, fontWeight: 'bold', paddingBottom:0}}>
                                    Services
                                </Text>
                            </Body>
                        </Header>

                        <View>
                            <Text style={styles.pageTitle}>
                                Request for Goods
                            </Text>
                        </View>

                        <View style={styles.inputContainer}>
                            <Item style={{borderColor: 'transparent', marginTop: 15, marginLeft: 20, marginRight: 20}}>
                                <Text style={{
                                    color:'#10d4f4',
                                    fontWeight: 'bold',
                                    fontSize: 16,
                                    textDecorationLine: "underline",
                                    textDecorationStyle: "solid",
                                    textDecorationColor: "#000"
                                }}>
                                    Pickup Location Details:
                                </Text>
                            </Item>
                        </View>

                        <View style={{marginBottom: 15, marginTop: -15, marginLeft: 20, marginRight: 20}}>
                            <Dropdown
                                label='Select State'
                                data={stateName}
                                overlayStyle={{marginTop: 86, marginLeft: 12}}
                            />

                        </View>

                        <View style={{marginBottom: 15, marginTop: -15, marginLeft: 20, marginRight: 20}}>
                            <Dropdown
                                label='Select City'
                                data={cityName}
                                overlayStyle={{marginTop: 86, marginLeft: 12}}
                            />
                        </View>

                        <View style={{marginLeft: 20, marginRight: 20}}>
                            <TextInput
                                style={styles.textAreaInput}
                                onChangeText={(pickupAddressDetails) => this.setState({pickupAddressDetails})}
                                value={this.state.pickupAddressDetails}
                                multiline={true}
                                numberOfLines={4}
                                placeholder="Enter Address in details"
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Item style={{borderColor: 'transparent', marginTop: 25, marginLeft: 20, marginRight: 20}}>
                                <Text style={{
                                    color:'#10d4f4',
                                    fontWeight: 'bold',
                                    fontSize: 16,
                                    textDecorationLine: "underline",
                                    textDecorationStyle: "solid",
                                    textDecorationColor: "#000"
                                }}>
                                    Destination Location Details:
                                </Text>
                            </Item>
                        </View>

                        <View style={{marginBottom: 15, marginTop: -15, marginLeft: 20, marginRight: 20}}>
                            <Dropdown
                                label='Select State'
                                data={stateName}
                                overlayStyle={{marginTop: 86, marginLeft: 12}}
                            />
                        </View>

                        <View style={{marginBottom: 15, marginTop: -15, marginLeft: 20, marginRight: 20}}>
                            <Dropdown
                                label='Select City'
                                data={cityName}
                                overlayStyle={{marginTop: 86, marginLeft: 12}}
                            />
                        </View>

                        <View style={{marginLeft: 20, marginRight: 20}}>
                            <TextInput
                                style={styles.textAreaInput}
                                onChangeText={(destinationAddressDetails) => this.setState({destinationAddressDetails})}
                                value={this.state.destinationAddressDetails}
                                multiline={true}
                                numberOfLines={4}
                                placeholder="Enter Address in details"
                            />
                        </View>

                        <View style={{marginTop: 20}}>
                            <Item style={{borderColor: 'transparent', marginLeft: 20, marginRight: 20}}>
                                <Text style={{fontWeight: 'bold', paddingBottom: 3}}>
                                    Select Pickup Date:
                                </Text>
                            </Item>
                        </View>

                        <View style={{marginLeft: 15, marginRight: 20, marginBottom: 20}}>
                            <DatePicker
                                style={{width: 150}}
                                date={this.state.date}
                                mode="date"
                                placeholder="Select Date"
                                format="DD-MM-YYYY"
                                minDate="17-09-2019"
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
                                onDateChange={(date) => {
                                    this.setState({date: date})
                                }}
                            />
                        </View>

                        <View style={{marginBottom: 15, marginTop: -15, marginLeft: 20, marginRight: 20}}>
                            <Dropdown
                                label='Select Goods Type'
                                data={goodsType}
                                overlayStyle={{marginTop: 86, marginLeft: 12}}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Item style={styles.inputView} error={this.state.errorObj.weightError.status}>
                                <Input
                                    style={styles.inputWithoutIcon}
                                    underlineColorAndroid="transparent"
                                    placeholder="Weights (in Tons)"
                                    placeholderTextColor="#897d7b"
                                    autoCapitalize="none"
                                    keyboardType='numeric'
                                    returnKeyType='next'
                                    returnKeyLabel='next'
                                    onChangeText={(value) => this.onChangeText('weight', value)}
                                />
                            </Item>
                            <Text style={styles.error}>
                                {
                                    !this.state.errorObj.weightError.status ? '' : this.state.errorObj.weightError.errorType
                                }
                            </Text>

                        </View>

                        <TouchableOpacity
                            style={styles.submitButton}
                        >
                            <Text style={styles.submitButtonText}> REQUEST </Text>
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>
        )
    }
}

export default RequestForServices;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    topHeader: {
        backgroundColor: '#fff',
        paddingTop: 15,
        paddingLeft: 15,
        justifyContent: 'flex-start'
    },
    pageTitle: {
        color: '#fff',
        backgroundColor: '#20336b',
        paddingLeft:15,
        fontSize: 15,
        fontWeight: 'bold',
        height: 50,
        lineHeight: 50,
        textTransform: 'uppercase'
    },
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
    inputWithoutIcon: {
        height: 40,
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
    textAreaInput: {
        paddingLeft: 3,
        paddingBottom: 5,
        height: 60,
        color: '#3f414d',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
});
