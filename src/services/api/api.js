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

export default class ApiService {
    constructor() { }

   //GET REQUEST
    getRequest(url) {
        console.log('In GET res');
      return  axios.get(url).then(function (response) {
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
    postRequest(requestUrl, data){
        console.log('In Post')
        return fetch(requestUrl, {
            method: 'POST',
            headers: {
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


