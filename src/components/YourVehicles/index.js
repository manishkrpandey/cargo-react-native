import { Icon, Button, Container, Header, Content, Left, Right} from 'native-base';
import { StyleSheet, View, Text } from 'react-native';
import React, { Component } from 'react';
import { PagerTabIndicator, IndicatorViewPager } from 'rn-viewpager';
import InsuranceDetails from './../DocumentsUpload/InsuranceDetails/index';
import { AccountDetailsComponent } from '../DocumentsUpload/AccountDetails'

export default class YourVehicles extends Component {
  render() {
    return (
        <Container>
        <Header style={{backgroundColor:'#10d4f4', borderBottomWidth:1, borderBottomColor:'#6b6b6b',paddingTop:15, paddingLeft:15, justifyContent:'flex-start'}}>
            <Left>
                <Icon name="menu" style={{color:'#fff'}} onPress={() => this.props.navigation.openDrawer()} />
            </Left>
        </Header>
        <View style={{marginTop: -20,}}>
            <Text style={styles.uploadDocuments}>
               Vehicle Details
            </Text>
        </View>
      <View style={{ flex: 1, borderBottomWidth:1, borderBottomColor:'#6b6b6b'}}>
        <IndicatorViewPager
          style={{ flex: 1}}
          indicator={this._renderTabIndicator()}
        >
          <View style={{ backgroundColor: '#fff', padding:20 }}>
              <Text>Vehicle Details</Text>
          </View>
          <View style={{ backgroundColor: 'cornflowerblue', padding:20}}>
              <InsuranceDetails></InsuranceDetails>
          </View>
          <View style={{ backgroundColor: '#FFF', padding:20}}>
            <Text>Upload Documents</Text>
          </View>
        </IndicatorViewPager>
      </View>
      </Container>
    );
  }
  _renderTabIndicator() {
    let tabs = [{
      text: 'Vehicle Details',
      iconSource: require('../../../img/truck.png'),
      selectedIconSource: require('../../../img/truckSelected.png')
    }, {
      text: 'Driver Details',
      iconSource: require('../../../img/driver.png'),
      selectedIconSource: require('../../../img/driverSelected.png')
    }, {
      text: 'Documents',
      iconSource: require('../../../img/license.png'),
      selectedIconSource: require('../../../img/licenseSelected.png')
    },];
    return <PagerTabIndicator tabs={tabs} />;
  }
}


const styles = StyleSheet.create({
    uploadDocuments : {
        backgroundColor: '#10d4f4',
        color:'#fff',
        textAlign:'center',
        fontSize:18,
        paddingLeft:20,
        paddingTop:10,
        paddingBottom:10,
        paddingRight:20,
        marginTop: 20
    }
})
