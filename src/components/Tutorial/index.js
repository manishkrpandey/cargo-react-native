import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableWithoutFeedback,
    ProgressBarAndroid
} from 'react-native';
import Modal from "react-native-modal";
import Video from 'react-native-video';

class Tutorial extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rate: 1,
            volume: 1,
            muted: false,
            resizeMode: 'cover',
            duration: 0.0,
            currentTime: 0.0,
            paused: false,
            pickerValueHolder: '1.0',
            pausedText: 'Play',
            hideControls: false,
            isModalVisible: false
        };
        this.video = Video;
    }

    toggleModal = () => {
        this.setState({
            isModalVisible: !this.state.isModalVisible,
        });
    };

    onLoad = (data) => {
        this.setState({ duration: data.duration });
    };

    // video is playing
    onProgress = (data) => {
        this.setState({ currentTime: data.currentTime });
    };

    // video ends
    onEnd = () => {
        this.setState({ paused: true, pausedText: 'Play'})
        this.video.seek(0);
    };

    getCurrentTimePercentage() {
        if (this.state.currentTime > 0) {
            return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
        }
        return 0;
    };

    // pressing on 'play' button
    onPressBtnPlay() {
        var pausedText = '';
        if(!this.state.paused){
            pausedText = 'PLAY';

            // always show controls
            if(this.timeoutHandle)
                clearTimeout(this.timeoutHandle);
        }
        else {
            pausedText = 'PAUSE';

            // hide controls after 5s
            this.timeoutHandle = setTimeout(()=>{
                this.setState({hideControls: true});
            }, 5000);
        }
        this.setState({ paused: !this.state.paused, pausedText: pausedText });
    }

    // on press video event
    onPressVideo() {
        // showing controls if they don't show
        if(this.state.hideControls){
            this.setState({hideControls: false});
            this.timeoutHandle = setTimeout(()=>{
                this.setState({hideControls: true});
            }, 8000);
        }
    }

    // parse seconds to time (hour:minute:second)
    parseSecToTime(sec) {
        var sec_num = parseInt(sec, 10); // don't forget the second param
        var hours   = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);

        if (hours   < 10) {hours   = "0" + hours;}
        if (minutes < 10) {minutes = "0" + minutes;}
        if (seconds < 10) {seconds = "0" + seconds;}

        return hours + ':' + minutes + ':' + seconds;
    }


    render() {
        return (
            <View style={StyleSheet.Container}>
                <Button title="Show Tutorial" onPress={this.toggleModal} />
                <Modal isVisible={this.state.isModalVisible}>
                    <View style={{ flex: 1 }}>
                        <TouchableWithoutFeedback
                            style={styles.fullScreen}
                            onPress={() => this.onPressVideo()}>
                            <Video
                                ref={(ref: Video) => { this.video = ref }}
                                source={{ uri: 'https://rawgit.com/uit2712/Mp3Container/master/tom_and_jerry_31.mp4' }}
                                // source={require('./videos/tom_and_jerry_31.mp4')}
                                style={styles.fullScreen}
                                rate={this.state.rate}
                                paused={this.state.paused}
                                volume={this.state.volume}
                                muted={this.state.muted}
                                resizeMode={this.state.resizeMode}
                                onLoad={this.onLoad}
                                onProgress={this.onProgress}
                                onEnd={this.onEnd}
                                onAudioBecomingNoisy={this.onAudioBecomingNoisy}
                                onAudioFocusChanged={this.onAudioFocusChanged}
                                repeat={false}
                            />
                        </TouchableWithoutFeedback>
                        {
                            !this.state.hideControls ?
                                (
                                    <View style={styles.controls}>
                                        <View style={styles.generalControls}>
                                            <View style={styles.playControl}>
                                                <Text style={{color:'#fff', fontSize: 16, fontWeight:'bold'}} onPress={() => this.onPressBtnPlay()}>
                                                    {this.state.pausedText}
                                                </Text>
                                            </View>
                                        </View>

                                        <View style={styles.trackingControls}>
                                            <ProgressBarAndroid
                                                style={styles.progress}
                                                styleAttr="Horizontal"
                                                indeterminate={false}
                                                progress={this.getCurrentTimePercentage()}
                                            />
                                            <Text>{this.parseSecToTime(parseInt(this.state.currentTime))}/{this.parseSecToTime(parseInt(this.state.duration))}</Text>
                                        </View>
                                    </View>
                                ) : (null)
                        }
                        <Button title="Hide Tutorial" onPress={this.toggleModal} />
                    </View>
                </Modal>
            </View>
        )
    }
}
export default  Tutorial;

const styles = StyleSheet.create({
    Container: {
        flex:1,
    },
    backgroundVideo: {
        position: 'absolute',
        top: 20,
        left: 0,
        bottom: 0,
        right: 0,
        width:'100%',
        height:250
    },
    fullScreen: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    playButton: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
    },
    controls: {
        backgroundColor: 'white',
        opacity: 0.7,
        borderRadius: 5,
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
    },
    progress: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 3,
        overflow: 'hidden',
    },
    playControl: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#20336b',
        paddingBottom: 5,
        paddingTop: 5
    },
    resizeModeControl: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
