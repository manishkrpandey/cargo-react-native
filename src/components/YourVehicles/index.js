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




// import { Icon, Button, Container, Header, Content, Left, Right} from 'native-base';
// import { StyleSheet, View, Text } from 'react-native';
// import React, { Component } from 'react';
// import { PagerTabIndicator, IndicatorViewPager } from 'rn-viewpager';

// export default class YourVehicles extends Component {
//   render() {
//     return (
//         <Container>
//         <Header style={{backgroundColor:'#fff', paddingTop:15, paddingLeft:15, justifyContent:'flex-start'}}>
//             <Left>
//                 <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
//             </Left>
//         </Header>
//         <View>
//             <Text style={{textAlign:'left', fontSize:18, paddingLeft:20, paddingTop:10, paddingBottom:10, backgroundColor: '#10d4f4', color:'#fff'}}>
//                 Upload Your Documents
//             </Text>
//         </View>
//       <View style={{ flex: 1 }}>
//         <IndicatorViewPager
//           style={{ flex: 1 }}
//           indicator={this._renderTabIndicator()}
//         >
//           <View style={{ backgroundColor: 'cadetblue' }}>
//             <Text>page one</Text>
//           </View>
//           <View style={{ backgroundColor: 'cornflowerblue' }}>
//             <Text>page two</Text>
//           </View>
//           <View style={{ backgroundColor: '#1AA094' }}>
//             <Text>page three</Text>
//           </View>
//         </IndicatorViewPager>
//       </View>
//       </Container>
//     );
//   }
//   _renderTabIndicator() {
//     let tabs = [{
//       text: 'Driving Licence Details',
//       iconSource: require('../../../img/manish.png'),
//       selectedIconSource: require('../../../img/manish2.png')
//     }, {
//       text: 'Vehicle Details',
//       iconSource: require('../../../img/manish.png'),
//       selectedIconSource: require('../../../img/manish2.png')
//     }, {
//       text: 'Insurance Details',
//       iconSource: require('../../../img/manish.png'),
//       selectedIconSource: require('../../../img/manish2.png')
//     }, {
//       text: 'Profile',
//       iconSource: require('../../../img/manish.png'),
//       selectedIconSource: require('../../../img/manish2.png')
//     }];
//     return <PagerTabIndicator tabs={tabs} />;
//   }

// }


import React, { Component } from 'react';
import { View, Button, Text, TextInput, Image } from 'react-native';

import firebase from 'react-native-firebase';

const androidConfig = {
  // clientId: '251160919899-c79mhnksb9pboora6i96vh2j2l9031bl.apps.googleusercontent.com',
  // appId: '1:251160919899:android:e359d2e7b213344b',
  // apiKey: 'AIzaSyDfrZlujh0KkFl88SoP8equkjLTAnjkNnE',
  // storageBucket: 'phoneauthregistration.appspot.com',
  // messagingSenderId: '251160919899',
  // projectId: 'phoneauthregistration',

  // enable persistence by adding the below flag
  apiKey: "AIzaSyDgdiC8NGeHKI6h-VN5QwA-03iY1iZ7DNg",
  // authDomain: "androidphoneauth-d1433.firebaseapp.com",
  databaseURL: "https://androidphoneauth-d1433.firebaseio.com",
  projectId: "phoneauthregistration",
  messagingSenderId: "251160919899",
  appId: "1:251160919899:android:6099235496b575a3",
  storageBucket: 'phoneauthregistration.appspot.com',
  persistence: true,
};
const kittensApp = firebase.initializeApp(
  // use platform specific firebase config
   androidConfig,
  // name of this app
  'kittens',
);

const successImageUri = 'https://cdn.pixabay.com/photo/2015/06/09/16/12/icon-803718_1280.png';

export default class YourVehicles extends Component {
  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      user: null,
      message: '',
      codeInput: '',
      phoneNumber: '+44',
      confirmResult: null,
    };
    kittensApp.onReady().then((app) => {
      // --- ready ---
      // use `app` arg, kittensApp var or `app('kittens')` to access modules
      // and their methods. e.g:
      firebase.app('kittens').auth().signInAnonymously().then((user) => {
          console.log('kittensApp user ->', user.toJSON());
      });
   });
  }

  componentDidMount() {
    this.unsubscribe = firebase.app('kittens').auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user: user.toJSON() });
      } else {
        // User has been signed out, reset the state
        this.setState({
          user: null,
          message: '',
          codeInput: '',
          phoneNumber: '+44',
          confirmResult: null,
        });
      }
    });
  }

  componentWillUnmount() {
     if (this.unsubscribe) this.unsubscribe();
  }

  signIn = () => {
    const { phoneNumber } = this.state;
    this.setState({ message: 'Sending code ...' });

    firebase.app('kittens').auth().signInWithPhoneNumber(phoneNumber)
      .then(confirmResult => this.setState({ confirmResult, message: 'Code has been sent!' }))
      .catch(error => this.setState({ message: `Sign In With Phone Number Error: ${error.message}` }));
  };

  confirmCode = () => {
    const { codeInput, confirmResult } = this.state;

    if (confirmResult && codeInput.length) {
      confirmResult.confirm(codeInput)
        .then((user) => {
          this.setState({ message: 'Code Confirmed!' });
        })
        .catch(error => this.setState({ message: `Code Confirm Error: ${error.message}` }));
    }
  };

  signOut = () => {
    firebase.app('kittens').auth().signOut();
  }

  renderPhoneNumberInput() {
   const { phoneNumber } = this.state;

    return (
      <View style={{ padding: 25 }}>
        <Text>Enter phone number:</Text>
        <TextInput
          autoFocus
          style={{ height: 40, marginTop: 15, marginBottom: 15 }}
          onChangeText={value => this.setState({ phoneNumber: value })}
          placeholder={'Phone number ... '}
          value={phoneNumber}
        />
        <Button title="Sign In" color="green" onPress={this.signIn} />
      </View>
    );
  }

  renderMessage() {
    const { message } = this.state;

    if (!message.length) return null;

    return (
      <Text style={{ padding: 5, backgroundColor: '#000', color: '#fff' }}>{message}</Text>
    );
  }

  renderVerificationCodeInput() {
    const { codeInput } = this.state;

    return (
      <View style={{ marginTop: 25, padding: 25 }}>
        <Text>Enter verification code below:</Text>
        <TextInput
          autoFocus
          style={{ height: 40, marginTop: 15, marginBottom: 15 }}
          onChangeText={value => this.setState({ codeInput: value })}
          placeholder={'Code ... '}
          value={codeInput}
        />
        <Button title="Confirm Code" color="#841584" onPress={this.confirmCode} />
      </View>
    );
  }

  render() {
    const { user, confirmResult } = this.state;
    return (
      <View style={{ flex: 1 }}>

        {!user && !confirmResult && this.renderPhoneNumberInput()}

        {this.renderMessage()}

        {!user && confirmResult && this.renderVerificationCodeInput()}

        {user && (
          <View
            style={{
              padding: 15,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#77dd77',
              flex: 1,
            }}
          >
            <Image source={{ uri: successImageUri }} style={{ width: 100, height: 100, marginBottom: 25 }} />
            <Text style={{ fontSize: 25 }}>Signed In!</Text>
            <Text>{JSON.stringify(user)}</Text>
            <Button title="Sign Out" color="red" onPress={this.signOut} />
          </View>
        )}
      </View>
    );
  }
}
