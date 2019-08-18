import {Icon, Button, Container, Header, Content, Left, Right} from 'native-base';
import {StyleSheet, View, Text} from 'react-native';
import React, {Component} from 'react';
import {PagerTabIndicator, IndicatorViewPager} from 'rn-viewpager';
import UploadDocuments from '../UsersDetails/UploadDocuments/index';
import VehicleDescriptionComponent from './../UsersDetails/VehicleDetails';
import DriverDescriptionComponent from './../UsersDetails/DriverDetails';

export default class YourVehicles extends Component {
    render() {
        return (
            <Container>
                <Header style={{
                    backgroundColor: '#10d4f4',
                    borderBottomWidth: 1,
                    borderBottomColor: '#6b6b6b',
                    paddingTop: 15,
                    paddingLeft: 15,
                    justifyContent: 'flex-start'
                }}>
                    <Left>
                        <Icon name="menu" style={{color: '#fff'}} onPress={() => this.props.navigation.openDrawer()}/>
                    </Left>
                </Header>
                <View style={{flex: 1, borderBottomWidth: 1, borderBottomColor: '#6b6b6b'}}>
                    <IndicatorViewPager
                        style={{flex: 1}}
                        indicator={this._renderTabIndicator()}
                    >
                        <View style={{backgroundColor: '#fff', padding: 20}}>
                            <VehicleDescriptionComponent/>
                        </View>
                        <View style={{backgroundColor: '#fff', padding: 20}}>
                            <DriverDescriptionComponent/>
                        </View>
                        <View style={{backgroundColor: '#fff', padding: 20}}>
                            <UploadDocuments/>
                        </View>
                    </IndicatorViewPager>
                </View>
            </Container>
        );
    }

    _renderTabIndicator() {
        let tabs = [{
            text: 'Vehicle Details',
            iconSource: require('../../../img/truckSelected.png'),
            selectedIconSource: require('../../../img/truck.png')
        }, {
            text: 'Driver Details',
            iconSource: require('../../../img/driverSelected.png'),
            selectedIconSource: require('../../../img/driver.png')
        }, {
            text: 'Documents',
            iconSource: require('../../../img/licenseSelected.png'),
            selectedIconSource: require('../../../img/license.png')
        },];
        return <PagerTabIndicator tabs={tabs}/>;
    }
}
