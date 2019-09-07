// import React, { Component } from 'react';
// import {
//     View,
//     Text,
//     StyleSheet
// } from 'react-native';
// import YouTube from 'react-native-youtube'
//
//
// class Tutorial extends Component {
//     render() {
//         return (
//             <View style={StyleSheet.Container}>
//                 <Text style={styles.title}>Introduction Tutorial</Text>
//
//                 <YouTube
//                     videoId="zZ68jHC45VM"   // The YouTube video ID
//                     play                    // control playback of video with true/false
//                     fullscreen              // control whether the video should play in fullscreen or inline
//                     loop                    // control whether the video should loop when ended
//                     onReady={e => this.setState({ isReady: true })}
//                     onChangeState={e => this.setState({ status: e.state })}
//                     onChangeQuality={e => this.setState({ quality: e.quality })}
//                     onError={e => this.setState({ error: e.error })}
//                     style={{ alignSelf: 'stretch', height: 300 }}
//                 />
//             </View>
//         )
//     }
// }
// export default  Tutorial;
//
// const styles = StyleSheet.create({
//     Container: {
//         flex:1,
//     },
//     title: {
//         color: '#20336b',
//         fontWeight: 'bold',
//         fontSize: 16
//     }
// });
