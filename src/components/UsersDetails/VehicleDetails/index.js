import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Image,Text} from 'react-native';
import { Container, Content, Item, Input, Card,Thumbnail,Left,CardItem,Body, Right,Toast} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Dropdown} from 'react-native-material-dropdown';
import MultiSelect from 'react-native-multiple-select';
import errroMessages from './../../../constant';
import truckImages from './../../../../img/desitruck.jpg';
import driver from './../../../../img/driver.png';
import VehicleDetailsController from '../../../services/api/vehicleDetailsService';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from "react-redux";
import Spinner from 'react-native-loading-spinner-overlay';
import ToggleSwitch from 'toggle-switch-react-native';

const vehicleDetailsControllerobj = new VehicleDetailsController();

class VehicleDescriptionComponent extends Component {
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
        stateObjItems:[],
        citiesObject:[],
        allVehiclesDetails:[],
        accountNumber: '',
        ifscCode: '',
        spinner:false,
        isValidForm:false,
        addNewVehicleText:'Add New Vehicle',
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
            accountNumberError: {
                status: false,
                errorType: ''
            },
            ifscCodeError: {
                status: false,
                errorType: ''
            },
        },
        selectedItems : [],
        showVehicleInputForm:true,
        isOnDefaultToggleSwitch: true,
        isOnLargeToggleSwitch: false,
        isOnBlueToggleSwitch: false
    };

    onSelectedItemsChange = selectedItems => {
        this.setState({ selectedItems });
    };

    showVehicleForms = () => {
        console.log('hello');
        this.setState(prevState => ({
            ...prevState,
            showVehicleInputForm: !prevState.showVehicleInputForm
        }))
        if(!this.state.showVehicleInputForm){
            this.setState({addNewVehicleText:'Add New Vehicle'})
        }else{
            this.setState({addNewVehicleText:'My Vehicles'})
        }
    };

    setErrorStatus = (key, val) => {

        if (key === 'vehicleNumber') {
            if (this.state.vehicleNumber.length < 1) {
                this.setState(prevState => ({
                    ...prevState,
                    errorObj: {
                        ...prevState.errorObj,
                        vehicleNumberError: {
                            ...prevState.errorObj.vehicleNumberError,
                            status: true,
                            errorType: errroMessages.genericError

                        }
                    }
                }))
            } else if (this.state.vehicleNumber.length <= 4) {

                this.setState(prevState => ({
                    ...prevState,
                    errorObj: {
                        ...prevState.errorObj,
                        vehicleNumberError: {
                            ...prevState.errorObj.vehicleNumberError,
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
                        vehicleNumberError: {
                            ...prevState.errorObj.vehicleNumberError,
                            status: false,
                            errorType: errroMessages.genericError

                        }
                    }
                }));
                this.setState({isValidForm:true});

            }
        }

        if (key === 'RCNumber') {
            let reg = /^[6-9]\d{9}$/;
            if (this.state.RCNumber.length < 1) {
                this.setState(prevState => ({
                    ...prevState,
                    errorObj: {
                        ...prevState.errorObj,
                        RCNumberError: {
                            ...prevState.errorObj.RCNumberError,
                            status: true,
                            errorType: errroMessages.genericError

                        }
                    }
                }))
            } else if (!reg.test(this.state.RCNumber)) {

                this.setState(prevState => ({
                    ...prevState,
                    errorObj: {
                        ...prevState.errorObj,
                        RCNumberError: {
                            ...prevState.errorObj.RCNumberError,
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
                        RCNumberError: {
                            ...prevState.errorObj.RCNumberError,
                            status: false,
                            errorType: errroMessages.genericError
                        }
                    }
                }))
            }
            if(this.state.isValidForm){
                this.setState({isValidForm:true});
            }else{
                this.setState({isValidForm:false});
            }

        }

    };

    onChangeText = async (key, val) => {
        await this.setState({[key]: val});
        await this.setErrorStatus(key, val);
    };

    onSubmitForm = () => {
        this.setErrorStatus('vehicleNumber', '');
        this.setErrorStatus('RCNumber', '');
        console.log('this.state.isValidForm',this.state.isValidForm);
        if(this.state.isValidForm){
            this.AddNewVehicle();
        }
    };

    AddNewVehicle = () => {
        console.log('this.state.isValidForm2',this.state.isValidForm);
        const { token,user } = this.props.places;
        let reqObj = {
            "driverPhone":  7892538128,
            "isDriverAssigned": true,
            "vehileDetails": {
                "vehicleNumber": this.state.vehicleNumber,
                "chassisNumber": this.state.chassisNumber,
                "currentState": this.state.currentState,
                "permitState": ["Karnataka","Delhi"],
                "rcNumber": this.state.RCNumber,
                "loadCapacity": this.state.allowedLoad,
                "insuranceId": this.state.insuranceDetails,
                "serviceStatus": true,
                "vehicleType": "L1",
                 "vehicleAvaibility": "available"
            },
            "ownerDetails": {
                "name": "Dharmesh",
                "phone": "9711189363",
                "address": "Bangalore"
            },
            "bankDetails": {
                "accountNumber":this.state.accountNumber,
                "ifscCode": this.state.ifscCode
            }
        }
        vehicleDetailsControllerobj.AddNewVehicle(reqObj,token).then(data=>{
            if(data && data.data[0] && data.data[0].msg.status===422){
                Toast.show({
                    text: `Already Exist`,
                    buttonText: "Okay",
                    duration: 3000
                  });
                  this.getAllVehicleData();
                  return 
            }
            this.showVehicleForms();
            this.getAllVehicleData();
            console.log('Hi Addded vehicle',data)
        }).catch(err=>err);
        
    }
    getuserData = async () => {
        try {
          const value = await AsyncStorage.getItem('user');
          if(value !== null) {
              console.log('value.phone',value.phone);
            return value.phone;
          }
        } catch(e) {}
      }
    onToggle(isOn,indexTochange) {
        console.log("Changed to ",isOn,indexTochange);
        // this.setState(prevState => ({
        //     allVehiclesDetails: prevState.allVehiclesDetails.map(
        //    ( obj,index )=> (index === indexTochange ? Object.assign(obj.vehileDetails.serviceStatus, isOn) : obj)
        //   )
        // }));
        console.log("state to " ,this.state,this.state.allVehiclesDetails[indexTochange]);
    }
 
    getAllVehicleData = () =>{
        const { token,user } = this.props.places;
        vehicleDetailsControllerobj.getAllVehicle(token,{"phone":user.phone}).then(data=>
            {
                if(data && data.result){
                    this.setState({
                    allVehiclesDetails:data.result});
            }
        }).catch(err=>err);
    }

    componentDidMount() {
        this.setState({spinner:true});
        console.log('places inside vehicle details',this.props.places);
        const { token,user } = this.props.places;
        this.getAllVehicleData();
        vehicleDetailsControllerobj.getState().then(data=>{
            if(data.states){
                this.setState({spinner:true});
                console.log('data is',data.states);
                let stateObj = [];
                data.states.forEach((element,index) =>
                {
                let obj = {name:element,id:index.toString(),value:element};
                stateObj.push(obj)
                });
                this.setState({stateObjItems:stateObj});
        // const Items = stateObj;
            }else{

            }
            this.setState({spinner:false});
        }).catch(err=>err);
    }

    render() {
        const { selectedItems, allVehiclesDetails,stateObjItems } = this.state;
       const  dataStateObject = stateObjItems.map(element => {
            return {value:element};
        })
        
        let truckDetailsCard= [];

        if(allVehiclesDetails) {
            truckDetailsCard =  allVehiclesDetails.map((data,index) => {
                return (
                    <Card key={index} style={{marginLeft:10, marginRight:10, marginBottom:20}}>
                        <CardItem style={{paddingBottom:0}}>
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                                <ToggleSwitch
                                    style={{padding:10}}
                                    onColor="green"
                                    offColor="#ddd"
                                    label="Status:"
                                    labelStyle={{ fontWeight: "900" }}
                                    size="small"
                                    isOn={this.state.allVehiclesDetails[index].serviceStatus}
                                    onToggle={(value )=> {
                                        console.log('index',index);
                                        this.onToggle(value,index);
                                    }}

                                />
                            </View>
                        </CardItem>
                        <CardItem>
                          <Left style={{marginTop:-30}}>
                              <Image source={driver}/>
                            <Body>
                                <View style={styles.data}>
                                    <Text>Driver Name: </Text>
                                    <Text style={styles.details}>{data.ownerDetails.name}</Text>
                                </View>
                            </Body>
                          </Left>
                        </CardItem>
                        <View style={styles.dataRow}>
                            <Image style={styles.uploadImages}
                                   source={truckImages}/>
                        </View>
    
                        <View style={styles.dataRow}>
                            <View style={styles.data}>
                                <Text>Truck Number:</Text>
                                <Text style={styles.details}>{data.vehileDetails.vehicleNumber}</Text>
                            </View>
                            <View style={styles.data}>
                                <Text>Owner Name:</Text>
                                <Text style={styles.details}>{data.ownerDetails.name}</Text>
                            </View>
                        </View>
    
                        <View style={styles.dataRow}>
                            <View style={styles.data}>
                                <Text>Current State:</Text>
                                <Text style={styles.details}>{data.vehileDetails.currentState}</Text>
                            </View>
    
                            <View style={styles.data}>
                                <Text>Permit State:</Text>
                                <Text style={styles.details}>{
                                    data.vehileDetails.permitState.map(data=>data + ', ')
                                    }</Text>
                            </View>
                        </View>
                    </Card>
                )
            });
        }

        return (
            <Container style={{flex: 1}}>
                  <Spinner
          visible={this.state.spinner}
          textStyle={styles.spinnerTextStyle}
        />
                <Content style={{marginBottom: 30}}>
                    <View style={styles.pageHeader}>
                        <Text style={styles.uploadDocuments} onPress={this.showVehicleForms}>
                            {this.state.addNewVehicleText}
                        </Text>
                        <Text style={{alignSelf:'flex-end', position:'absolute', right:15, top:10}} onPress={this.showVehicleForms}>
                            <Icon style={styles.Addicon} name="plus"/>
                        </Text>
                    </View>

                    {
                        this.state.showVehicleInputForm ? (
                                <View>
                                    {truckDetailsCard}
                                </View>
                        ):
                            (
                                <View style={styles.vehicleInputForm}>
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
                                                onChangeText={(value) => this.onChangeText('ownerName', value)}
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
                                                data={stateObjItems}
                                                overlayStyle={{marginTop:86, marginLeft:17}}
                                                onChangeText={(value) => this.onChangeText('currentState', value)}
                                            />
                                        </View>

                                        <View style={{ flex: 1, marginBottom:15, marginTop:-5, marginLeft:20, marginRight:20}}>
                                            <MultiSelect
                                                hideTags
                                                items={this.state.stateObjItems}
                                                uniqueKey="id"
                                                ref={(component) => { this.multiSelect = component }}
                                                onSelectedItemsChange={(value) => this.onChangeText('permittedState', value)}
                                                selectedItems={selectedItems}
                                                selectText="Select  Allowed State"
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
                                                // fixedHeight={true}
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

                    <View style={styles.inputContainer}>
                        <Item style={{borderColor: 'transparent', marginLeft: 20, marginRight: 20}}>
                            <Text style={{
                                fontWeight: 'bold',
                                textDecorationLine: "underline",
                                textDecorationStyle: "solid",
                                textDecorationColor: "#000"
                            }}>
                                Bank Account Details:
                            </Text>
                        </Item>
                    </View>

                    <View style={styles.inputContainer}>
                        <Item style={styles.inputView} error={this.state.errorObj.accountNumberError.status}>
                            <Icon style={styles.icon} name="user"/>
                            <Input
                                style={styles.input}
                                underlineColorAndroid="transparent"
                                placeholder="Account Number"
                                placeholderTextColor="#897d7b"
                                keyboardType='number-pad'
                                returnKeyType='next'
                                returnKeyLabel='next'
                                onChangeText={(value) => this.onChangeText('accountNumber', value)}
                            />
                        </Item>
                        <Text style={styles.error}>
                            {
                                !this.state.errorObj.accountNumberError.status ? '' : this.state.errorObj.accountNumberError.errorType
                            }
                        </Text>

                    </View>

                    <View style={styles.inputContainer}>
                        <Item style={styles.inputView} error={this.state.errorObj.ifscCodeError.status}>
                            <Icon style={styles.icon} name="user"/>
                            <Input
                                style={styles.input}
                                underlineColorAndroid="transparent"
                                placeholder="IFSC Code"
                                placeholderTextColor="#897d7b"
                                returnKeyType='next'
                                returnKeyLabel='next'
                                onChangeText={(value) => this.onChangeText('ifscCode', value)}
                            />
                        </Item>
                        <Text style={styles.error}>
                            {
                                !this.state.errorObj.ifscCodeError.status ? '' : this.state.errorObj.ifscCodeError.errorType
                            }
                        </Text>

                    </View>
                                    </View>

                                    <TouchableOpacity
                                        style={styles.submitButton}
                                    >
                                        <Text style={styles.submitButtonText} onPress={() => this.onSubmitForm()}> SAVE </Text>
                                    </TouchableOpacity>
                                </View>
                        )
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
    Addicon: {
        color: '#fff',
        fontSize: 22,
        paddingLeft:10,
        paddingRight: 10,
        marginTop:10
    },
    uploadDocuments: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        textTransform:'uppercase',
        alignSelf: 'flex-end',
        paddingTop:0,
        marginRight:50
    },
    pageHeader: {
        backgroundColor:'#20336b',
        marginBottom:10,
        position: 'relative',
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom:10
    },
    cardView: {
        marginLeft:15,
        marginRight:15,
        marginTop:10,
        marginBottom:15,
        borderRadius: 2,
        borderBottomWidth: 0,
        shadowColor: '#20336b',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 1,
        padding:10
    },
    dataRow: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        paddingBottom: 10
    },
    data: {
        width: '45%',
        fontSize: 10,
        fontWeight: 'bold',
        paddingLeft: 10,
        marginBottom: 5
    },
    uploadImages: {
        width:'100%'
    },
    details:{
        color:'#10d4f4',
    }
});
const mapStateToProps = state => {
    return {
      places: state.places.places,
      selectedPlace: state.places.selectedPlace
    };
  };

  export default connect(mapStateToProps)(VehicleDescriptionComponent);
