import React, { Component } from 'react';
import { Text, View, Button, Image, StyleSheet, ScrollView, TouchableHighlight} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Container, Header, Content, Card, CardItem, Left, Body, Right, Icon } from 'native-base';
import { ConfirmDialog } from 'react-native-simple-dialogs';


const options = {
  title: 'Select Image',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const imgArraySrc = ['PasbookDocumentSrc','rcDocumentSrc','permitDocumentSrc','insuranceDocumentSrc','dInsuranceDocumentSrc','pollutionDocumentSrc','PasbookDocumentSrc'];

export default class UploadDocuments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dlDocumentSrc: { "uri": '' },
      rcDocumentSrc: { "uri": '' },
      permitDocumentSrc: { "uri": '' },
      insuranceDocumentSrc: { "uri": '' },
      dInsuranceDocumentSrc: { "uri": '' },
      pollutionDocumentSrc: { "uri": '' },
      PasbookDocumentSrc: { "uri": '' },
      avatarSource: { "uri": '' },
      isModalVisible: false,
      currentSelectedDoc: ''
    };
  }

  launchCamera = (documentType) => {

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
        if (documentType === 'DL') {
          this.setState({
            dlDocumentSrc: source,
          });
        }
        if (documentType === 'RC') {
          this.setState({
            rcDocumentSrc: source,
          });
        }
        if (documentType === 'PERMIT') {
          this.setState({
            permitDocumentSrc: source,
          });
        }
        if (documentType === 'INVH') {
          this.setState({
            insuranceDocumentSrc: source,
          });
        }
        if (documentType === 'INDL') {
          this.setState({
            dInsuranceDocumentSrc: source,
          });
        }
        if (documentType === 'POL') {
          this.setState({
            pollutionDocumentSrc: source,
          });
        }
        if (documentType === 'PASSBOOK') {
          this.setState({
            PasbookDocumentSrc: source,
          });
        }
      }
    });
  }
  submitDocuments = () => {
    let InvalidForm = false;
    imgArraySrc.forEach((element)=>{
      if(this.state[element].uri===''){
        InvalidForm = true;
      }
    })
    if(InvalidForm){
      alert("Please upload all documents.");
      
    }else{
      alert('Documents submitted successfully.');
    }
  }

  toggleModal = (documenType) => {
    this.setState({isModalVisible: !this.isModalVisible});
    this.setState({currentSelectedDoc:documenType});
  };

  onDeleteSelected = () => {
    this.setState({isModalVisible: false})
    if (this.state.currentSelectedDoc === 'DL' ) {
      this.setState({
        dlDocumentSrc: { "uri": '' }
      });
    }
    if (this.state.currentSelectedDoc === 'RC' ) {
      this.setState({
        rcDocumentSrc: { "uri": '' },
      });
    }
    if (this.state.currentSelectedDoc === 'PERMIT' ) {
      this.setState({
        permitDocumentSrc: { "uri": '' },
      });
    }
    if (this.state.currentSelectedDoc === 'INVH' ) {
      this.setState({
        insuranceDocumentSrc: { "uri": '' },
      });
    }
    if (this.state.currentSelectedDoc === 'INDL' ) {
      this.setState({
        dInsuranceDocumentSrc: { "uri": '' },
      });
    }
    if (this.state.currentSelectedDoc === 'POL' ) {
      this.setState({
        pollutionDocumentSrc: { "uri": '' },
      });
    }
    if (this.state.currentSelectedDoc === 'PASSBOOK' ) {
      this.setState({
        PasbookDocumentSrc: { "uri": '' },
      });
    }
  }

  canCelDialog = () => {
    this.setState({isModalVisible: false})
  }


  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View>
            <TouchableHighlight style={styles.commonBtn}>
            <Button
              onPress={() => this.launchCamera('DL')}
              title="Upload Driving Licence Document"
              color="#20336b"
              accessibilityLabel="Upload Driving Licence Document"
            />
            </TouchableHighlight>
            <View>
              {
                this.state.dlDocumentSrc && this.state.dlDocumentSrc.uri ? (<Card>
                  <CardItem style={styles.cardItem}>
                    <Left>
                      <Body>
                        <View style={{flex:1, justifyContent:'space-between'}}>
                          <Text style={styles.carHeader}>Driving Licence
                          </Text>
                          <Text style={styles.closeIcon} onPress={()=>this.toggleModal('DL')}><Icon name="close-circle" style={{color: '#fff'}}/></Text>
                        </View>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem cardBody>
                    <Image source={this.state.dlDocumentSrc} style={{ height: 200, width: null, flex: 1 }} />
                  </CardItem>
                </Card>) : <View><Text></Text></View>
              }

            </View>
          </View>
          <View>
            <TouchableHighlight style={styles.commonBtn}>
            <Button
              onPress={() => this.launchCamera('RC')}
              title="Upload Registration Certificate Document"
              color="#20336b"
              accessibilityLabel="Upload Driving Licence Document"
            />
            </TouchableHighlight>
            <View>
              {
                this.state.rcDocumentSrc && this.state.rcDocumentSrc.uri ? (<Card>
                  <CardItem style={styles.cardItem}>
                    <Left>
                      <Body>
                        <Text style={styles.carHeader}>Registration Certificate</Text>
                        <Text style={styles.closeIcon} onPress={()=>this.toggleModal('RC')}><Icon name="close-circle" style={{color: '#fff'}}/></Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem cardBody>
                    <Image source={this.state.rcDocumentSrc} style={{ height: 200, width: null, flex: 1 }} />
                  </CardItem>
                </Card>) : <View><Text></Text></View>
              }

            </View>
          </View>
          <View>
            <TouchableHighlight style={styles.commonBtn}>
            <Button
              onPress={() => this.launchCamera('PERMIT')}
              title="Upload Permit Document "
              color="#20336b"
              accessibilityLabel="Upload Driving Licence Document"
            />
            </TouchableHighlight>
            <View>
              {
                this.state.permitDocumentSrc && this.state.permitDocumentSrc.uri ? (<Card>
                  <CardItem style={styles.cardItem}>
                    <Left>
                      <Body>
                        <Text style={styles.carHeader}>Permit Document</Text>
                        <Text style={styles.closeIcon} onPress={()=>this.toggleModal('PERMIT')}><Icon name="close-circle" style={{color: '#fff'}}/></Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem cardBody>
                    <Image source={this.state.permitDocumentSrc} style={{ height: 200, width: null, flex: 1 }} />
                  </CardItem>
                </Card>) : <View><Text></Text></View>
              }

            </View>
          </View>
          <View>
            <TouchableHighlight style={styles.commonBtn}>
            <Button
              onPress={() => this.launchCamera('INVH')}
              title="Upload Vehicle Insurance Documents"
              color="#20336b"
              accessibilityLabel="Upload Driving Licence Document"
            />
            </TouchableHighlight>
            <View>
              {
                this.state.insuranceDocumentSrc && this.state.insuranceDocumentSrc.uri ? (<Card>
                  <CardItem style={styles.cardItem}>
                    <Left>
                      <Body>
                        <Text style={styles.carHeader}>Insurance Vehicle</Text>
                        <Text style={styles.closeIcon} onPress={()=>this.toggleModal('INVH')}><Icon name="close-circle" style={{color: '#fff'}}/></Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem cardBody>
                    <Image source={this.state.insuranceDocumentSrc} style={{ height: 200, width: null, flex: 1 }} />
                  </CardItem>
                </Card>) : <View><Text></Text></View>
              }

            </View>
          </View>
          <View>
            <TouchableHighlight style={styles.commonBtn}>
            <Button
              onPress={() => this.launchCamera('INDL')}
              title="Upload Driver Insurance Documents"
              color="#20336b"
              accessibilityLabel="Upload Driving Licence Document"
            />
            </TouchableHighlight>
            <View>
              {
                this.state.dInsuranceDocumentSrc && this.state.dInsuranceDocumentSrc.uri ? (<Card>
                  <CardItem style={styles.cardItem}>
                    <Left>
                      <Body>
                        <Text style={styles.carHeader}>Driver Insurance</Text>
                        <Text style={styles.closeIcon} onPress={()=>this.toggleModal('INDL')}><Icon name="close-circle" style={{color: '#fff'}}/></Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem cardBody>
                    <Image source={this.state.dInsuranceDocumentSrc} style={{ height: 200, width: null, flex: 1 }} />
                  </CardItem>
                </Card>) : <View><Text></Text></View>
              }

            </View>
          </View>
          <View>
            <TouchableHighlight style={styles.commonBtn}>
            <Button
              onPress={() => this.launchCamera('POL')}
              title="Upload Pollution Document"
              color="#20336b"
              accessibilityLabel="Upload Driving Licence Document"
            />
            </TouchableHighlight>
            <View>
              {
                this.state.pollutionDocumentSrc && this.state.pollutionDocumentSrc.uri ? (<Card>
                  <CardItem style={styles.cardItem}>
                    <Left>
                      <Body>
                        <Text style={styles.carHeader}>Pollution Certificate</Text>
                        <Text style={styles.closeIcon} onPress={()=>this.toggleModal('POL')}><Icon name="close-circle" style={{color: '#fff'}}/></Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem cardBody>
                    <Image source={this.state.pollutionDocumentSrc} style={{ height: 200, width: null, flex: 1 }} />
                  </CardItem>
                </Card>) : <View><Text></Text></View>
              }

            </View>
          </View>
          <View>
            <TouchableHighlight style={styles.commonBtn}>
            <Button
              onPress={() => this.launchCamera('PASSBOOK')}
              title="Upload Passbook Document"
              color="#20336b"
              accessibilityLabel="Upload Driving Licence Document"
            />
            </TouchableHighlight>
            <View>
              {
                this.state.PasbookDocumentSrc && this.state.PasbookDocumentSrc.uri ? (<Card>
                  <CardItem style={styles.cardItem}>
                    <Left>
                      <Body>
                        <Text style={styles.carHeader}>Passbook Document</Text>
                        <Text style={styles.closeIcon} onPress={()=>this.toggleModal('PASSBOOK')}><Icon name="close-circle" style={{color: '#fff'}}/></Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem cardBody>
                    <Image source={this.state.PasbookDocumentSrc} style={{ height: 200, width: null, flex: 1 }} />
                  </CardItem>
                </Card>) : <View><Text></Text></View>
              }

            </View>
          </View>
          <View>
            <TouchableHighlight style={styles.submitBtn}>
            <Button
              onPress={this.submitDocuments}
              title="Submit Your Documents"
              color="#b0280f"
              backgroundColor="#20336b"
            />
            </TouchableHighlight>
          </View>

          <ConfirmDialog
              title="Delete Document"
              message="Are you sure to remove this document?"
              visible={this.state.isModalVisible}
              onTouchOutside={() => this.setState({isModalVisible: false})}
              positiveButton={{
                title: "YES",
                onPress: () =>{this.onDeleteSelected() ; this.canCelDialog()}
              }}
              negativeButton={{
                title: "NO",
                onPress: () => this.canCelDialog()
              }}
          />

        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  uploadDocuments: {
    textAlign: 'left',
    fontSize: 18,
    marginTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#10d4f4',
    color: '#fff'
  },
  carHeader: {
    color: "#000",
    fontWeight: 'bold',
  },
  cardItem: {
    backgroundColor: '#10d4f4'
  },
  commonBtn: {
    paddingTop:8,
    height: 50,
    width:'100%',
    borderRadius:5,
    backgroundColor : "#20336b",
    marginLeft :0,
    marginRight:0,
    marginTop :5
  },
  submitBtn: {
    height: 50,
    width:'100%',
    borderRadius:5,
    backgroundColor : "#b0280f",
    marginLeft :0,
    marginRight:0,
    marginTop :5,
    paddingTop:8
  },
  closeIcon: {
    alignSelf:'flex-end',
    marginTop:-25,
    marginBottom:-7
  },
  modalContent: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    backgroundColor:'#fff',
    height:200
},
});
