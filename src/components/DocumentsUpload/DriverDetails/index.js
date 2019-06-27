import React, { Component } from 'react';
import {
  CameraRoll,
  Image,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';
import { PermissionsAndroid } from 'react-native'



class DriverDetails extends Component {

  state = {
    showPhotoGallery: false,
    photoArray: []
  }
  async requestExternalStoreageRead() {
    try {
        const granted = await PermissionsAndroid.request(
                  PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                  {
                       'title': 'Cool App ...',
                       'message': 'App needs access to external storage'
                   }
        );

        return granted == PermissionsAndroid.RESULTS.GRANTED
} 
catch (err) {
  //Handle this error
  return false;
}
  }
//   getPhotos = async () => {
//     //Before calling getPhotos, request permission
//     if (await this.requestExternalStoreageRead()){
//         CameraRoll.getPhotos({
//             first: 1000,
//             assetType: 'All'
//         })
//         .then((r) => {
//              this.setState({ photos: r.edges, summary: `Number of photos found ${r.edges.length}` })
//     })
//     .catch((error) => {
//         this.setState({errorMsg: error.message});
//     })
//   }
// }

async getPhotosFromGallery() {
    if (await this.requestExternalStoreageRead()){
        CameraRoll.getPhotos({ first: 1000000 })
        .then(res => {
          let photoArray = res.edges;
          this.setState({ showPhotoGallery: true, photoArray: photoArray })
        })
    }

  }

  render() {

    return (
      <View style={styles.container}>

        <TouchableHighlight
          onPress={() => this.getPhotosFromGallery()}>
          <Image
            source={require('../assets/logo.png')} />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default DriverDetails;
