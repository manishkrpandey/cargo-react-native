// import React, { Component } from 'react';
// import {
//     View,
//     Text,
//     StyleSheet
// } from 'react-native';
// import StepIndicator from 'react-native-step-indicator';

// import { Icon, Button, Container, Header, Content, Left, Right} from 'native-base';

// const labels = ["Cart","Delivery Address","Order Summary","Payment Method","Track"];
// const customStyles = {
//     stepIndicatorSize: 25,
//     currentStepIndicatorSize:30,
//     separatorStrokeWidth: 2,
//     currentStepStrokeWidth: 3,
//     stepStrokeCurrentColor: '#fe7013',
//     stepStrokeWidth: 3,
//     stepStrokeFinishedColor: '#fe7013',
//     stepStrokeUnFinishedColor: '#aaaaaa',
//     separatorFinishedColor: '#fe7013',
//     separatorUnFinishedColor: '#aaaaaa',
//     stepIndicatorFinishedColor: '#fe7013',
//     stepIndicatorUnFinishedColor: '#ffffff',
//     stepIndicatorCurrentColor: '#ffffff',
//     stepIndicatorLabelFontSize: 13,
//     currentStepIndicatorLabelFontSize: 13,
//     stepIndicatorLabelCurrentColor: '#fe7013',
//     stepIndicatorLabelFinishedColor: '#ffffff',
//     stepIndicatorLabelUnFinishedColor: '#aaaaaa',
//     labelColor: '#999999',
//     labelSize: 13,
//     currentStepLabelColor: '#fe7013'
// }

// class YourVehicles extends Component {
//     constructor() {
//         super();
//         this.state = {
//             currentPosition: 0
//         }
//     }

//     onPageChange(position){
//         this.setState({currentPosition: position});
//     }

//     render() {
//         return (
//             <Container>
//                 <Header style={{backgroundColor:'#fff', paddingTop:15, paddingLeft:15, justifyContent:'flex-start'}}>
//                     <Left>
//                         <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
//                     </Left>
//                 </Header>
//                 <View>
//                     <Text style={{textAlign:'left', fontSize:18, paddingLeft:20, paddingTop:10, paddingBottom:10, backgroundColor: '#10d4f4', color:'#fff'}}>
//                         Upload Your Documents
//                     </Text>
//                 </View>

//                 <StepIndicator
//                     customStyles={customStyles}
//                     currentPosition={this.state.currentPosition}
//                     labels={labels}
//                 />
//             </Container>
//         )
//     }
// }
// export default YourVehicles;




import { Icon, Button, Container, Header, Content, Left, Right} from 'native-base';
import { StyleSheet, View, Text } from 'react-native';
import React, { Component } from 'react';
import { PagerTabIndicator, IndicatorViewPager } from 'rn-viewpager';

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
            <Text style={{textAlign:'left', fontSize:18, paddingLeft:20, paddingTop:10, paddingBottom:10, backgroundColor: '#10d4f4', color:'#fff'}}>
                Upload Your Documents
            </Text>
        </View>
      <View style={{ flex: 1 }}>
        <IndicatorViewPager
          style={{ flex: 1 }}
          indicator={this._renderTabIndicator()}
        >
          <View style={{ backgroundColor: 'cadetblue' }}>
            <Text>page one</Text>
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
