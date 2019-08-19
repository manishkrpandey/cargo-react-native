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
    getRequest(url) {
        axios.get(url).then(function (response) {
            console.log(response);
            return response.json();

        })
        .catch(function (error) {
            console.log(response);
            alert('There is some error on Page, Please try again..');
            return;
        });
    }
    postRequest(requestUrl, data){
        axios.post(requestUrl, data).then(function (response) {
            console.log(response);
            return response.json();

        })
        .catch(function (error) {
            console.log(response);
            alert('There is some error on Page, Please try again..');
            return;
        });
    }
}


