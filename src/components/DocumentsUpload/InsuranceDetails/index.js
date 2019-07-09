import React, { Component } from 'react';
import { Text, View ,Button,Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';

const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  

export default class InsuranceDetails extends Component {

    constructor(props){
        super(props);
        this.state={
            avatarSource:{"uri":''} 
          }
    }

    launchCamera = () =>{
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response.uri };
               alert(JSON.stringify(source));
              // You can also display the image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          
              this.setState({
                avatarSource: source,
              });

            }
          });
    }

  render() {
  let image;
    if(this.state.avatarSource && this.state.avatarSource.uri){
        image = <Image
           source={this.state.avatarSource}

      />

    }else{
        image = <Text style={{textAlign:'left', fontSize:18, paddingLeft:20, paddingTop:10, paddingBottom:10, backgroundColor: '#10d4f4', color:'#fff'}}>
        Upload Your Documents
    </Text>
    }

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
<Button
  onPress={this.launchCamera}
  title="Launch Camera"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>

{image}

      </View>
    );
  }
}