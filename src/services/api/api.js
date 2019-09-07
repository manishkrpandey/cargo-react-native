// fetch(loginUrl,{
//     method: 'POST', 
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data) })
// .then((response) => response)
// .then((responseJson) => {
// if(JSON.parse(responseJson['_bodyText'])['data'][0].isLoggedIn){
//     alert('Logged In succesfully');
// }else{
//     alert('Mobile Number or Password did not match');
// }
// //   alert(JSON.parse(responseJson['_bodyText'])['data'][0].isLoggedIn);
// })
// .catch((error) => {
// alert('There is some error on, Please try again..');

// });

import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';


export default class ApiService {
    constructor() {
        // console.log('In cons',this.getTokenData())
     }

    // getTokenData = async () => {
    //     try {
    //       const value = await AsyncStorage.getItem('userdata');
    //       if(value !== null) {
    //         console.log('In GET token func',value);
    //         return value;
    //       }else{
    //           return '';
    //       }
    //     } catch(e) {
    //       // error reading value
    //     }
    //   }
   //GET REQUEST
    getRequest(url,reqobj,token) {
        let bearer = 'Bearer ' + token;
        console.log('In GET',reqobj,token);
      return  axios.get(url,reqobj,{ headers: { Authorization: bearer } }).then(function (response) {
        console.log('In GET res',response);
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
            alert('There is some error on Page, Please try again..');
            return;
        });
    }

    //POST REQUEST
    postRequest(requestUrl, data,token){
        let AuthToken = token?token:'';
        console.log('In Post',AuthToken);
        let bearer = 'Bearer ' + AuthToken;
        return  fetch(requestUrl, {
            method: 'POST',
            headers: {
                'Authorization': bearer,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then((response) => {
            return response.json();
        }).then(res => {
            console.log('In Post res',res);
            return res
        })
        .catch(error => {
            console.log(error);
        })
    }
}


