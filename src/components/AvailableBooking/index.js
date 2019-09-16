import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet, Image, TouchableOpacity
} from 'react-native';

import {Container, Content, Item, Icon, Header, Left, Body, Input, Card,Thumbnail,CardItem,} from 'native-base';
import truckImages from "../../../img/desitruck.jpg";
import {Dropdown} from "react-native-material-dropdown";
import VehicleDetailsController from '../../services/api/vehicleDetailsService'
import  AvailableBookingsServiceController from '../../services/api/availableBookingsService'
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from "react-redux";

const vehicleDetailsControllerobj = new VehicleDetailsController();
const availableBookingsServiceController = new AvailableBookingsServiceController();
class AvailableBooking extends Component {
    constructor(props){
        super(props);
    }
    state={
        AvailableBooking:[],
        stateObjItems:[],
        citiesObj:[],
        spinner:false
    }

    getCities = (value) =>{
        // this.setState({spinner:true});
        vehicleDetailsControllerobj.getCities({"state":value}).then(data=>{
            this.setState({spinner:false});
            if(data.cities){
                this.setState({spinner:false});
                console.log('data is',data.cities);
                let cityNameObjPick = [];
                    data.cities.forEach((element,index) =>
                    {
                    let obj = {name:element,id:index.toString(),value:element};
                    cityNameObjPick.push(obj)
                    })                
                    this.setState({citiesObj:cityNameObjPick});
        // const Items = stateObj;
            }else{
            }
        }).catch(err=>err);
      }

      confirmBooking = () =>{
          console.log('click confirm');
      }

      getAvailableBookings = () =>{

      }

      getStates = () =>{
        vehicleDetailsControllerobj.getState().then(data=>{
            if(data.states){
                this.setState({spinner:false});
                console.log('data is',data.states);
                let stateObj = [];
                data.states.forEach((element,index) =>
                {
                let obj = {name:element,id:index.toString(),value:element};
                stateObj.push(obj)
                })
                this.setState({stateObjItems:stateObj});
        // const Items = stateObj;
            }else{

            }
        }).catch(err=>console.log(err));
      }

    componentDidMount(){
        const { token,user } = this.props.places;
        let requstStateCityObject = {
            "state": "Bihar",
            "cities": ["patna"]
        };
        this.setState({spinner:true});
        availableBookingsServiceController.getAvailableBookingsFromAgent(requstStateCityObject,token).then(data=>{
            console.log('availabele bookings',data)
            if(data.response){
                this.setState({AvailableBooking:data.response});
                this.setState({spinner:false});
            }
        }).catch(err=>this.setState({spinner:false}));
       this.getStates();
    }

