// import ViewPager from "@react-native-community/viewpager";
// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';
// class MyPager extends React.Component { 
//   render() {
//     return (
        
//       <ViewPager
//         style={styles.viewPager}
//         initialPage={0}>
//         <View key="1">
//           <Text>First page</Text>
//         </View>
//         <View key="2">
//           <Text>Second page</Text>
//         </View>
//       </ViewPager>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   viewPager: {
//     flex: 1,
//     backgroundColor:'#0f1'
//   },
// })
// export default MyPager;


import {StyleSheet, View, Text} from 'react-native';
import React, {Component} from 'react';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';

export default class ViewPagerPage extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <IndicatorViewPager
                    style={{height:200}}
                    indicator={this._renderDotIndicator()}
                >
                    <View style={{backgroundColor:'cadetblue'}}>
                        <Text>page one</Text>
                    </View>
                    <View style={{backgroundColor:'cornflowerblue'}}>
                        <Text>page two</Text>
                    </View>
                    <View style={{backgroundColor:'#1AA094'}}>
                        <Text>page three</Text>
                    </View>
                </IndicatorViewPager>

                <IndicatorViewPager
					style={{flex:1, paddingTop:20, backgroundColor:'white'}}
                    indicator={this._renderTitleIndicator()}
                >
                    <View style={{backgroundColor:'cadetblue'}}>
                        <Text>page one</Text>
                    </View>
                    <View style={{backgroundColor:'cornflowerblue'}}>
                        <Text>page two</Text>
                    </View>
                    <View style={{backgroundColor:'#1AA094'}}>
                        <Text>page three</Text>
                    </View>
                </IndicatorViewPager>
                
                <IndicatorViewPager
					style={{flex:1, paddingTop:20, backgroundColor:'white'}}
                    indicator={this._renderTabIndicator()}
                >
                    <View style={{backgroundColor:'cadetblue'}}>
                        <Text>page one</Text>
                    </View>
                    <View style={{backgroundColor:'cornflowerblue'}}>
                        <Text>page two</Text>
                    </View>
                    <View style={{backgroundColor:'#1AA094'}}>
                        <Text>page three</Text>
                    </View>
                </IndicatorViewPager>
            </View>
        );
    }

    _renderTitleIndicator() {
        return <PagerTitleIndicator titles={['one', 'two', 'three']} />;
    }

    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={3} />;
    }
    
    _renderTabIndicator() {
        let tabs = [{
                text: 'Home',
                iconSource: require('./img/manish.png'),
                selectedIconSource: require('./img/manish.png')
            },{
                text: 'Message',
                iconSource: require('./img/manish2.png'),
                selectedIconSource: require('./img/manish2.png')
            },{
                text: 'Profile',
                iconSource: require('./img/manish2.png'),
                selectedIconSource: require('./img/manish2.png')
        }];
        return <PagerTabIndicator tabs={tabs} />;
    }

}