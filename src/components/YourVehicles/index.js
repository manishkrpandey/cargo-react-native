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
        <Header style={{backgroundColor:'#fff', paddingTop:15, paddingLeft:15, justifyContent:'flex-start'}}>
            <Left>
                <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
            </Left>
        </Header>
        <View>
            <Text style={styles.uploadDocuments}>
               Upload Your Documents
            </Text>
        </View>
      <View style={{ flex: 1 }}>
        <IndicatorViewPager
          style={{ flex: 1 }}
          indicator={this._renderTabIndicator()}
        >
          <View style={{ backgroundColor: 'cadetblue' }}>
            <InsuranceDetails></InsuranceDetails>
          </View>
          <View style={{ backgroundColor: 'cornflowerblue' }}>
          <Text>page two</Text>
          </View>
          <View style={{ backgroundColor: '#1AA094' }}>
            <Text>page three</Text>
          </View>
        </IndicatorViewPager>
      </View>
      </Container>
    );
  }
  _renderTabIndicator() {
    let tabs = [{
      text: 'Driving Licence Details',
      iconSource: require('../../../img/manish.png'),
      selectedIconSource: require('../../../img/manish2.png')
    }, {
      text: 'Vehicle Details',
      iconSource: require('../../../img/manish.png'),
      selectedIconSource: require('../../../img/manish2.png')
    }, {
      text: 'Insurance Details',
      iconSource: require('../../../img/manish.png'),
      selectedIconSource: require('../../../img/manish2.png')
    }, {
      text: 'Profile',
      iconSource: require('../../../img/manish.png'),
      selectedIconSource: require('../../../img/manish2.png')
    }];
    return <PagerTabIndicator tabs={tabs} />;
  }
}


const styles = StyleSheet.create({
    uploadDocuments : {
        backgroundColor: '#10d4f4',
        color:'#fff',
        textAlign:'left',
        fontSize:18,
        paddingLeft:20,
        paddingTop:10,
        paddingBottom:10,
        paddingRight:20,
        marginTop: 20
    }
})