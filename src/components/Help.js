import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import { Icon, Container, Header, Left, Accordion } from 'native-base';

const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];

class Help extends Component {
    render() {
        return (
            <Container>
                <Header style={styles.topHeader}>
                    <Left>
                        <Icon name="menu" style={{ marginTop: -12 }} onPress={() => this.props.navigation.openDrawer()} />
                    </Left>
                    <Text style={{ color: '#20336b', fontSize: 20, fontWeight: 'bold', paddingBottom: 0, marginLeft: -100 }}>
                        HELP
                    </Text>
                </Header>
                <View style={StyleSheet.Container}>
                    <View>
                        <Text style={styles.stripHeader}>
                            Raise a Complain
                        </Text>
                    </View>

                    <View>
                        <Text style={styles.stripHeader}>
                            FAQs
                        </Text>
                    </View>
                    <View>
                        <Accordion style={styles.padderAccordian} dataArray={dataArray} expanded={0} />
                    </View>
                </View>
            </Container>
        )
    }
}
export default Help;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    topHeader: {
        backgroundColor: '#fff',
        paddingTop: 15,
        paddingLeft: 15,
        justifyContent: 'flex-start',
        marginBottom: 10
    },
    stripHeader: {
        fontSize: 18,
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 5,
        color: '#fff',
        backgroundColor: '#10d4f4',
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 4
    },
    padderAccordian: {
        paddingLeft: 15,
        paddingRight: 15
    }
})
