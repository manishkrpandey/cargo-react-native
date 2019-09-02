import ApiService from './api'


const apiService = new ApiService();

export default class AuthenticationController {
    constructor() {
    }

    registerUser = (userData) => {
        console.log('entered');
        return fetch('https://ancient-atoll-80049.herokuapp.com/user/signup', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        }).then((response) => {
            return response.json();
        }).then(res=>res)
        .catch(error => {
            console.log(error);
        })
    }


    loginUser(userData) {
        console.log('entered');
       return fetch('https://ancient-atoll-80049.herokuapp.com/user/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        }).then(function (response) {
            return response.json();
        }).catch(function (error) {
                console.log(response);
                alert('There is some error on Page, Please try again..');
                return;
            });

    }


}