    render() {
    const availableBookingCards =  this.state.AvailableBooking.map(data=>{
            return( <View key={data.bookingId} style={StyleSheet.Container}>
                <Card style={{marginLeft:10, marginRight:10, marginBottom:20}}>
                    <CardItem style={styles.cardRow}>
                       <Left>
                           <View style={{marginBottom:10, marginTop:10}}>
                               <Text style={styles.innerTitle}>Booking ID</Text>
                           </View>
                       </Left>
                        <Body>
                            <View style={{paddingTop:10}}>
                                <Text style={styles.details}>{data.bookingId}</Text>
                            </View>
                        </Body>
                    </CardItem>
                    <CardItem style={styles.cardRow}>
                        <View>
                            <Text style={styles.innerTitle}>Pickup Location</Text>
                        </View>
                    </CardItem>
                    <CardItem style={styles.cardRow}>
                        <View style={styles.dataRow}>
                            <View style={styles.data}>
                                <Text>State:</Text>
                                <Text style={styles.details}>{data.pickupLocationState}</Text>
                            </View>
                            <View style={styles.data}>
                                <Text>City</Text>
                                <Text style={styles.details}>{data.pickupLocationCity}</Text>
                            </View>
                        </View>
                    </CardItem>
                    <CardItem style={styles.cardRow}>
                        <View>
                            <Text style={styles.innerTitle}>Destination Location</Text>
                        </View>
                    </CardItem>
                    <CardItem style={styles.cardRow}>
                        <View style={styles.dataRow}>
                            <View style={styles.data}>
                                <Text>State:</Text>
                                <Text style={styles.details}>{data.dropLocationState}</Text>
                            </View>

                            <View style={styles.data}>
                                <Text>City:</Text>
                                <Text style={styles.details}>{data.dropLocationState}</Text>
                            </View>
                        </View>
                    </CardItem>

                    <CardItem style={styles.cardRow}>
                        <View>
                            <Text style={styles.innerTitle}>Pickup Date</Text>
                        </View>
                    </CardItem>
                    <CardItem style={styles.cardRow}>
                        <View style={styles.data}>
                            <Text style={styles.details}>{data.pickupDate}</Text>
                        </View>
                    </CardItem>

                    <CardItem style={styles.cardRow}>
                        <View>
                            <Text style={styles.innerTitle}>Goods Type</Text>
                        </View>
                    </CardItem>
                    <CardItem style={styles.cardRow}>
                        <View style={styles.data}>
                            <Text style={styles.details}>{data.goodType}</Text>
                        </View>
                    </CardItem>

                    <CardItem style={styles.cardRow}>
                        <View>
                            <Text style={styles.innerTitle}>Approx Weights (in Tons)</Text>
                        </View>
                    </CardItem>
                    <CardItem style={styles.cardRow}>
                        <View style={styles.data}>
                            <Text style={styles.details}>{data.quantity}</Text>
                        </View>
                    </CardItem>

                    <CardItem style={styles.cardRow}>
                        <View>
                            <Text style={styles.innerTitle}>Estimate Price (Rs.)</Text>
                        </View>
                    </CardItem>
                    <CardItem style={styles.cardRow}>
                        <View style={styles.data}>
                            <Text style={styles.details}>&#8377;{data.estimatedCostByAgent}</Text>
                        </View>
                    </CardItem>

                    <CardItem style={styles.cardRow}>
                        <View>
                            <Text style={styles.innerTitle}>Amount (Rs.)</Text>
                        </View>
                    </CardItem>
                    <CardItem style={styles.cardRow}>
                        <View style={{paddingLeft:10}}>
                            <Text>Please Enter your estimate amount</Text>
                        </View>
                    </CardItem>
                    <CardItem style={styles.cardRow}>
                        <Item style={styles.inputView}>
                            <Input
                                style={styles.input}
                                underlineColorAndroid="transparent"
                                placeholder="Amount in Rs."
                                placeholderTextColor="#897d7b"
                                autoCapitalize="none"
                                autoFocus={true}
                                keyboardType='numeric'
                                returnKeyType='next'
                                returnKeyLabel='next'
                            />

                            <TouchableOpacity
                                style={styles.submitButton}
                            >
                                <Text onPress={this.confirmBooking()} style={styles.submitButtonText}> CONFIRM </Text>
                            </TouchableOpacity>
                        </Item>
                    </CardItem>
                </Card>

            </View>);
        })
        return (
            <Container>
                                  <Spinner
          visible={this.state.spinner}
          textStyle={styles.spinnerTextStyle}
        />
                <Header style={styles.topHeader}>
                            <Left>
                                <Icon name="menu" style={{marginTop:-12}} onPress={() => this.props.navigation.openDrawer()} />
                            </Left>
                            <Text style={{color:'#20336b', fontSize:20, fontWeight: 'bold', paddingBottom:0, marginLeft: -100}}>
                                Bookings
                            </Text>
                        </Header>
                        <View>
                            <Text style={styles.pageTitle}>
                                Available Bookings
                            </Text>
                        </View>
                <Content>
                
                <View style={{marginBottom: 15, marginTop: 0, marginLeft: 20, marginRight: 20}}>
                <Text style={{color:'#20336b', fontSize:20, fontWeight: 'bold', paddingBottom:0,paddingTop:10}}>Filters</Text>
                            <Dropdown
                                label='Select State'
                                data={this.state.stateObjItems}
                                overlayStyle={{marginTop: -60, marginLeft: 12}}
                                onChangeText = {value => this.getCities(value)}
                            />

                        </View>

                        <View style={{marginBottom: 0, marginTop: -15, marginLeft: 20, marginRight: 20}}>
                            <Dropdown
                                label='Select City'
                                data={this.state.citiesObj}
                                overlayStyle={{marginTop: 86, marginLeft: 12}}
                                
                            />
                        </View>
                        <TouchableOpacity
                                        style={styles.ApplyButton}
                                    >
                                        <Text style={styles.submitButtonText}> Apply Filters </Text>
                        </TouchableOpacity>
                        <View>
                            {
                                availableBookingCards
                            }
                        </View>
                   
                </Content>
            </Container>
        )
    }
}


const styles = StyleSheet.create({
    Container: {
        flex:1,
    },
    topHeader: {
        backgroundColor:'#fff',
        paddingTop:15,
        paddingLeft:15,
        justifyContent:'flex-start',
    },
    pageTitle: {
        color: '#fff',
        backgroundColor: '#20336b',
        fontSize: 15,
        fontWeight: 'bold',
        height: 50,
        lineHeight: 50,
        paddingLeft: 15
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
    dataRow: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        paddingBottom: 0
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
    },
    innerTitle : {
        fontSize: 16,
        fontWeight:'bold',
        paddingLeft:10,
        color:'#20336b'
    },
    cardRow: {
        paddingTop: 2,
        paddingBottom: 2
    },
    inputContainer: {
        marginBottom: 15
    },

    inputView: {
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 20,
        paddingLeft:0
    },

    input: {
        height: 40,
        marginLeft: 0
    },
    submitButton: {
        backgroundColor: '#20336b',
        padding: 10,
        marginTop: 20,
        height: 40,
        marginLeft: 0,
        marginRight: -3,
        borderRadius:4
    },
    ApplyButton: {
        backgroundColor: '#20336b',
        padding: 10,
        marginTop: 20,
        height: 40,
        borderRadius:4,
        marginLeft:20,
        marginRight:20,
        marginBottom:10

    },
    submitButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
});
const mapStateToProps = state => {
    return {
      places: state.places.places,
      selectedPlace: state.places.selectedPlace
    };
  };

  export default connect(mapStateToProps)(AvailableBooking);