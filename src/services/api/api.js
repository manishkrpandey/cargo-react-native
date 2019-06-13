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

export class ApiService {
    constructor() { }
    getRequest(url) {
        axios.get(loginUrl)
            .then(function (response) {
                if (response['data']['data'][0].isLoggedIn) {
                    alert('Logged In succesfully');
                } else {
                    alert('Mobile Number or Password did not match');
                }
            })
            .catch(function (error) {
                alert('There is some error on Page, Please try again..');
            });
    }
    postRequest(requestUrl, data){
        axios.post(requestUrl, data)
            .then(function (response) {
                // if (response['data']['data'][0].isLoggedIn) {
                //     alert('Logged In succesfully');
                // } else {
                //     alert('Mobile Number or Password did not match');
                // }
                return response;
            })
            .catch(function (error) {
                alert('There is some error on Page, Please try again..');
                return;
            });
    }
}


