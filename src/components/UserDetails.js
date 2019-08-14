import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Image, TouchableHighlight
} from 'react-native';
import { Icon, Button, Container, Header, Content, Left, Right, Label, Input, Item } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import ImagePicker from 'react-native-image-picker';

const options = {
    title: 'Select Image',
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};



class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: 'Raj Barnwal',
            mobile: '8523450187',
            email: 'abc@xyz.com',
            address: 'KM-28, Jaypee Kosmos, Sector-134, Noida',
            isEdit: true,
            avatarSource: { "uri": '' }
        };


    }


    handleUsername = (text) => {
        this.setState({ username: text })
    };

    handlePhoneNo = (text) => {
        this.setState({ phone: text })
    };

    handleEmail = (text) => {
        this.setState({ email: text })
    };

    handleAddress = (text) => {
        this.setState({ address: text })
    };

    openEditFields = () => {
        console.log('hello');
        this.setState(prevState => ({
            ...prevState,
            isEdit: !prevState.isEdit
        }))
    };

    onButtonPress = () => {
        this.setState(prevState => ({
            ...prevState,
            isEdit: !prevState.isEdit
        }))
    }
    chooseImage = () => {

    }
    launchCamera = () => {

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

                this.setState({
                    avatarSource: source,
                });

            }
        });
    }
    render() {
        let image;
        if (this.state.avatarSource && this.state.avatarSource.uri) {
            image = <Image
                style={{ width: 100, height: 100, borderRadius: 60 }}
                source={this.state.avatarSource}
            />

        } else {
            image = <Image style={{ width: 100, height: 100, borderRadius: 60, borderColor: "#000", borderWidth: 2 }}
                source={require('../../img/user.png')}
            />
        }
        return (
            <Container>
                <Header style={{ backgroundColor: '#fff', paddingTop: 15, paddingLeft: 15, justifyContent: 'flex-start' }}>
                    <Left>
                        <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
                    </Left>
                </Header>
                <Grid>
                    <Row size={4}>
                        <Col style={{ backgroundColor: '#00CE9F' }}>
                            {
                                !this.state.isEdit ? null : (

                                    <View style={{ textAlign: 'right', paddingRight: 30 }}>
                                        <Text style={styles.editLink} onPress={this.openEditFields}>
                                            EDIT
                         </Text>

                                    </View>)
                            }
                        </Col>

                    </Row>
                    <Row size={22}>
                        <Col style={{ backgroundColor: '#00CE9F' }}>
                            <View style={styles.userImage} >
                                {image}
                            </View>

                    {
                        this.state.isEdit ?
                            (
                                null
                            ) :
                            <View style={{ flex: 1 }}>
                                <Text style={styles.changeImgLink} onPress={this.launchCamera}>
                                    Change Picture
                                 </Text>
                            </View>
                    }
                        </Col>

                    </Row>

                    <Row size={50}>
                        <Col style={{ backgroundColor: '#fff' }}>
                        <Row  style={{ padding: 20}}>
                          <Col style={{ width: '30%' }}>
                              <Text style={styles.title}>Name:</Text>
                            </Col>

                          <Col>
                              <Text style={styles.heading}>{this.state.fullName}</Text>
                         </Col>
                      </Row>
                      <Row style={{ padding: 20}}>
                            <Col style={{ width: '30%' }}>
                                <Text style={styles.title}>Email:</Text>
                            </Col>
                            <Col>
                                {
                                    this.state.isEdit ?
                                        (<Text style={styles.heading}>{this.state.email}</Text>)
                                        :
                                        (
                                            <TextInput
                                                style={styles.forminput}
                                                onChangeText={(email) => this.setState({ email })}
                                                value={this.state.email}
                                                keyboardType='email-address'
                                            />
                                        )
                                }
                            </Col>
                        </Row>
                        <Row style={{ padding: 20}}>
                            <Col style={{ width: '30%' }}>
                                <Text style={styles.title}>Mobile:</Text>
                            </Col>
                            <Col>
                                {
                                    this.state.isEdit ?
                                        (<Text style={styles.heading}>{this.state.mobile}</Text>)
                                        :
                                        (<TextInput
                                            style={styles.forminput}
                                            onChangeText={(mobile) => this.setState({ mobile })}
                                            value={this.state.mobile}
                                            keyboardType='number-pad'
                                        />)
                                }
                            </Col>
                        </Row>

                        <Row style={{ padding: 20}}>
                            <Col style={{ width: '30%' }}>
                                <Text style={styles.title}>Address:</Text>
                            </Col>
                            <Col>
                                {
                                    this.state.isEdit ?
                                        (<Text style={styles.heading}>
                                            {this.state.address}
                                        </Text>)
                                        :
                                        (<TextInput
                                            style={styles.textAreaInput}
                                            onChangeText={(address) => this.setState({ address })}
                                            value={this.state.address}
                                            multiline = {true}
                                            numberOfLines = {4}
                                        />)
                                }
                            </Col>
                        </Row>


                        </Col>
                    </Row>
                    <Row size={30}>

                    </Row>

                    {
                        this.state.isEdit ?
                            (
                                <Row size={30}></Row>
                            ) :
                            <Row size={30}>
                                <Col>
                                    <View style={styles.btnStyle}>
                                        <Button onPress={this.onButtonPress} style={styles.button}>
                                            <Text style={{ color: '#fff', paddingLeft: 20 }}>UPDATE</Text>
                                        </Button>
                                    </View>
                                </Col>
                                <Col>
                                    <View style={styles.btnStyle}>
                                        <Button onPress={this.onButtonPress} style={styles.cancelBtn}>
                                            <Text style={{ color: '#fff', paddingLeft: 20 }}>CANCEL</Text>
                                        </Button>
                                    </View>
                                </Col>

                            </Row>
                    }

                </Grid>
            </Container>
            // <Container>
            //     <Header style={{ backgroundColor: '#fff', paddingTop: 15, paddingLeft: 15, justifyContent: 'flex-start' }}>
            //         <Left>
            //             <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
            //         </Left>
            //     </Header>
            //     <View>
            //         {
            //             !this.state.isEdit ? null : (

            //             <View style={{ textAlign: 'right', paddingTop: 20, paddingRight: 30 }}>
            //                 <Text style={styles.editLink} onPress={this.openEditFields}>
            //                    EDIT
            //                 </Text>

            //             </View>)
            //         }
            //         <Grid>
            //             <Row>
            //                 <Col style={{marginTop:40,marginBottom:30}}>
            //                     <View style={styles.userImage} >
            //                         {image}
            //                     </View>

            //                     {
            //                         !this.state.isEdit ?
            //                             (
            //                                 <View style={{flex:1}}>
            //                                     <Text style={styles.changeImgLink} onPress={this.launchCamera}>
            //                                         Change Picture
            //                                     </Text>
            //                                 </View>
            //                             )
            //                             :
            //                             null
            //                     }
            //                 </Col>
            //             </Row>
            //             <Row style={{ padding: 20,marginTop:200 }}>
            //                 <Col style={{ width: '30%' }}>
            //                     <Text style={styles.title}>Name:</Text>
            //                 </Col>

            //                 <Col>
            //                     <Text style={styles.heading}>{this.state.fullName}</Text>
            //                 </Col>
            //             </Row>

            //             <Row style={{ padding: 20, marginTop: 15 }}>
            //                 <Col style={{ width: '30%' }}>
            //                     <Text style={styles.title}>Email:</Text>
            //                 </Col>
            //                 <Col>
            //                     {
            //                         this.state.isEdit ?
            //                             (<Text style={styles.heading}>{this.state.email}</Text>)
            //                             :
            //                             (
            //                                 <TextInput
            //                                     style={styles.forminput}
            //                                     onChangeText={(email) => this.setState({ email })}
            //                                     value={this.state.email}
            //                                     keyboardType='email-address'
            //                                 />
            //                             )
            //                     }
            //                 </Col>
            //             </Row>

            //             <Row style={{ padding: 20, marginTop: 15 }}>
            //                 <Col style={{ width: '30%' }}>
            //                     <Text style={styles.title}>Mobile:</Text>
            //                 </Col>
            //                 <Col>
            //                     {
            //                         this.state.isEdit ?
            //                             (<Text style={styles.heading}>{this.state.mobile}</Text>)
            //                             :
            //                             (<TextInput
            //                                 style={styles.forminput}
            //                                 onChangeText={(mobile) => this.setState({ mobile })}
            //                                 value={this.state.mobile}
            //                                 keyboardType='number-pad'
            //                             />)
            //                     }
            //                 </Col>
            //             </Row>

            //             <Row style={{ padding: 20, marginTop: 15 }}>
            //                 <Col style={{ width: '30%' }}>
            //                     <Text style={styles.title}>Address:</Text>
            //                 </Col>
            //                 <Col>
            //                     {
            //                         this.state.isEdit ?
            //                             (<Text style={styles.heading}>
            //                                 {this.state.address}
            //                             </Text>)
            //                             :
            //                             (<TextInput
            //                                 style={styles.textAreaInput}
            //                                 onChangeText={(address) => this.setState({ address })}
            //                                 value={this.state.address}
            //                                 multiline = {true}
            //                                 numberOfLines = {4}
            //                             />)
            //                     }
            //                 </Col>
            //             </Row>

            //             {
            //                 this.state.isEdit ?
            //                     (
            //                         null
            //                     ) :
            //                     <Row style={{ padding: 20, marginTop: 15, display:'flex' }}>
            //                         <Col>
            //                             <View style={styles.btnStyle}>
            //                                 <Button onPress={this.onButtonPress} style={styles.button}>
            //                                     <Text style={{color: '#fff', paddingLeft: 20}}>UPDATE</Text>
            //                                 </Button>
            //                             </View>
            //                         </Col>
            //                         <Col>
            //                             <View style={styles.btnStyle}>
            //                                 <Button onPress={this.onButtonPress} style={styles.cancelBtn}>
            //                                     <Text style={{color: '#fff', paddingLeft: 20}}>CANCEL</Text>
            //                                 </Button>
            //                             </View>
            //                         </Col>
            //                     </Row>
            //             }
            //         </Grid>

            //     </View>
            // </Container>
        )
    }
}
export default UserDetails;

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
    },
    heading: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    editLink: {
        color: '#20336b',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 5,
        borderColor: '#ebebeb',
        textAlign: 'right',
        marginLeft: 20
    },
    forminput: {
        paddingLeft: 3,
        paddingBottom: 5,
        height: 40,
        color: '#3f414d',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        marginTop: -15
    },
    textAreaInput: {
        paddingLeft: 3,
        paddingBottom: 5,
        height: 60,
        color: '#3f414d',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        marginTop: -15
    },
    btnStyle: {
        marginTop: 30,
        marginLeft: 40
    },
    button: {
        backgroundColor: '#20336b',
        borderRadius: 5,
        color: '#fff',
        height: 40,
        letterSpacing: 1.5,
        lineHeight: 40,
        width: 100,
        marginRight: 10,
        padding: 5,
    },
    cancelBtn: {
        backgroundColor: '#b0280f',
        borderRadius: 5,
        color: '#fff',
        height: 40,
        letterSpacing: 1.5,
        lineHeight: 40,
        width: 100,
        marginRight: 10,
        padding: 5,
    },
    userImage: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
    },
    changeImgLink: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 14,
        borderColor: '#ebebeb',
        textAlign: 'center',
        marginTop: 40

    }
});
